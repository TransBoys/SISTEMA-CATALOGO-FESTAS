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
  import { type Filter, type Even