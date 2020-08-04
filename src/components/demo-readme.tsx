
export default function DemoReadme() {
  return (
    <>
      <h1 id="nostr-notes-and-other-stuff-transmitted-by-relays">
        nostr - Notes and Other Stuff Transmitted by Relays
      </h1>
      <p>
        The simplest open protocol that is able to create a censorship-resistant
        global &quot;social&quot; network once and for all.
      </p>
      <p>
        It doesn&#39;t rely on any trusted central server, hence it is
        resilient; it is based on cryptographic keys and signatures, so it is
        tamperproof; it does not rely on P2P techniques, and therefore it works.
      </p>
      <p>
        This is a work in progress.{" "}
        <a href="https://t.me/nostr_protocol">Join the Telegram group!</a>
      </p>
      <h2 id="very-short-summary-of-how-it-works-if-you-don-t-plan-to-read-anything-else-">
        Very short summary of how it works, if you don&#39;t plan to read
        anything else:
      </h2>
      <p>
        Everybody runs a client. It can be a native client, a web client, etc.
        To publish something, you write a post, sign it with your key and send
        it to multiple relays (servers hosted by someone else, or yourself). To
        get updates from other people, you ask multiple relays if they know
        anything about these other people. Anyone can run a relay. A relay is
        very simple and dumb. It does nothing besides accepting posts from some
        people and forwarding to others. Relays don&#39;t have to be trusted.
        Signatures are verified on the client side.
      </p>
      <p>
        <a href="https://github.com/vishalxl/nostr_console/discussions/31">
          How to start using Nostr
        </a>
      </p>
      <p>
        <a href="https://github.com/vishalxl/Nostr-Clients-Features-List/blob/main/Readme.md">
          Nostr client feature comparison
        </a>
      </p>
      <p>
        <a href="https://github.com/aljazceru/awesome-nostr">
          List of projects built on Nostr
        </a>
      </p>
      <h2 id="this-is-needed-because-other-solutions-are-broken-">
        This is needed because other solutions are broken:
      </h2>
      <h3 id="the-problem-with-twitter">The problem with Twitter</h3>
      <ul>
        <li>Twitter has ads;</li>
        <li>Twitter uses bizarre techniques to keep you addicted;</li>
        <li>
          Twitter doesn&#39;t show an actual historical feed from people you
          follow;
        </li>
        <li>Twitter bans people;</li>
        <li>Twitter shadowbans people;</li>
        <li>Twitter has a lot of spam.</li>
      </ul>
      <h3 id="the-problem-with-mastodon-and-similar-programs">
        The problem with Mastodon and similar programs
      </h3>
      <ul>
        <li>
          User identities are attached to domain names controlled by
          third-parties;
        </li>
        <li>
          Server owners can ban you, just like Twitter; Server owners can also