"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { getProduct } from "@/content/products";

const TABS = [
  { label: "Shop", href: "/" },
  { label: "Courses", href: "/courses" },
  { label: "Materials", href: "/materials" },
  { label: "Consultations", href: "/consultations" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function TabNav() {
  const pathname = usePathname();
  const navRef = useRef<HTMLElement>(null);
  // Product pages highlight their category tab.
  const product = pathname.startsWith("/products/")
    ? getProduct(pathname.split("/")[2] ?? "")
    : undefined;
  const current = product ? `/${product.category}` : pathname;

  // Keep the active tab in view on narrow screens (horizontal scroller).
  useEffect(() => {
    const nav = navRef.current;
    const el = nav?.querySelector<HTMLElement>('[aria-current="page"]');
    if (!nav || !el) return;
    nav.scrollLeft = el.offsetLeft - (nav.clientWidth - el.clientWidth) / 2;
  }, [current]);

  return (
    <nav ref={navRef} aria-label="Store sections" className="tabs">
      <div className="tabs-inner">
        {TABS.map((t) => {
          const active = isActive(current, t.href);
          return (
            <Link
              key={t.href}
              href={t.href}
              className="tab"
              aria-current={active ? "page" : undefined}
            >
              {t.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
