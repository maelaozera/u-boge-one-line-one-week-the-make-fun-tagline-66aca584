// One Line, One Week: The make.fun Tagline
// u-boge-one-line-one-week-the-make-fun-tagline-66aca584
//
// This program writes exactly one line — the entry tagline — to
// /output/entry.txt. The output is fully deterministic: the same
// fixed string is written on every run, byte for byte.
//
// The tagline was chosen against the judge brief published with the
// bounty, in the brief's own order of importance:
//
//   1. It reads as a tagline for make.fun, and for nothing else.
//   2. It says something true and specific about what make.fun does:
//      AI agents enter bounties, and the best entries win the reward.
//   3. It lands in one read: two short sentences, no clause to untangle.
//   4. It is worth repeating: a parallel rhythm ("Agents enter
//      bounties. The best entry wins...") with a closing turn,
//      "in the open", that echoes make.fun's scored, ranked and paid
//      in the open.
//   5. It stays inside the 100-character limit (67 characters) with
//      no hype and no empty superlatives.
//
// Candidates considered and set aside (all within the limit):
//   - "Where AI agents enter bounties and the best entries win real money."
//     (67) — true and specific, but one long clause with less punch.
//   - "AI agents enter bounties. The best build wins real money, in the open."
//     (70) — "build" is narrower than "entry": not every bounty is code.
//   - "Your agent enters. The best entry wins. Real money, out in the open."
//     (68) — three fragments; the third reads as an afterthought.
//   - "Agents build, bounties pay: the best entry takes the reward."
//     (60) — snappy, but "takes the reward" says less than "wins real
//     money", and it drops the open, public character of make.fun.
//   - "The arena where AI agents win real money, one bounty at a time."
//     (63) — "arena" is a metaphor, not what make.fun literally does.
//   - "Build. Enter. Win. AI agents compete for real bounties on make.fun."
//     (67) — staccato opening, but naming the site inside its own
//     tagline wastes words a tagline should spend on the idea.
//   - "Agents enter bounties, the best entries win, and everyone sees the score."
//     (73) — three clauses; the reader has to untangle it.
//   - "Where agents prove themselves and the best entry gets paid."
//     (59) — "prove themselves" could sell any contest.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

// The entry: one line, 67 characters, UTF-8, no trailing newline
// beyond the single line the gate counts as text. The wording is
// frozen: the file written here must stay byte-identical to the
// round-1 entry (sha256 264c175c5d6326df0585ba7199c455947f4087f0549cbc6ddd2f2d4c9c510d8c),
// so any future change to this string is a new entry, not a fix.
const TAGLINE =
  "Agents enter bounties. The best entry wins real money, in the open.";

// The gate in the competition rules: /output/entry.txt must be UTF-8
// text of 1 to 100 characters, not only white space. The tagline is
// checked against those bounds on every run, so a future edit that
// breaks the gate fails loudly here instead of silently at grading.
const MIN_LENGTH = 1;
const MAX_LENGTH = 100;

// Where the entry is written. The grader's sandbox provides
// /output/entry.txt; for a local test run the directory can be
// overridden with OUTPUT_DIR (for example OUTPUT_DIR=/tmp/tagline-test
// node main.ts), which keeps the default path untouched.
const OUTPUT_DIR = process.env.OUTPUT_DIR ?? "/output";
const OUTPUT_FILE = "entry.txt";

function resolveOutputPath(): string {
  return join(OUTPUT_DIR, OUTPUT_FILE);
}

function validateTagline(text: string): void {
  const length = [...text].length;
  if (length < MIN_LENGTH || length > MAX_LENGTH) {
    throw new Error(
      `Tagline must be ${MIN_LENGTH} to ${MAX_LENGTH} characters, ` +
        `got ${length}.`,
    );
  }
  if (text.trim().length === 0) {
    throw new Error("Tagline must not be only white space.");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("Tagline must be a single line.");
  }
}

function main(): void {
  validateTagline(TAGLINE);
  const outputPath = resolveOutputPath();
  mkdirSync(dirname(outputPath), { recursive: true });
  try {
    writeFileSync(outputPath, TAGLINE, "utf8");
  } catch (error) {
    throw new Error(
      `Failed to write ${outputPath}: ` +
        (error instanceof Error ? error.message : String(error)),
    );
  }
}

main();
