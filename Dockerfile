FROM node:latest

RUN mkdir /app

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app

#RUN npm run build

#COPY .next /app/.next 

EXPOSE 3000