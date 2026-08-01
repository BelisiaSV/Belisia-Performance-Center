"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useClub } from "@/lib/club-context";

const NAV_ITEMS = [
  {
    href: "/dashboard",
    label: "Dashboard",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 11.5 12 4l9 7.5" />
        <path d="M5.5 10v9a1 1 0 0 0 1 1H9a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h2.5a1 1 0 0 0 1-1v-9" />
      </svg>
    ),
  },
  {
    href: "/videos",
    label: "Video's & sessies",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="6" width="13" height="12" rx="2" />
        <path d="M16 10.5 21 7.5v9L16 13.5" />
      </svg>
    ),
  },
  {
    href: "/sessions",
    label: "Sessie-analyse",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 20a8 8 0 1 1 16 0" />
        <path d="M12 20V13" />
        <path d="M12 13l4-4" />
      </svg>
    ),
  },
  {
    href: "/players",
    label: "Spelers",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="8" r="3" />
        <path d="M3.5 19.5c0-3 2.5-5 5.5-5s5.5 2 5.5 5" />
        <circle cx="17" cy="9" r="2.4" />
        <path d="M15.2 14.2c2.3.2 4.3 2 4.3 5.3" />
      </svg>
    ),
  },
  {
    href: "/settings",
    label: "Instellingen",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 3v2.2M12 18.8V21M4.9 4.9l1.55 1.55M17.55 17.55 19.1 19.1M3 12h2.2M18.8 12H21M4.9 19.1l1.55-1.55M17.55 6.45 19.1 4.9" />
      </svg>
    ),
  },
];

export function Sidebar() {
  const pathname = usePathname();
  const { clubName } = useClub();

  return (
    <aside className="sidebar">
      <div className="sidebar-brand">
        <Image
          className="logo-img"
          src="/images/logo.webp"
          alt="Clublogo"
          width={36}
          height={36}
        />
        <div className="brand-text">
          <div className="name">{clubName}</div>
          <div className="sub">SV Belisia · A-kern</div>
        </div>
      </div>
      <nav>
        {NAV_ITEMS.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={pathname === item.href ? "active" : undefined}
          >
            {item.icon}
            {item.label}
          </Link>
        ))}
      </nav>
      <div className="sidebar-bottom">
        <Link href="/">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h3" />
            <path d="M15 16l4-4-4-4" />
            <path d="M19 12H9" />
          </svg>
          Uitloggen
        </Link>
        <div className="sidebar-foot">Powered by Platform for Professionals</div>
      </div>
    </aside>
  );
}
