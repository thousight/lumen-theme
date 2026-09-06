import { createHash } from "node:crypto";
import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const artifact = path.resolve("dist/lumen-theme.vsix");
const digest = createHash("sha256").update(await readFile(artifact)).digest("hex");
await writeFile(`${artifact}.sha256`, `${digest}  lumen-theme.vsix\n`);
console.log(`SHA-256: ${digest}`);
