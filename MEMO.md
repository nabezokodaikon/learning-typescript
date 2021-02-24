# MEMO

## プロジェクト作成
```bash
$ yarn init -y
$ yarn add --dev typescript
$ yarn add --dev @types/node
$ yarn add --dev ts-node
$ yarn add --dev nodemon
$ npx tsc --init --rootDir src --outDir dist --esModuleInterop --resolveJsonModule --lib es6,dom --module commonjs
```

## Scripts
```json
  "scripts": {
    "start": "npm run build:live",
    "build": "tsc -p .",
    "build:live": "nodemon --watch 'src/**/*.ts' --exec 'ts-node' src/index.ts"
  },
```
