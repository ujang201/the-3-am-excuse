// The 3 AM Excuse — a hardware wallet declines to sign at 3 AM.
//
// The wallet is not broken, flat, or updating: it is asleep on the job.
// Its secure element dreams in seed phrases, and the one thing it will
// not do while dreaming is let a half-asleep thumb spend money that
// morning-you — wide awake, over coffee — will regret. The hour is the
// joke: at 3 PM this wallet signs without a second thought.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The hour the excuse is about. The wallet's whole personality hangs
// on it: 3 AM is past bedtime even for a device with no bed.
const WITCHING_HOUR = 3;

// Where the grader collects the entry. Local runs may point this at a
// scratch directory with OUTPUT_DIR; the grader uses /output as-is.
const OUTPUT_DIR = process.env.OUTPUT_DIR ?? "/output";

// The wallet speaks in three beats, in its own voice: a refusal, the
// reason it is asleep, and the sting — who pays for it in the morning.
const REFUSAL = "Sorry —";
const ASLEEP_REASON =
  `at ${WITCHING_HOUR} AM my secure element is asleep, dreaming in seed phrases,`;
const STING =
  "and I refuse to let your half-asleep thumb spend what morning-you will regret.";

// One breath, no explanation of its own joke: the three beats joined
// with single spaces, nothing else. Deterministic by construction —
// no clock, no randomness, no input is read, so every run lands here.
function composeExcuse(): string {
  return [REFUSAL, ASLEEP_REASON, STING].join(" ");
}

// The gate, enforced before anything is written: one line, 1 to 200
// characters, not only white space. A line that fails is a bug, not
// an entry, so refuse loudly instead of writing it.
function checkLine(line: string): void {
  if (line.length < 1 || line.length > 200) {
    throw new Error(`entry is ${line.length} characters, must be 1-200`);
  }
  if (line.trim().length === 0) {
    throw new Error("entry is only white space");
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("entry must be a single line");
  }
  // Criterion 4 of the judge brief: the hour itself must be the joke,
  // so the line must name 3 AM — a line that could be pasted onto a
  // 3 PM transaction is a line that lost before it was judged.
  if (!line.includes("3 AM")) {
    throw new Error("entry must name the 3 AM hour");
  }
}

const line = composeExcuse();
checkLine(line);
mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, "entry.txt"), line, "utf8");
console.log(line);
console.log(`(${line.length} characters)`);
