FROM oven/bun:1 AS base
WORKDIR /app

FROM base AS builder
COPY package.json bun.lockb tsconfig.json ./
COPY src ./src

# 開発依存関係を含めてインストール
RUN bun install --frozen-lockfile && \
    bun run build

# 本番用の依存関係のみを含む層を作成
FROM base AS runner
WORKDIR /app

# セキュリティのためのユーザー設定
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 hono

# ビルド成果物のコピー
COPY --from=builder --chown=hono:nodejs /app/node_modules /app/node_modules
COPY --from=builder --chown=hono:nodejs /app/src /app/src
COPY --from=builder --chown=hono:nodejs /app/package.json /app/package.json
COPY --from=builder --chown=hono:nodejs /app/tsconfig.json /app/tsconfig.json

USER hono
EXPOSE 3000

CMD ["bun", "run", "start"]