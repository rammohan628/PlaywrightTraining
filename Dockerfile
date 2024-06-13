# Use the official Node.js image.
FROM node:14

# Create and change to the app directory.
WORKDIR /

# Copy application dependency manifests to the container image.
COPY package*.json ./

# Install production dependencies.
RUN npm install

# Copy application code to the container image.
COPY . .

# Run the web service on container startup.
CMD [ "npm", "start" ]
