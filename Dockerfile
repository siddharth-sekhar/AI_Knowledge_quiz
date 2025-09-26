# Use Node.js 18 Alpine image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY backend/package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy backend source code
COPY backend/ ./

# Expose port
EXPOSE $PORT

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD node -e "const http = require('http'); const options = { host: 'localhost', port: process.env.PORT || 5000, path: '/health', timeout: 2000 }; const request = http.request(options, (res) => { process.exit(res.statusCode === 200 ? 0 : 1); }); request.on('error', () => process.exit(1)); request.end();"

# Start the application
CMD ["npm", "start"]