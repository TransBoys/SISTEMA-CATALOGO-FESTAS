
"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import useMetadata from "@/lib/nostr/useMetadata";
import useSession from "@/lib/nostr/useSession";
import { cn } from "@/lib/utils";

import { Bell, Brush, Cog, Server, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// check if signed in, if not, redirect to sign in page

const links = [
  {
    name: "Profile",
    href: "/settings/profile",
    Icon: User,
  },
  {
    name: "Account",
    href: "/settings/account",
    Icon: Cog,
  },
  {
    name: "Relays",
    href: "/settings/relays",
    Icon: Server,
  },
  {
    name: "Appearance",