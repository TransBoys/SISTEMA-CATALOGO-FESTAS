"use client";

import * as React from "react";
import { useCallback, useEffect, useState } from "react";

import FilterBar from "@/components/filter-bar";
import { Button } from "@/components/ui/button";

import { clsx } from "clsx";
import {
  Check,
  CheckCircle2,
  ChevronDown,
  CircleDot,
  GitPullRequest,
  MessageSquare,
  Search,
  Tag,
} from "lucide-react";
import