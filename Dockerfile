FROM node

WORKDIR /app/gateawayS

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 8000

CMD ["npm", "start"]