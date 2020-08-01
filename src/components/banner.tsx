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
      <div className="pointer-events-none fixed inset-x-0 bottom-0 sm:flex sm:justify-center sm:px-6 sm:pb-5 lg:px-8">
        <div className="pointer-events-auto flex items-center justify-between gap-x-6 bg-purple-900 py-2.5 px-6 sm:rounded-xl sm:py-3 sm:pr-3.5 sm:pl-4">
          <p className="text-sm leading-6 text-white">
            <Link href={link}>
           