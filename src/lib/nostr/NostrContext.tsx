import { type ReactNode, createContext, useCallback, useContext } from "react";

import {
  type OnEose,
  type OnEvent,
  RelayPool,
  type SubscriptionOptions,
} from "nostr-relaypool";
import { type Filter } from "nostr-tools";
import { nip19 } from "nostr-tools";

import useLocalStorage from "../hooks/useLocalStorage";

import { WEB_STORAGE_KEYS } from "./localStorage";

declare global {
  interface Window { 
    nostr: { 
      getPublicKey() : Promise<string>,
      signEvent(event: Event): Promise<Event>,
      getRelays(): Promise<{ [ur