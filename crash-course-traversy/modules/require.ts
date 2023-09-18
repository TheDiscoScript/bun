//happy
const path = require("path");

const filepath = path.join("fu", "test", "hello-require.html");
const filename = path.basename(filepath);

console.log(filename); // hello.html
