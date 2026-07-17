# Rollback Plan — drmom-website

## Safety points created before any consolidation edit

- Local tag `pre-consolidation-20260718-004352` on the commit that was
  `origin/main`'s tip (`b2cab5e`) at the start of this work.
- All original remote branches (`origin/main`, `origin/New-Features`,
  `origin/Updated`) are **untouched** — nothing has been pushed, deleted,
  or force-updated on the remote at any point.
- All consolidation work happened on a new local branch,
  `consolidation/all-features`, never on `main`.

## To fully discard this consolidation and return to the original state

```bash
git checkout main
git reset --hard pre-consolidation-20260718-004352   # equivalent to origin/main at start
git branch -D consolidation/all-features               # only if you want the branch gone too
```

Since nothing was pushed, `origin/main` was never at risk — this is a
worst-case local-only rollback.

## To partially roll back (keep some commits, drop others)

Every commit on `consolidation/all-features` is independent and
single-concern (see implementation-decisions.md). `git revert <hash>` on
any individual commit is safe — none of the 4 commits depend on another
except that all 4 sit on top of the same `main` base.

## Before merging to `main`

This branch has **not** been merged or pushed. Per the task's safety
rules, that requires a separate, explicit authorization step (opening a
PR from `consolidation/all-features` into `main` for human review) — not
performed as part of this task.
