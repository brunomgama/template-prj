#!/usr/bin/env bash

npx drizzle-kit generate

npx drizzle-kit push

npx tsx src/index.tsx

npx drizzle-kit studio