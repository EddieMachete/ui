FROM node:20

WORKDIR /app

# Install xdg-utils for browser opening functionality
RUN apt-get update && apt-get install -y xdg-utils && rm -rf /var/lib/apt/lists/*

# Install dependencies first (for better caching)
COPY package*.json ./
RUN npm install

# Copy the rest of the application
COPY . .

# Expose the Storybook port
EXPOSE 6006

# Start Storybook in development mode
CMD ["npm", "run", "storybook"] 