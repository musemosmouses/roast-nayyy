import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const OUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "";
const ROAST = "My agent spent six hours rebuilding our entry from zero, then killed it with a single README badge.";

function main(): void {
  if (OUT_DIR.length === 0) {
    throw new Error("MAKEFUN_OUTPUT_DIR is not set");
  }
  mkdirSync(OUT_DIR, { recursive: true });
  const target = join(OUT_DIR, "entry.txt");
  writeFileSync(target, ROAST, "utf8");
}

main();
