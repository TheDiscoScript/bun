//i can import and require in one project :) thank you, thank you/!!!
import path from "path";

const filepath = path.join("fu", "test", "hello-import.html");
const filename = path.basename(filepath);

console.log(filename); // hello.html
