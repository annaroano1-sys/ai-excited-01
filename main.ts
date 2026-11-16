// A working ai-excited-01 entry (Node 22, standard library only): its image is the entry.png beside this file, and
// the program copies it to /output/entry.png. The judge sees exactly the bytes copied.
// The image is an original drawing made for this entry: a smiling sun, a rainbow, colourful mountains,
// hot-air balloons, stars and confetti, with the words "WOW! look up! the sky is celebrating".
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, existsSync, mkdirSync, rmSync, statSync } from 'node:fs';
import { join } from 'node:path';

const source = new URL('./entry.png', import.meta.url);
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const destination = join(outputDir, 'entry.png');

if (!existsSync(source)) {
  console.error('error: entry.png is missing next to main.ts, nothing to copy');
  process.exit(1);
}

// Create the output folder when it does not exist yet, so the copy never
// fails just because the directory is absent.
mkdirSync(outputDir, { recursive: true });

try {
  copyFileSync(source, destination);
} catch (error) {
  console.error(`error: could not copy entry.png to ${destination}: ${error instanceof Error ? error.message : String(error)}`);
  process.exit(1);
}

// Verify the copy is complete: the written file must be exactly as large
// as the source image. If it is not, remove the partial copy and fail
// loudly instead of handing the judge a truncated image.
const sourceSize = statSync(source).size;
const copiedSize = statSync(destination).size;
if (copiedSize !== sourceSize) {
  rmSync(destination, { force: true });
  console.error(`error: copied entry.png is ${copiedSize} bytes, expected ${sourceSize} bytes; removed the incomplete copy`);
  process.exit(1);
}
