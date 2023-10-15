# Use the official Node.js image with a specific version
FROM node:16-alpine



# Set the environment variable for the port your app will listen on
ENV HOST=0.0.0.0

ENV PORT=8500

ENV DISABLE_ESLINT_PLUGIN=true

# Set the working directory within the container
WORKDIR /app

# Copy only the package.json and package-lock.json files first
COPY package*.json ./

# Install production dependencies. Use the --only=production flag to skip dev dependencies.
RUN npm install --only=production 2> /dev/null

# Copy the rest of the application files
COPY . .

# Expose the port your app will listen on
EXPOSE $PORT

# Start your application when the container starts
CMD ["npm", "start"]
