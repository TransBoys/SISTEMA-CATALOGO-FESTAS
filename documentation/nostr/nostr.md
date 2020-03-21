# nostr - Notes and Other Stuff Transmitted by Relays

The simplest open protocol that is able to create a censorship-resistant global "social" network once and for all.

It doesn't rely on any trusted central server, hence it is resilient; it is based on cryptographic keys and signatures, so it is tamperproof; it does not rely on P2P techniques, and therefore it works.

## Very short summary of how it works, if you don't plan to read anything else:

Everybody runs a client. It can be a native client, a web client, etc. To publish something, you write a post, sign it with your key and send it to multiple relays (servers hosted by someone else, or yourself). To get updates from other people, you ask multiple relays if they know anything about these other people. Anyone can run a relay. A relay is very simple and dumb. It does nothing besides accepting posts from some people and forwarding to others. Relays don't have to be trusted. Signatures are verified on the client side.

[How to start using Nostr](https://github.com/vishalxl/nostr_console/discussions/31)

[Nostr client feature comparison](https://github.com/vishalxl/Nostr-Clients-Features-List/blob/main/Readme.md)

[List of projects built on Nostr](https://github.com/aljazceru/awesome-nostr)

## This is needed because other solutions are broken:

### The problem with Twitter

- Twitter has ads;
- Twitter uses bizarre techniques to keep you addicted;
- Twitter doesn't show an actual historical feed from people you follow;
- Twitter bans people;
- Twitter shadowbans people;
- Twitter