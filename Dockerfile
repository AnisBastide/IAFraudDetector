# Stage 1: Backend
FROM node:14 as backend

WORKDIR /app/backend

COPY back/package*.json ./
RUN npm install

COPY back/ .

EXPOSE 3000
CMD ["npm", "start"]

# Stage 2: Frontend
FROM node:14 as frontend

WORKDIR /app/frontReact

COPY frontReact/package*.json ./
RUN npm install

COPY frontReact/ .

EXPOSE 9000
CMD ["npm", "start"]

# Stage 3: AI
FROM python:3.9 as ai

WORKDIR /app/IA

COPY IA/requirements.txt ./
RUN pip install -r requirements.txt

COPY IA/ .

EXPOSE 8000
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
