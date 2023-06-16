# Build environment
###################
FROM node:18-alpine3.17 AS builder

# Create and set working directory
RUN mkdir /src
WORKDIR /src

# Add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /src/node_modules/.bin:$PATH

# Install and cache app dependencies

COPY package*.json /src/
RUN npm ci
# Copy in source files
COPY . /src

# Build app
RUN npm run build

# Production environment
########################
FROM bitnami/nginx:latest
COPY --from=builder /src/dist /opt/bitnami/nginx/html/
CMD ["nginx", "-g", "daemon off;"]
