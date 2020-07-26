import Link from "next/link";

export default function Banner({
  title,
  description,
  link,
}: {
  title: string;
  description: string;
  link: string;
}) {
  return (
    <>
      <div className="pointer-events-none fixed inset-x-0 bottom-0 sm:flex sm:justify-center sm:p