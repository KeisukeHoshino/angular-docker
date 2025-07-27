FROM node:latest

WORKDIR /app

RUN npm install -g @angular/cli

RUN ng new sample
