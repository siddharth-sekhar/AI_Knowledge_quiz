# 🧠 AI Quiz Generator

An intelligent quiz application that generates custom quizzes using Google's Gemini AI. Built with React frontend and Node.js backend.

## ✨ Features

- **Custom Topic Input**: Enter any topic you want to be quizzed on
- **AI-Powered**: Uses Google Gemini AI via LangChain for intelligent question generation
- **Quick Start Options**: Pre-defined popular topics for instant quizzes
- **Dark Mode**: Beautiful dark/light theme toggle
- **Responsive Design**: Works perfectly on all devices
- **Real-time Feedback**: Get personalized feedback based on your performance
- **Modern UI**: Clean, professional interface with smooth animations

## 🚀 Quick Start

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Google Gemini API key

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/siddharth-sekhar/AI_Quiz_Generator.git
   cd AI_Quiz_Generator
   ```

2. **Set up the backend**
   ```bash
   cd backend
   npm install
   ```

3. **Configure environment variables**
   Create a `.env` file in the backend directory:
   ```env
   PORT=5000
   GOOGLE_API_KEY=your_google_gemini_api_key_here
   ```

4. **Set up the frontend**
   ```bash
   cd ../frontend
   npm install
   ```

5. **Start the application**
   
   Backend (Terminal 1):
   ```bash
   cd backend
   npm run dev
   # or
   node index.js
   ```
   
   Frontend (Terminal 2):
   ```bash
   cd frontend
   npm run dev
   ```

6. **Open your browser**
   Navigate to `http://localhost:5173` (or the port shown in terminal)

## 🏗️ Project Structure

```
AI_Quiz_Generator/
├── backend/
│   ├── routes/
│   │   └── quizRoutes.js      # API routes for quiz operations
│   ├── services/
│   │   └── aiService.js       # Google Gemini AI integration
│   ├── index.js               # Server entry point
│   ├── package.json           # Backend dependencies
│   └── .env                   # Environment variables (not tracked)
├── frontend/
│   ├── src/
│   │   ├── api/
│   │   │   └── quizApi.js     # API client functions
│   │   ├── components/
│   │   │   ├── Loader.jsx     # Loading animation component
│   │   │   ├── QuestionCard.jsx  # Quiz question display
│   │   │   └── ThemeToggle.jsx   # Dark mode toggle
│   │   ├── contexts/
│   │   │   └── ThemeContext.jsx  # Theme state management
│   │   ├── pages/
│   │   │   ├── Home.jsx       # Landing page with topic selection
│   │   │   ├── Quiz.jsx       # Quiz interface
│   │   │   └── Feedback.jsx   # Results and feedback page
│   │   ├── App.jsx            # Main app component
│   │   ├── index.css          # Global styles and theme variables
│   │   └── main.jsx           # React entry point
│   ├── package.json           # Frontend dependencies
│   └── vite.config.js         # Vite configuration
└── README.md                  # Project documentation
```

## 🛠️ Technologies Used

### Frontend
- **React 18** - Modern React with hooks
- **React Router** - Client-side routing
- **Vite** - Fast build tool and dev server
- **CSS Custom Properties** - Modern CSS with theme variables
- **Context API** - State management for themes

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **LangChain** - AI integration framework
- **Google Gemini AI** - Large language model
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variable management

## 🎯 How It Works

1. **Topic Selection**: Users can either:
   - Enter a custom topic in the textarea
   - Choose from quick-start buttons (JavaScript, History, Science, etc.)

2. **Quiz Generation**: The backend sends the topic to Google Gemini AI via LangChain to generate 5 multiple-choice questions

3. **Interactive Quiz**: Users answer questions one by one with a progress indicator

4. **Feedback**: AI generates personalized feedback based on the user's performance

## 🔧 API Endpoints

- `POST /api/quiz/generate` - Generate quiz questions for a topic
- `POST /api/quiz/feedback` - Get personalized feedback based on score

## 🎨 Theme System

The application supports both light and dark themes with:
- CSS custom properties for easy theme switching
- Persistent theme preference in localStorage
- Smooth transitions between themes
- System preference detection

## 🚀 Deployment

### Backend Deployment
- Deploy to platforms like Heroku, Railway, or DigitalOcean
- Set environment variables in your deployment platform
- Ensure CORS is configured for your frontend domain

### Frontend Deployment
- Deploy to Vercel, Netlify, or GitHub Pages
- Update API URLs in `frontend/src/api/quizApi.js`
- Build with `npm run build`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Google Gemini AI for powering the quiz generation
- LangChain for AI integration framework
- React team for the amazing frontend library
- Vite for the lightning-fast build tool

## 📞 Support

If you have any questions or need help getting started, please open an issue in this repository.

---

Made with ❤️ by [Siddharth Sekhar](https://github.com/siddharth-sekhar)