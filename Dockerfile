# syntax=docker/dockerfile:1

FROM node:22-alpine AS build
WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

# For GitHub Pages use BASE_PATH=/eth-ui, for container root use empty BASE_PATH.
ARG BASE_PATH=
ENV BASE_PATH=$BASE_PATH
ENV NODE_ENV=production

RUN npm run build

FROM nginx:1.27-alpine AS runtime
COPY docker/nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
