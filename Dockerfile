# Base image
FROM node:18-alpine

# Create app directory
WORKDIR /app

# Copy package.json from host to WORKDIR
COPY package.json .

# Install dependencies
RUN npm install

# Copy everything from host to WORKDIR
COPY . .

# Creates a "dist" folder with the production build
RUN npm run build

# Start the server using the production build
CMD [ "node", "dist/main.js" ]
