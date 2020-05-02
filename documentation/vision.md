# The vision

## Repositories

The vision is to be able to interact with git repositories completely on Nostr. Commenting, creating pull requests, zapping repos, zapping pull requests, zapping issues, it should all happen over Nostr. Being able to zap everything will give a major incentive to participate in FOSS projects in many different ways.

We want every repo to be able to interact with the nostr network. Repo deployments should be able to interact with nostr. Nostr users should be able to interact with repos via Nostr, and interact with deployments via Nostr. Zap a repo, rate a repo, follow a repo, comment on a repo, add bounties. Vote on how code evolves. Have batteries for automated agents so they can keep running etc.

Repos should have keys like normal nostr users. This makes it easy for a repo to have nip5, description, and a profile photo.

```JSON
{
    "pubkey": "abcd123...",
    "nrepo": "nrepo