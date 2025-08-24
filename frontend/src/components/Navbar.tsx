"use client";

import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";

export default function Navbar() {
  return (
    <header className="border-b border-[color:var(--border)] bg-[color:var(--card)]/70 backdrop-blur supports-[backdrop-filter]:bg-[color:var(--card)]/60 sticky top-0 z-50">
      <div className="container h-16 flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Link
            href="/"
            className="text-lg font-bold text-[color:var(--foreground)]"
          >
            DSC
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="#about" className="text-sm hover:opacity-80">
            About
          </Link>
          <Link href="#events" className="text-sm hover:opacity-80">
            Events
          </Link>
          <Link href="#projects" className="text-sm hover:opacity-80">
            Projects
          </Link>
          <Link href="#contact" className="text-sm hover:opacity-80">
            Contact
          </Link>
        </nav>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <button
            aria-label="Profile"
            className="inline-flex items-center justify-center size-9 rounded-full border border-[color:var(--border)] bg-[color:var(--muted)] text-[color:var(--foreground)]"
          >
            <span className="text-xs font-medium">JD</span>
          </button>
        </div>
      </div>
    </header>
  );
}
