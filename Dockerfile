# ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
# # `Dockerfile`
# client | Semantyk
#
# Created: Nov 30, 2023
# Modified: Nov 30, 2023
#
# Author(s): Semantyk Team
# Maintainer(s): Daniel Bakas <https://id.danielbakas.com>
#
# Copyright © Semantyk 2023. All rights reserved.
# ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––

# Stage 1: Build the application
# Use Node.js Image
FROM node:alpine AS builder
# Install pnpm
RUN npm install -g pnpm
# Set the working directory
WORKDIR /app
# Copy package.json and other related files
COPY package.json pnpm-lock.yaml ./
# Install dependencies
RUN pnpm install
# Copy the rest of your app's source code
COPY . .
# Build the Next.js app
RUN pnpm run build

# Stage 2: Production environment
# Use Node.js Image
FROM node:alpine
# Set the working directory
WORKDIR /usr/src/app
# Copy  related files
COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
# Expose port 3000
EXPOSE 3000