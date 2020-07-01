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
        <div className="flex w-full order-last mb-4 md:mb-0 md:order-none">
          <FilterBar search={search} handleSearch={handleSearch} />
        </div>

        <div className="flex gap-4 justify-between">
          <div className="flex text-sm">
            <button
              type="button"
              className="flex h-8 items-center border !border-lightgray hover:bg-dark rounded-l-md px-4 text-zinc-200 font-semibold"
            >
              <Tag className="h-4 w-4 mr-2" /> Labels
            </button>
            <button
              type="button"
              className="flex h-8 items-center border-l-0 border !border-lightgray hover:bg-dark rounded-r-md px-4 text-zinc-200 font-semibold"
            >
              <Tag className="h-4 w-4 mr-2" /> Milestones
            </button>
          </div>

          <Button
            variant={"success"}
            type="button"
            className="whitespace-nowrap h-8"
          >
            <Link className="text-white w-full" href={`${pathname}/new`}>
              New issue
            </Link>
          </Button>
        </div>
      </div>

      <main>
        <div className="mt-4">
          <div className="flex flex-col w-full rounded-md rounded-bl-none rounded-br-none border bg-dark py-2 px-4 !border-lightgray dark:text-zinc-100">
            <div className="order-last md:flex w-full flex-col text-md py-2 items-start justify-between lg:flex-row lg:items-center">
              <div className="flex items-center lg:flex-row space-x-4 font-medium">
                <button
                  className={clsx("flex text-zinc-400 hover:text-zinc-200", {
                    "text-zinc-50": issueStatus === `open`,
                  })}
                  onClick={handleIssueStatusOpen}
                >
                  <CircleDot className="h-5 w-5 mr-2 mt-0.5" /> 3 Open
                </button>
                <button
                  className={clsx("flex text-zinc-400 hover:text-zinc-200", {
                    "text-zinc-50": issueStatus === `closed`,
                  })}
                  onClick={handleIssueStatusClosed}
                >
                  <Check className="h-5 w-5 mr-2 mt-0.5" /> 4 Closed
                </button>
              </div>
              <div className="mt-2 flex text-gray-400 lg:mt-0 space-x-6">
                <span className="flex text-zinc-400 hover:text-zinc-200 cursor-pointer">
                  Author <ChevronDown className="h-4 w-4 ml-1 mt-1.5" />
                </span>
                <span className="flex text-zinc-400 hover:text-zinc-200 cursor-pointer">
                  Label <ChevronDown className="h-4 w-4 ml-1 mt-1.5" />
                </span>
                <span className="hidden md:flex text-zinc-400 hover:text-zinc-200 cursor-pointer">
                  Projects <ChevronDown className="h-4 w-4 ml-1 mt-1.5" />
                </span>
                <span className="hidden md:flex text-zinc-400 hover:text-zinc-200 cursor-pointer">
                  Milestones <ChevronDown className="h-4 w-4 ml-1 mt-1.5" />
                </span>
                <span className="flex text-zinc-400 hover:text-zinc-200 cursor-pointer">
                  Assignee <ChevronDown className="h-4 w-4 ml-1 mt-1.5" />
                </span>
                <span className="flex text-zinc-400 hover:text-zinc-200 cursor-pointer">
                  Sort <ChevronDown className="h-4 w-4 ml-1 mt-1.5" />
                </span>
              </div>
            </div>
          </div>
          <div className="overflow-hidden rounded-md rounded-tr-none rounded-