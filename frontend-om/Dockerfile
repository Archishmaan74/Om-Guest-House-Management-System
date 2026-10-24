FROM node:22-alpine AS build

WORKDIR /frontend-om

COPY . .

RUN npm ci

ARG VITE_API_BASE_URL=http://localhost:8080
ENV VITE_API_BASE_URL=$VITE_API_BASE_URL

RUN npm run build

FROM nginx:alpine AS runtime

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /frontend-om/dist/ /usr/share/nginx/html/