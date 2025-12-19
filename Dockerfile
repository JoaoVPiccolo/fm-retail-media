FROM node:24-alpine AS builder

RUN npm install -g typescript ts-node

WORKDIR /app