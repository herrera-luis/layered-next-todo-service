FROM node:18.17.0-alpine3.18


RUN apk update && apk add --no-cache bash gawk
# Set working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy source code
COPY . .

RUN chmod +x docker-entrypoint.sh
RUN chmod +x env.sh

# Building app
RUN npm run build

ENTRYPOINT ["/app/docker-entrypoint.sh"]

CMD [ "npm", "start" ]