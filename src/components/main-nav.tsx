"use client";

import * as React from "react";

import { MobileNav } from "@/components/mobile-nav";
import { cn } from "@/lib/utils";

import { Bell, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import Logo from "./logo";
import SearchBar from "./search-bar";
import { Input } from "./ui/input";

export type NavItem = {
  title: string;
  href: string;
  disabled?: boolean;
};

export type MainNavItem = NavItem;

export type HeaderConfig 