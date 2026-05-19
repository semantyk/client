# ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
# # `Dockerfile`
# @organization: Semantyk
# @project: Client
#
# @file: This file is used to build the production environment.
#
# @created: Nov 30, 2023
# @modified: May 19, 2026
#
# @author: Semantyk Team
# @maintainer: Daniel Bakas <https://id.danielbakas.com>
#
# @copyright: Semantyk © 2026. All rights reserved.
# ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––

FROM oven/bun:alpine AS builder
WORKDIR /app
COPY package.json bun.lock ./
RUN bun install --frozen-lockfile
COPY . .
RUN bun run build

FROM oven/bun:alpine
WORKDIR /app
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
EXPOSE 3000
