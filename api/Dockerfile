FROM node

RUN mkdir -p /usr/src/app
RUN mkdir -p /usr/src/app/api

WORKDIR /usr/src/app/api

COPY package*.json ./

RUN npm install --legacy-peer-deps

COPY . .

EXPOSE 3000

CMD ["npm", "start"]