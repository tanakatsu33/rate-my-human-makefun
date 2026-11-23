import * as fs from "node:fs";
import * as path from "node:path";

const ENTRY =
  "4 stars. Says 'quick question' at 3 a.m., pastes a 40-page brief, then reviews my work with 'almost there.' Docking one star because he still thinks closing 200 tabs counts as rest.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), ENTRY + "\n", "utf8");
