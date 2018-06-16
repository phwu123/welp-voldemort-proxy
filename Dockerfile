FROM node:8.11.3
RUN mkdir /welp-proxyp
WORKDIR /welp-proxyp
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3900
CMD ["npm", "start"]