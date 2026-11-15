# ---------- Frontend: static HTML served by Nginx ----------
FROM nginx:alpine

# Copy the site into Nginx's default web root
COPY index.html /usr/share/nginx/html/index.html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
