import { copyFile, mkdir, rm } from "node:fs/promises";

await rm("dist/server", { recursive: true, force: true });
await rm("dist/.openai", { recursive: true, force: true });
await mkdir("dist/server", { recursive: true });
await mkdir("dist/.openai", { recursive: true });

await copyFile("worker/index.js", "dist/server/index.js");
await copyFile(".openai/hosting.json", "dist/.openai/hosting.json");
