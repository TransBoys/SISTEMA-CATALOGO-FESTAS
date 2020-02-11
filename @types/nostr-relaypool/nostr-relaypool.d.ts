/// <reference types="ws" />
declare module "merge-similar-filters" {
  import type { Filter } from "node_modules/nostr-tools/index";
  export function mergeSimilarAndRemoveEmptyFilters(
    filters: Filter[]
  ): Filter[];
}
declare module "fakejson" {
  export function getHex64(json: string, field: string): string;
  export function getSubName(json: string): string;
  export function getInt(json: string, field: string): number;
  export function matchEventId(json: string, id: string): boolean;
  export function matchEventPubkey(json: string, pubkey: string): boolean;
  export function matchEventKind(json: string, kind: number): boolean;
}
declare module "relay" {
  import { type Event } from "node_modules/nostr-tools/index";
  import { type Filter } from "node_modules/nostr-tools/index";
  type RelayEvent = "connect" | "disconnect" | "error" | "notice";
  export type Relay = {
    url: string;
    status: number;
    connect: () => Promise<void>;
    close: () => Promise<void>;
    sub: (filters: Filter[], opts?: SubscriptionOptions) => Sub;
    publish: (event: Event) => Pub;
    on: (type: RelayEvent, cb: unknown) => void;
    off: (type: RelayEvent, cb: unknown) => void;
  };
  export type Pub = {
    on: (type: "ok" | "seen" | "failed", cb: unknown) => void;
    off: (type: "ok" | "seen" | "failed", cb: unknown) => void;
  };
  export type Sub = {
    sub: (filters: Filter[], opts: SubscriptionOptions) => Sub;
    unsub: () => void;
    on: (type: "event" | "eose", cb: unknown) => void;
    off: (type: "event" | "eose", cb: unknown) => void;
  };
  type SubscriptionOptions = {
    skipVerification?: boolean;
    id?: string;
    eventIds?: Set<string>;
  };
  export function relayInit(
    url: string,
    alreadyHaveEvent?: (id: string) =>
      | (Event & {
          id: string;
        })
      | undefined,
    dontAutoReconnect?: boolean
  ): Relay;
}
declare module "author" {
  import type { OnEvent, RelayPool } from "relay-pool";
  import { type Filter, type Event } from "node_modules/nostr-tools/index";
  export class Author {
    pubkey: string;
    relayPool: RelayPool;
    relays: string[];
    constructor(relayPool: RelayPool, relays: string[], pubkey: string);
    metaData(cb: (event: Event) => void, maxDelayms: number): () => void;
    subscribe(filters: Filter[], cb: OnEvent, maxDelayms: number): () => void;
    followsPubkeys(
      cb: (pubkeys: string[]) => void,
      maxDelayms: number
    ): () => void;
    follows(cb: (authors: Author[]) => void, maxDelayms: number): () => void;
    secondFollows(
      cb: (pubkeysWithWeight: [string, number][]) => void,
      maxDelayms: number,
      removeDirectFollows?: boolean
    ): () => void;
    allEvents(
      cb: OnEvent,
      limit: number | undefined,
      maxDelayms: number
    ): () => void;
    referenced(
      cb: OnEvent,
      limit: number | undefined,
      maxDelayms: number
    ): () => void;
    followers(
      cb: OnEvent,
      limit: number | undefined,
      maxDelayms: number
    ): () => void;
    sentAndRecievedDMs(
      cb: OnEvent,
      limit: number | undefined,
      maxDelayms: number
    ): () => void;
    text(
      cb: OnEvent,
      limit: number | undefined,
      maxDelayms: number
    ): () => void;
  }
}
declare module "event" {
  import {
    type Event as NostrToolsEvent,
    type Kind,
  } from "node_modules/nostr-tools/index";
  import { type Author } from "author";
  import { type RelayPool } from "relay-pool";
  export type { NostrToolsEvent };
  export type NostrToolsEventWithId = NostrToolsEvent & {
    id: string;
  };
  import type { OnEvent } from "on-event-filters";
  export class Event implements NostrToolsEventWithId {
    id: string;
    kind: Kind;
    pubkey: string;
    tags: string[][];
    created_at: number;
    content: string;
    relayPool: RelayPool;
    relays: string[];
    sig?: string;
    constructor(
      event: NostrToolsEvent & {
        id: string;
      },
      relayPool: RelayPool,
      relays: string[]
    );
    referencedAuthors(): Author[];
    referencedEvents(maxDelayms: number): Promise<Event>[];
    thread(cb: OnEvent, maxDelayms: number): () => void;
  }
}
declare module "on-event-filters" {
  import { type Filter } from "node_modules/nostr-tools/index";
  import { type Event } from "event";
  export type OnEventArgs = [
    event: Event,
    afterEose: boolean,
    url: string | undefined
  ];
  export type OnEvent = (
    event: Event,
    afterEose: boolean,
    url: string | undefined
  ) => void;
  export function doNotEmitDuplicateEvents(onEvent: OnEvent): OnEvent;
  export function doNotEmitOlderEvents(onEvent: OnEvent): OnEvent;
  export function matchOnEventFilters(
    onEvent: OnEvent,
    filters: Filter[]
  ): OnEvent;
  export function emitEventsOnNextTick(onEvent: OnEvent): OnEvent;
}
declare module "event-cache" {
  import { type Filter } from "node_modules/nostr-tools/index";
  import { type Event } from "event";
  export class EventCache {
    #private;
    eventsById: Map<string, Event>;
    metadataByPubKey: Map<string, Event>;
    contactsByPubKey: Map<string, Event>;
    authorsKindsByPubKey: Map<string, Map<number, Event[]>>;
    eventsByTags: Map<string, Event[]>;
    addEvent(event: Event): void;
    getEventById(id: string): Event | undefined;
    hasEventById(id: string): boolean;
    getCachedEventsWithUpdatedFilters(
      filters: (Filter & {
        relay?: string;
        noCache?: boolean;
      })[],
      relays: string[]
    ): {
      filters: (Filter & {
        relay?: string;
      })[];
      events: Event[];
    };
  }
}
declare module "callback-replayer" {
  export type Cancellable<Process> = (process: Process) => () => void;
  export type Callback<Args extends unknown[]> = (...args: Args) => void;
  export class CancellableCallbackReplayer<Args extends unknown[]> {
    events: Args[];
    unsubAll?: () => void;
    subs: Set<Callback<Args>>;
    constructor(cancellableCallback: Cancellable<Callback<Args>>);
    sub(): Cancellable<Callback<Ar