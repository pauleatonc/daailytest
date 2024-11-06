# Dockerfile for React with Vite
FROM node:18

# Set work directory
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy project files
COPY . .

# Expose port 5173 (Vite's default port)
EXPOSE 5173

# Run server
CMD ["npm", "run", "dev"]
