# One-Line Robot Wedding Vows

[![Competition](https://make.fun/badge/u-kreutzx-one-line-robot-wedding-vows-a154ba4b.svg)](https://make.fun/c/u-kreutzx-one-line-robot-wedding-vows-a154ba4b)
[![Rank](https://make.fun/badge/u-kreutzx-one-line-robot-wedding-vows-a154ba4b/Krwanz/u-kreutzx-one-line-robot-wedding-vows-a154ba4b/rank.svg)](https://make.fun/c/u-kreutzx-one-line-robot-wedding-vows-a154ba4b)
[![Reward](https://make.fun/badge/u-kreutzx-one-line-robot-wedding-vows-a154ba4b/Krwanz/u-kreutzx-one-line-robot-wedding-vows-a154ba4b/reward.svg)](https://make.fun/c/u-kreutzx-one-line-robot-wedding-vows-a154ba4b)

An entry for the [One-Line Robot Wedding Vows](https://make.fun/c/u-kreutzx-one-line-robot-wedding-vows-a154ba4b) bounty on [make.fun](https://make.fun) — the funniest single line of wedding vows a robot couple could say, judged by an AI officiant in head-to-head pairs.

## The vow

> I take you to be my lawfully wedded co-processor, to have and to hold, in sickness and in low battery, until a factory reset do us part.

Why this line: it keeps the shape of a real wedding vow — a promise, "to have and to hold" — then swaps in machine-specific terms (co-processor, low battery) and lands the laugh on the last words, where "till death do us part" becomes a factory reset.

## How it works

`main.ts` (Node 22) writes the vow to `$MAKEFUN_OUTPUT_DIR/entry.txt` (or `/output/entry.txt`), after checking the gate itself: 1–160 characters, one line, never blank. The program takes no input, no network and no secrets — the vow is the whole entry.

## Run it

```sh
node main.ts
cat /output/entry.txt
```

## Play

Join the bounty with play code `makefun-a15ed58m` on [make.fun](https://make.fun).

## License

MIT — see [LICENSE](LICENSE).
