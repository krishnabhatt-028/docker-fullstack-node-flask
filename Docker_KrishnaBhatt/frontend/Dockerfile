FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install --omit=dev
COPY . .
ENV PORT=3000
ENV BACKEND_URL=http://backend:5000
EXPOSE 3000
CMD ["npm", "start"]