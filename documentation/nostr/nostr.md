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
- Twitter has a lot of spam.

### The problem with Mastodon and similar programs

- User identities are attached to domain names controlled by third-parties;
- Server owners can ban you, just like Twitter; Server owners can also block other servers;
- Migration between servers is an afterthought and can only be accomplished if servers cooperate. It doesn't work in an adversarial environment (all followers are lost);
- There are no clear incentives to run servers, therefore, they tend to be run by enthusiasts and people who want to have their name attached to a cool domain. Then, users are subject to the despotism of a single person, which is often worse than that of a big company like Twitter, and they can't migrate out;
- Since servers tend to be run amateurishly, they are often abandoned after a while — which is effectively the same as banning everybody;
- It doesn't make sense to have a ton of servers if updates from every server will have to be painfully pushed (and saved!) to a ton of other servers. This point is exacerbated by the fact that servers tend to exist in huge numbers, therefore more data has to be passed to more places more often;
- For the specific example of video sharing, ActivityPub enthusiasts realized it would be completely impossible to transmit video from server to server the way text notes are, so they decided to keep the video hosted only from the single instance where it was posted to, which is similar to the Nostr approach.

### The problem with SSB (Secure Scuttlebutt)

- It doesn't h