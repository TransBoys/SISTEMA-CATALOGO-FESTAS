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
import Link from "next/link";
import { usePathname } from "next/navigation";

interface IIssueData {
  id: string;
  entity: string;
  repo: string;
  title: string;
  number: string;
  date: string;
  author: string;
  tags: string[];
  taskTotal: number | null;
  taskCompleted: number | null;
  linkedPR: number;
  assignees: string[];
  comments: number;
}

export default function RepoIssuesPage() {
  const [issueStatus, setIssueStatus] = useState<"open" | "closed">("open");

  const [search, setSearch] = useState<string>(`is:open is:issue`);

  const [issues, setIssues] = useState<IIssueData[]>(openData);

  const pathname = usePathname() || "";

  useEffect(() => {
    if (issueStatus === "open") {
      setIssues(openData);
    } else {
      setIssues([]);
    }
  }, [issueStatus]);

  const handleIssueStatusOpen = useCallback(() => setIssueStatus("open"), []);
  const handleIssueStatusClosed = useCallback(
    () => setIssueStatus("closed"),
    []
  );

  const handleSearch = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) =>
      setSearch(e.currentTarget.value),
    []
  );

  return (
    <section className="mt-4">
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <div className="flex w-full or