# ---------- Backend: Node.js + Express ----------
FROM node:20-alpine

WORKDIR /app

# Copy package files first so the npm install layer is cached
# and only re-runs when the dependencies change
COPY package.json package-lock.json ./
RUN npm ci

# Copy the rest of the source code
COPY . .

EXPOSE 3000

# nodemon restarts the server on every save (works with the bind mount)
# -L = polling mode, needed so file changes from Windows/macOS hosts are detected
CMD ["npx", "nodemon", "-L", "server.js"]
