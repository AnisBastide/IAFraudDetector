# Use an official Node runtime as a base image
FROM node:14 as backend

# Set the working directory to /app/backend
WORKDIR /app/backend

# Copy package.json and package-lock.json to the working directory
COPY back/package*.json ./

# Install any needed packages specified in package.json
RUN npm install

# Copy all contents of the current directory to the working directory
COPY back/ .

# Expose port 3000
EXPOSE 3000

# Define the command to run your application
CMD ["npm", "start"]


# Use an official Node runtime as a base image for the frontend
FROM node:14 as frontend

# Set the working directory to /app/frontend
WORKDIR /app/frontReact

# Copy package.json and package-lock.json to the working directory
COPY frontReact/package*.json ./

# Install any needed packages specified in package.json
RUN npm install

# Copy all contents of the current directory to the working directory
COPY frontReact/ .

# Expose port 9000
EXPOSE 9000

# Define the command to run your application
CMD ["npm", "start"]


# Use an official Python runtime as a base image for the AI
FROM python:3.9 as  ai

# Set the working directory to /app/IA
WORKDIR /app/IA

# Copy the requirements file to the working directory
COPY IA/requirements.txt ./

# Install any needed packages specified in requirements.txt
RUN pip install -r requirements.txt

# Copy all contents of the current directory to the working directory
COPY IA/ .

# Expose port 8000
EXPOSE 8000

# Define the command to run your application
CMD ["uvicorn", "main:app", "--reload"]
