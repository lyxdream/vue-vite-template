# vite2+vue3+ts+pinia企业级脚手架模板

-  Vite2+Vue3+Typescript 搭建开发环境
- 安装使用vite2
- 支持vue3
- 支持typescript
- 支持eslint、prettier和editorconfig
- git hooks
- 别名
- 样式
- 静态资源
- mock
- axios请求封装
- pinia状态管理
- 路由
- NaïveUI组件库
- 环境变量和模式

1. vite 安装

```bash
pnpm install vite -D
```

测试环境用的是esbuild 预构建依赖，生产环境用的是Rollup

2. 启动 vite 

2.1 package.json

```bash
{
  "scripts": {
    "dev": "vite",
    "build": "vite build"
  }
}
```
2.2 vite.config.js

```
import { defineConfig } from "vite"
export default defineConfig({})
```

2.3 index.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite App</title>
  </head>

  <body>
    <div id="app"></div>
    <script type="module" src="/src/main.ts"></script>
  </body>
</html>
```
2.4 src\main.ts

```ts
console.log('main---') 
export function render() {
  document.getElementById("app")!.innerHTML = "main";
}
render();

if (import.meta.hot) {
  import.meta.hot.accept((updatedModule) => updatedModule.render());
}

```

2.5  tsconfig.json

```json
{
  "compilerOptions": {
    "target": "esnext",
    "module": "esnext",
    "moduleResolution": "node",
    "strict": true,
    "jsx": "preserve",
    "sourceMap": true,
    "esModuleInterop": true,
    "lib": ["esnext", "dom", "es2018.promise"]
  },
  "include": ["src/**/*.ts", "src/**/*.d.ts", "src/**/*.tsx", "src/**/*.vue"]
}
```

2.6 src\env.d.ts

- Vite 默认的类型定义是写给它的 Node.js API 的,要将其补充到一个 Vite 应用的客户端代码环境中
- 客户端类型
- 如果你的库依赖于某个全局库
  - 使用/// 指令
  - 三斜线指令仅可放在包含它的文件的最顶端
  - 三斜线引用告诉编译器在编译过程中要引入的额外的文件

```
/// <reference types="vite/client" />
```

2.7 .gitignore

```
node_modules
pnpm-debug.log*
.vscode/*
sh.exe.stackdump
dist
coverage
```

3. 支持 vue3

3.1 安装 vue

```bash
pnpm install vue
pnpm install @vitejs/plugin-vue -D
```
