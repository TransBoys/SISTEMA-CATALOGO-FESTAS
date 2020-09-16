"use client";

import { useCallback } from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useNostrContext } from "@/lib/nostr/NostrContext";
import useSession from "@/lib/nostr/useSession";

import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { MainNav } from "../main-nav";

import { Button } from "./button";

const HeaderConfig = {
  mainNav: [
    {
      title: "Pull Requests",
      href: "/pulls",
    },
    {
      title: "Issues",
      href: "/issues",
    },
    {
      title: "Explore",
      href: "/explore",
    },
  ],
};

const DropdownItems = [
  {
    title: "Your Profile",
    href: "/profile",
  },
  {
    title: "Your Repositories",
    href: "/repositories",
  },
  {
    title: "Your organizations",
    href: "/organizations",
  },
  {
    title: "Your projects",
    href: "/projects",
  },
  {
    title: "Your stars",
    href: "/stars",
  },
  {
    title: "Your zaps",
    href: "/zaps",
  },
  {
    title: "Your relays",
    href: "/relays",
  },
  {
    title: "Your sponsors",
    href: "/sponsors",
  },
  {
    title: "Upgrade",
    href: "/upgrade",
  },
  {
    title: "Feature Preview",
    href: "/feature-preview",
  },
  {
    title: "Help",
    href: "/help",
  },
  {
    title: "Settings",
    href: "settings",
  },
];

const PrimaryGitInfo = DropdownItems.slice(0, 8);
const restGitInfo = DropdownItems.slice(8);

export function Header() {
  const { picture, name, initials, isLoggedI