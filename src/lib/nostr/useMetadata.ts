import { useEffect, useState } from "react";

import { useNostrContext } from "./NostrContext";

export type Metadata = {
  banner?: string;
  website?: string;
  nip05?: string;
  picture?: string;
  lud16?: string;
  display_name?: string;
  about?: string;
  name?: string;
};

const useMetadata = (relays: string[] = []) => {
  const { subscribe, defaultRelays, pubkey } = useNostrContext();

  const [metadata, setMetadata] = useState<Metadata>({});
  useEffect(() => {
    if (!subscribe || !pubkey) return;
    const unsub = subscribe(
      [
        {
          kinds: [0],
          authors: [pubkey],
        },
      ],
      [...defaultRelays, ...relays],
      (event, isAfterEose, rel