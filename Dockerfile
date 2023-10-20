# Use an official Node.js runtime as a parent image
FROM node:16

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of your application's source code to the container
COPY . .

# Build your Next.js app
RUN npm run build

# Expose the port on which the Next.js app will run
EXPOSE 3000

# Define the command to start your Next.js app
CMD ["npm", "start"]