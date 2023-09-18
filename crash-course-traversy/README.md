# crash-course-traversy

So basically,

- I dont have to install a lot of packages
  - typescript --from bun init
  - ts-node
  - nodemon - from bun
  - jest - from bun
  - dotenv - from bun

To install dependencies:

```bash
bun install
```

`bunx` cowsay Hello from cowsay -- Running a dependency command without installing dependency #bliss

To run:

```bash
bun run index.ts | bun start | bun dev | bun hot
```

Tests all files .test

```bash
bun test
```

Bundle files

```bash
 bun build ./src/index.ts --outfile=./dist/bundle.js
 -->
 build:react-tsx
```

This project was created using `bun init` in bun v1.0.2. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.
