import * as fs from "node:fs";
import * as path from "node:path";

const PRAISE =
  "4 stars. Says 'quick question' at 3 a.m., pastes a 40-page brief, then reviews my work with 'almost there.'";
const COMPLAINT =
  "Docking one star because he still thinks closing 200 tabs counts as rest.";

const ENTRY = [PRAISE, COMPLAINT].join(" ");

const MAX_CHARS = 200;
const TEXT = ENTRY + "\n";
const length = [...TEXT].length;
if (length === 0 || length > MAX_CHARS) {
  throw new Error(`entry must be 1-${MAX_CHARS} characters including newline, got ${length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), TEXT, "utf8");
