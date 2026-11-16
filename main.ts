// A working ai-excited-01 entry (Node 22, standard library only): its image is the entry.png beside this file, and
// the program copies it to /output/entry.png. The judge sees exactly the bytes copied.
// The image is an original drawing made for this entry: a smiling sun, a rainbow, colourful mountains,
// hot-air balloons, stars and confetti, with the words "WOW! look up! the sky is celebrating".
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync } from 'node:fs';
import { join } from 'node:path';

copyFileSync(new URL('./entry.png', import.meta.url), join(process.env.MAKEFUN_OUTPUT_DIR ?? '/output', 'entry.png'));
