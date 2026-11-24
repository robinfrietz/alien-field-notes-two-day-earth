// Alien Field Notes: The Two Day Earth Review
// Writes one original line — an alien tourist's review of planet Earth
// after two days — to <output dir>/entry.txt. Deterministic, no network.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Day two on Earth: the planet is 70% water the locals cannot drink, so they bottle it and sell it back to themselves. Five stars for the audacity. Would orbit again.";

if (LINE.length > 200) {
  throw new Error(`line is ${LINE.length} chars, over the 200-char limit`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const target = join(outDir, "entry.txt");
writeFileSync(target, LINE, "utf8");
console.log(`wrote ${target} (${LINE.length} chars)`);
console.log(LINE);
