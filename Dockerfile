FROM node:20.5.1-bullseye-slim
ENV NODE_ENV=production

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci --omit=dev

COPY index.js ./
COPY public ./public

CMD ["npm", "start"]
