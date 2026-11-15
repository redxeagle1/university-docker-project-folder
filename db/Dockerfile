# ---------- Database: MongoDB ----------
FROM mongo:7

# Name of the database the backend uses
ENV MONGO_INITDB_DATABASE=docker-app

# MongoDB stores its data here (a volume is mounted on it in docker-compose)
VOLUME /data/db

EXPOSE 27017

CMD ["mongod"]
