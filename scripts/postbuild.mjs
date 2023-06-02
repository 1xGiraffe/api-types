import { writeFileSync, copyFileSync } from "fs";
import { readFile } from "fs/promises";

console.log("Loading package.json");

const pck = JSON.parse(
  await readFile(new URL("../package.json", import.meta.url))
);

const buildPath = `${process.env.PWD}/build`;

pck.scripts = {};
pck.private = false;
pck.files = ["**/*", "!**/tsconfig.tsbuildinfo", "!**/*.tgz"];

console.log(`Writing ${buildPath}/package.json`);
writeFileSync(`${buildPath}/package.json`, JSON.stringify(pck, null, 2));

// Copy empty files for CommonJS modules
copyFileSync("./src/index.cjs", `${buildPath}/hydradx/index.cjs`);
copyFileSync("./src/index.cjs", `${buildPath}/basilisk/index.cjs`);
console.log(`Done postbuild`);
