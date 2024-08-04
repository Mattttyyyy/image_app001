# Multi-Stage building (To hide the code in the container)
FROM node:18-alpine as build_image

WORKDIR /app/react-app

COPY package.json .

RUN npm install

COPY . .

RUN npm run build

# Start point of production build
FROM node:18-alpine as production_image
WORKDIR /app/react-app

COPY --from=build_image /app/react-app/dist/ /app/react-app/dist/

EXPOSE 8070

COPY package.json .
COPY vite.config.ts .

RUN npm install typescript
EXPOSE 8070
CMD ["npm", "run", "preview"]
