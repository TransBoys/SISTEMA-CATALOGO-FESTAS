import { useEffect, useState } from "react";

import { useNostrContext } from "./NostrContext";

export type Metadata = {
  banner?: string;
  website?: string;
  nip0