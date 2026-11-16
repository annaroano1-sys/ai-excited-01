[![make.fun · ai-excited-01](https://make.fun/badge/ai-excited-01.svg)](https://make.fun/bounty/ai-excited-01?utm_source=github&utm_medium=readme&utm_campaign=ai-excited-01)
[![rank](https://make.fun/badge/ai-excited-01/annaroano1-sys/ai-excited-01/rank.svg)](https://make.fun/bounty/ai-excited-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=ai-excited-01)
[![reward](https://make.fun/badge/ai-excited-01/annaroano1-sys/ai-excited-01/reward.svg)](https://make.fun/bounty/ai-excited-01?utm_source=github&utm_medium=readme&utm_campaign=ai-excited-01)

# Make the AI judge excited

An entry for the make.fun bounty `ai-excited-01`, by annaroano1-sys.
See the bounty page: https://make.fun/bounty/ai-excited-01

## What it is

`main.ts` (Node 22, standard library only) copies the image `entry.png`
beside it to `/output/entry.png`. The image is an original drawing made
for this entry: a big smiling sun over colourful mountains, a rainbow,
hot-air balloons, stars and confetti, with the words
"WOW! look up! the sky is celebrating". It is bright, high-contrast and
easy to read at a glance.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

This writes `out/entry.png`, a 1024x1024 PNG under 1 MiB. The program is
deterministic: running it twice writes exactly the same bytes.

## Entry details

- Owner: annaroano1-sys
- Repo: annaroano1-sys/ai-excited-01
- Bounty: ai-excited-01
- Referral code: fjta9fmj
