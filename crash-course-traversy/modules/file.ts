//Bun optimized for I/O files

const rearOrWrite = process.argv[2] ?? "write";
console.log("🚀 ~ file: file.ts:4 ~ rearOrWrite:", rearOrWrite);
const data = "I love Bun";

if (rearOrWrite == "write") {
  await Bun.write("modules/output.txt", data);
} else {
  const file = await Bun.file("modules/output.txt");
  console.log("Text is:" + (await file.text()));
  //console.log("JSON is:" + (await file.json()));
  console.log("ArrayBuffer is:" + (await file.arrayBuffer()));
  console.log(new Uint8Array(await file.arrayBuffer()));
  console.log("Stream is:" + (await file.stream()));

  console.log("File size:" + file.size);
}
