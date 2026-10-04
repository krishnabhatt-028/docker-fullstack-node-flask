# docker-fullstack-node-flask
Full-stack application using Node.js/Express and Flask, containerized with Docker and Docker Compose.
# Docker Full-Stack Assignment

A full-stack application containerized using **Docker and Docker Compose**, with a Node.js/Express frontend and Flask backend.

## Tech Stack

* Node.js + Express
* Flask + Python
* Docker
* Docker Compose

## Project Structure

```text
Docker_KrishnaBhatt/
├── frontend/
│   ├── public/
│   ├── server.js
│   ├── package.json
│   └── Dockerfile
├── backend/
│   ├── app.py
│   ├── requirements.txt
│   └── Dockerfile
├── docker-compose.yml
├── .gitignore
└── README.md
```

## Run the Project

```bash
docker compose up --build
```

Open:

```text
Frontend: http://localhost:3000
Backend:  http://localhost:5000
```

## Application Flow

```text
Browser
   ↓
Node.js / Express
   ↓
Flask Backend
   ↓
Response
```

Both services communicate through a Docker Compose network.

## Docker Images

* Node.js/Express Frontend
* Flask Backend

Images are built using separate Dockerfiles and can be pushed to Docker Hub.

## Author

**Krishna Bhatt**
