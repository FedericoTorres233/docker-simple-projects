# Specify a base image
FROM node:alpine

# Change working directory
WORKDIR /usr/app

# Copy project files (1)
COPY ./package.json /usr/app

# Install some deps
RUN npm install

# Copy project files (2)
COPY ./ /usr/app

# Default command
CMD ["npm", "start"]
