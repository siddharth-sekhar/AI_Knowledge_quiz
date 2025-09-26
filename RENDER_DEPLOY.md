# Render Build & Deploy Configuration

## Backend (Node.js Web Service)
**Build Command:** `npm install`
**Start Command:** `npm start`
**Environment:** Node
**Root Directory:** `backend`

### Environment Variables:
- `PORT` = (Render auto-assigns)
- `GOOGLE_API_KEY` = your_gemini_api_key
- `NODE_ENV` = production
- `FRONTEND_URL` = https://your-frontend-name.onrender.com

## Frontend (Static Site)
**Build Command:** `npm install && npm run build`
**Publish Directory:** `dist`
**Root Directory:** `frontend`

### Environment Variables:
- `VITE_API_BASE_URL` = https://your-backend-name.onrender.com

## Deployment Instructions:
1. Deploy backend first as Web Service
2. Copy backend URL
3. Deploy frontend as Static Site with backend URL in env vars
4. Update backend FRONTEND_URL with frontend URL