import * as React from "react";

import { cn } from "@/lib/utils";

import { type VariantProps, cva } from "class-variance-authority";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-0 focus:ring-zinc-400 focus:ring-offset-0 dark:hover:bg-zinc-800 dark:hover:text-zinc-100 d