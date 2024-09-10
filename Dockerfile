# Use the official Node.js 16 image as the base image
FROM node:20-alpine

# Create and change to the app directory
WORKDIR /app

# Copy the built application from the local environment
COPY .next ./.next
COPY public ./public
COPY package*.json ./

# Install only production dependencies
RUN npm install --only=production

# Expose the port the app runs on
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
