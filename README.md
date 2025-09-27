# 🧠 AI Quiz Master -  AI-Assisted Knowledge Quiz

An intelligent quiz application that generates personalized multiple-choice questions using AI and provides custom feedback based on performance.

## 1. Project Setup & Demo

**Deployed Project**: [Live Demo](https://ai-knowledge-quiz.vercel.app/)

### Environment Setup

**⚠️ Important: Set up environment variables before running the application**

1. **Backend Environment Setup:**
   ```bash
   cd backend
   cp .env.example .env
   # Edit .env and add your Google AI API key
   ```

2. **Frontend Environment Setup:**
   ```bash
   cd frontend
   cp .env.example .env
   # Edit .env if needed (default values should work for local development)
   ```

3. **Required Environment Variables:**
   - `GOOGLE_API_KEY`: Get your API key from [Google AI Studio](https://makersuite.google.com/app/apikey)

### Web Application Setup
```bash
# Backend setup
cd backend
npm install
npm run dev

# Frontend setup (in a new terminal)
cd frontend
npm install
npm run dev
```

The application will be available at:
- Frontend: `http://localhost:5173`
- Backend API: `http://localhost:5000`

### Environment Variables Reference

**Backend (.env):**
- `PORT`: Server port (default: 5000)
- `NODE_ENV`: Environment mode (development/production)
- `GOOGLE_API_KEY`: Your Google AI API key (required)
- `FRONTEND_URL`: Frontend URL for CORS
- `ALLOWED_ORIGINS`: Comma-separated allowed origins

**Frontend (.env):**
- `VITE_API_BASE_URL`: Backend API URL
- `VITE_API_ENDPOINT`: API endpoint path
- `VITE_NODE_ENV`: Environment mode
- `VITE_ENABLE_DEBUG`: Enable debug logging

### Demo
- **Screen Recording**: [Add screen recording here]

---

## 2. Problem Understanding

### Core Problem
Create an interactive quiz application that can generate questions on any topic using AI, provide a smooth user experience with navigation between questions, and deliver personalized feedback based on quiz performance.

### Key Requirements
- Dynamic topic selection (both predefined and custom topics)
- AI-generated multiple-choice questions with 4 options each
- Progressive quiz navigation with visual progress indicators
- Real-time score tracking
- Personalized AI-generated feedback based on performance
- Responsive design with modern UI/UX

### Assumptions Made
- Users prefer immediate feedback over detailed explanations
- 5 questions per quiz provides optimal engagement without fatigue
- Multiple-choice format is most accessible for diverse topics
- Users want the ability to navigate back and forth between questions
- Dark/light mode toggle enhances user experience

---

## 3. AI Prompts & Iterations

### Initial Quiz Generation Prompt
```
Create 5 multiple-choice questions on [topic]. Each question should have 4 options. Return JSON format.
```

**Issues Faced:**
- Inconsistent JSON structure (sometimes missing brackets, sometimes extra text)
- Questions were too generic and lacked depth
- Options were sometimes too obvious or poorly formatted

### Refined Quiz Generation Prompt
```
You are a quiz generator. Create 5 multiple-choice questions on the topic "[topic]".
Each question should have exactly 4 options.
Return ONLY JSON in this format:

{
  "questions": [
    {
      "question": "string",
      "options": ["opt1", "opt2", "opt3", "opt4"],
      "correctAnswerIndex": 0
    }
  ]
}
```

**Improvements Made:**
- Added explicit JSON structure requirements
- Specified exact format for options array
- Added clear instructions for correct answer indexing
- Implemented JSON parsing with error handling and retry logic

### Feedback Generation Prompt Evolution
**Initial:** Simple score-based feedback
**Refined:** Context-aware feedback considering topic and performance level

```
You are a quiz coach. The user took a quiz on "[topic]".
They scored [score]/5 ([percentage]%).
Give a short motivational feedback message in plain text (not JSON).
```

**Challenges Overcome:**
- AI sometimes returned JSON when plain text was requested
- Feedback was too generic across different topics
- Added topic context to make feedback more relevant

---

## 4. Architecture & Code Structure

### Frontend Architecture (React + Vite)
```
frontend/src/
├── App.jsx                 # Main router and navigation management
├── pages/
│   ├── Home.jsx           # Topic selection screen
│   ├── Quiz.jsx           # Question display and navigation
│   └── Feedback.jsx       # Results and AI-generated feedback
├── components/
│   ├── QuestionCard.jsx   # Reusable question component
│   ├── Loader.jsx         # Loading states
│   └── ThemeToggle.jsx    # Dark/light mode toggle
├── contexts/
│   └── ThemeContext.jsx   # Global theme state management
└── api/
    └── quizApi.js         # API service layer
```

### Backend Architecture (Node.js + Express)
```
backend/
├── index.js              # Server setup and middleware
├── routes/
│   └── quizRoutes.js     # API endpoints
└── services/
    └── aiService.js      # AI integration with Google Gemini
```

### State Management
- **React Context**: Used for theme management across components
- **Local State**: useState hooks for component-specific state
- **URL State**: React Router for navigation and data passing

### AI Service Integration
- **Google Gemini 2.0 Flash**: Primary AI model for content generation
- **LangChain**: Framework for structured AI interactions
- **Error Handling**: Retry logic and fallback responses for malformed AI outputs

### Key Components

#### QuestionCard Component
Reusable component handling:
- Question display with proper formatting
- Option selection with visual feedback
- Answer confirmation display

#### Theme System
- System preference detection
- Local storage persistence
- Smooth transitions between themes
- CSS custom properties for consistent theming

---

## 5. Screenshots / Screen Recording

### Screenshots
*[Add screenshots here covering all screens]*

1. **Home Screen**: Topic selection with quick start buttons and custom input
2. **Quiz Screen**: Question display with progress bar and navigation
3. **Feedback Screen**: Score display with AI-generated feedback
4. **Dark Mode**: Application in dark theme

### Screen Recording
*[Add screen recording here showing complete user flow]*

---

## 6. Known Issues / Improvements

### Current Limitations
1. **AI Response Parsing**: Occasionally fails to parse malformed JSON responses
2. **Error Handling**: Limited error recovery for network failures
3. **Question Quality**: Some generated questions may be too easy or poorly worded
4. **Performance**: No caching mechanism for repeated topic requests
5. **Accessibility**: Limited screen reader support and keyboard navigation

### Planned Improvements
1. **Enhanced Error Handling**: Implement retry mechanisms with exponential backoff
2. **Question Validation**: Add AI prompt refinement for better question quality
3. **Caching Layer**: Implement Redis for question caching and faster responses
4. **Analytics**: Add user interaction tracking and performance metrics
5. **Question Difficulty**: Implement difficulty levels (Easy, Medium, Hard)
6. **Offline Support**: Add service worker for offline quiz functionality
7. **Question Review**: Allow users to review correct answers after completion

### Technical Debt
- Add comprehensive unit tests for components
- Implement proper TypeScript migration
- Add API rate limiting and security headers
- Optimize bundle size with code splitting

---

## 7. Bonus Work

### Additional Features Implemented

#### 🌙 Dark Mode Support
- System preference detection
- Smooth theme transitions
- Persistent theme selection
- Comprehensive dark theme styling

#### 🎨 Modern UI/UX
- Responsive design for all screen sizes
- Smooth animations and transitions
- Progress indicators with visual feedback
- Intuitive navigation with disabled state management

#### 🚀 Enhanced User Experience
- Custom topic input with validation
- Quick start topic buttons for common subjects
- Real-time answer selection feedback
- Visual score representation with emoji indicators

#### 🔧 Developer Experience
- Hot reload support with Vite
- ESLint configuration for code quality
- Modular component architecture
- Clean separation of concerns

### AI Usage Guidance
- **Consistent JSON Output**: Prompts are designed to produce reliable JSON structures
- **Error Handling**: Implemented retry logic for malformed AI responses
- **Reusable Components**: Built modular question components for maintainability
- **Prompt Engineering**: Refined prompts through iteration for better results

---

## Tech Stack

### Frontend
- **React 19.1.1** - UI framework
- **Vite** - Build tool and dev server
- **React Router DOM** - Client-side routing
- **Axios** - HTTP client
- **CSS Custom Properties** - Theming system

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **Google Gemini 2.0 Flash** - AI model
- **LangChain** - AI framework
- **CORS** - Cross-origin resource sharing

### Development Tools
- **ESLint** - Code linting
- **Nodemon** - Development server
- **Git** - Version control

---

*This project demonstrates the integration of modern web technologies with AI capabilities to create an engaging and educational user experience.*
