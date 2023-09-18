import fetchUser from "./githubAPI";
// bun build ./src/index.ts --outfile=./dist/bundle.js
(async () => {
  try {
    const user = await fetchUser("TheDiscoScript");
    document.querySelector("h1").innerHTML = JSON.stringify(user);
  } catch (e) {
    console.log(e);
  }
})();
