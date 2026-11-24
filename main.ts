// One-Line Robot Wedding Vows — entry program for make.fun.
// Writes a single line of robot wedding vows to /output/entry.txt
// (or $MAKEFUN_OUTPUT_DIR/entry.txt when the harness sets it).
// The vow must be 1-160 UTF-8 characters, one line, no trailing newline
// beyond what the gate tolerates, so we write it with no newline at all.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const VOW =
  "I take you to be my lawfully wedded co-processor, to have and to hold, in sickness and in low battery, until a factory reset do us part.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";

// Guard the gate before writing: the sealed scorer refuses anything
// outside 1-160 characters, anything blank, or anything spanning lines.
if (VOW.length < 1 || VOW.length > 160) {
  throw new Error(`Vow is ${VOW.length} characters, outside the 1-160 gate`);
}
if (VOW.trim().length === 0 || VOW.includes("\n") || VOW.includes("\r")) {
  throw new Error("Vow must be a single non-blank line");
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), VOW, "utf8");
console.log(`Wrote ${VOW.length} characters to ${join(outDir, "entry.txt")}`);
