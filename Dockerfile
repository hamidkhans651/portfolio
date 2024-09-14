# Use an official node runtime as a parent image
FROM node:alpine

# Set the working directory in the container
WORKDIR /app

# Install dependencies
COPY ./package*.json ./
RUN npm install

# Copy the rest of the application source code into the container
COPY . .

# Build the Next.js application
RUN npm run build

# Specify the port the container should listen on at runtime
EXPOSE 3000

# Define the command to run the application
CMD ["npm", "run","dev"]