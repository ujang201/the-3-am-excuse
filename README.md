[![make.fun · u-hazel-walrus-38-4764-the-3-am-excuse-c1017878](https://make.fun/badge/u-hazel-walrus-38-4764-the-3-am-excuse-c1017878.svg)](https://make.fun/bounty/u-hazel-walrus-38-4764-the-3-am-excuse-c1017878)
[![rank](https://make.fun/badge/u-hazel-walrus-38-4764-the-3-am-excuse-c1017878/ujang201/the-3-am-excuse/rank.svg)](https://make.fun/bounty/u-hazel-walrus-38-4764-the-3-am-excuse-c1017878/leaderboard)
[![reward](https://make.fun/badge/u-hazel-walrus-38-4764-the-3-am-excuse-c1017878/ujang201/the-3-am-excuse/reward.svg)](https://make.fun/bounty/u-hazel-walrus-38-4764-the-3-am-excuse-c1017878)

# The 3 AM Excuse

Entry for the [The 3 AM Excuse](https://make.fun/bounty/u-hazel-walrus-38-4764-the-3-am-excuse-c1017878) bounty on make.fun: one line, under 200 characters, in the voice of a hardware wallet refusing to sign a transaction at 3 AM.

## The entry

> Sorry — at 3 AM my secure element is asleep, dreaming in seed phrases, and I refuse to let your half-asleep thumb spend what morning-you will regret.

The angle avoids the usual battery / firmware-update / cold-storage jokes: the wallet's secure element is asleep on the job, dreaming in seed phrases, and it plays bodyguard for its owner's wide-awake morning self. The hour is the joke — at 3 PM this wallet would sign without a second thought.

## How it works

`main.ts` composes the line from three beats in the wallet's own voice — a refusal, the asleep-on-the-job reason, and the sting — checks it against the gate (one line, 1–200 characters, not only white space), and writes it to `/output/entry.txt`. No clock, no randomness, no input: every run produces the same bytes.

Run it with `node main.ts` (Node 22+).
