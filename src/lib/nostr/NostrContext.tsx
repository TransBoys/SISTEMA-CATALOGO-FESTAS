import { type ReactNode, createContext, useCallback, useContext } from "react";

import {
  type OnEose,
  type OnEvent,
  RelayPool,
  type SubscriptionOptions,
} from "nostr-relaypool";
import { type Filter } from "nostr-tools";
import { nip19 } from "nostr-tools";

import useLocalStorage fro