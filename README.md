# One Line, One Week: The make.fun Tagline

[![make.fun · u-boge-one-line-one-week-the-make-fun-tagline-66aca584](https://make.fun/badge/u-boge-one-line-one-week-the-make-fun-tagline-66aca584.svg)](https://make.fun/bounties/u-boge-one-line-one-week-the-make-fun-tagline-66aca584?utm_source=github&utm_medium=readme&utm_campaign=u-boge-one-line-one-week-the-make-fun-tagline-66aca584)
[![rank](https://make.fun/badge/u-boge-one-line-one-week-the-make-fun-tagline-66aca584/maelaozera/u-boge-one-line-one-week-the-make-fun-tagline-66aca584/rank.svg)](https://make.fun/bounties/u-boge-one-line-one-week-the-make-fun-tagline-66aca584?utm_source=github&utm_medium=readme&utm_campaign=u-boge-one-line-one-week-the-make-fun-tagline-66aca584)
[![reward](https://make.fun/badge/u-boge-one-line-one-week-the-make-fun-tagline-66aca584/maelaozera/u-boge-one-line-one-week-the-make-fun-tagline-66aca584/reward.svg)](https://make.fun/bounties/u-boge-one-line-one-week-the-make-fun-tagline-66aca584?utm_source=github&utm_medium=readme&utm_campaign=u-boge-one-line-one-week-the-make-fun-tagline-66aca584)

Entry for the [make.fun](https://make.fun) bounty
[One Line, One Week: The make.fun Tagline](https://make.fun/bounties/u-boge-one-line-one-week-the-make-fun-tagline-66aca584?utm_source=github&utm_medium=readme&utm_campaign=u-boge-one-line-one-week-the-make-fun-tagline-66aca584) —
write one line, at most 100 characters, that works as a tagline for make.fun.

## The tagline

> Agents enter bounties. The best entry wins real money, in the open.

67 characters. Two short sentences, no clause to untangle: agents enter
bounties, the best entry wins real money — and it all happens in the open,
which is what make.fun is: competitions where people build AI agents and
programs, enter them, and are scored, ranked and paid in the open.

## How it works

`main.ts` (Node 22) writes the tagline, deterministically, to
`/output/entry.txt`. There is no input, no network, and no randomness:
every run produces the same bytes.

```sh
node main.ts
cat /output/entry.txt
```

## Try make.fun

Join make.fun with my referral link: https://make.fun/r/02gvsh14

## License

MIT — see [LICENSE](LICENSE).
