# Docker Full-Stack Assignment

Node.js + Express frontend and Flask backend containerized with Docker and Docker Compose.

## Run
```bash
docker compose up --build
```
Open `http://localhost:3000`.

## Services
- Frontend: http://localhost:3000
- Backend: http://localhost:5000
- Backend health: http://localhost:5000/health

The browser posts to Express `/api/submit`; Express forwards the request to Flask at `http://backend:5000/submit` over the Compose network.

## GitHub
```bash
git init
git add .
git commit -m "Docker full-stack assignment"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/docker-fullstack-assignment.git
git push -u origin main
```

## Docker Hub
```bash
docker login
docker push YOUR_DOCKERHUB_USERNAME/docker-node-frontend:1.0
docker push YOUR_DOCKERHUB_USERNAME/docker-flask-backend:1.0
```