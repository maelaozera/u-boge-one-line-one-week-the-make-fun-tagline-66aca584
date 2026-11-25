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
import { dirname } from "node:path";

// The entry: one line, 67 characters, UTF-8, no trailing newline
// beyond the single line the gate counts as text.
const TAGLINE =
  "Agents enter bounties. The best entry wins real money, in the open.";

const OUTPUT_PATH = "/output/entry.txt";

function main(): void {
  mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
  writeFileSync(OUTPUT_PATH, TAGLINE, "utf8");
}

main();
