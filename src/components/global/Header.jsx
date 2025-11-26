"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useState, useEffect } from "react";

// ...existing code...
const Header = () => {
  const pathname = usePathname();

  const [hovered, setHovered] = useState(null);
  const [active, setIsActive] = useState(null);

  // keep active in sync with route (so highlight stays after navigation)
  useEffect(() => {
    setIsActive(pathname);
  }, [pathname]);

  return (
    <nav className="fixed top-0 px-(--content-width) w-full z-110 backdrop-blur-xs bg-(--moerkblaa-600)">
      <ul className="flex flex-col items-center justify-between py-4 px-8">
        <li>
          <a href="/">
            <Image
              src="/"
              alt="submark"
              width={70}
              height={70}
              className="cursor-pointer"
            />
          </a>
        </li>

        {/* Navigation */}
        <li>
          <ul className="bg-(--background) rounded-full flex h-8 p-1 gap-10 items-center">
              <li>
                <Link
                  href="/arrangementer"
                  onClick={() =>
                    setIsActive(prev => (prev === "/arrangementer" ? null : "/arrangementer"))
                  }
                  onMouseEnter={() => setHovered("/arrangementer")}
                  onMouseLeave={() => setHovered(null)}
                  onFocus={() => setHovered("/arrangementer")}
                  onBlur={() => setHovered(null)}
                  className="cursor-pointer transition-all duration-300 text-(--hvid) relative"
                >
                  Arrangementer
                   {(hovered === "/arrangementer" || active === "/arrangementer") ? (
                  <div className="absolute -top-3 -left-2 w-10 h-10 rounded-full bg-(--gul-900) -z-100 transition-all duration-300"></div>
                ) : null}
                </Link>
              </li>

               <li>
                <Link
                  href="/kalender"
                  onClick={() =>
                    setIsActive(prev => (prev === "/kalender" ? null : "/kalender"))
                  }
                  onMouseEnter={() => setHovered("/kalender")}
                  onMouseLeave={() => setHovered(null)}
                  onFocus={() => setHovered("/kalender")}
                  onBlur={() => setHovered(null)}
                  className="cursor-pointer transition-all duration-300 text-(--hvid) relative"
                >
                  Kalender
                   {(hovered === "/kalender" || active === "/kalender") ? (
                  <div className="absolute -top-3 -left-2 w-10 h-10 rounded-full bg-(--gul-900) -z-100 transition-all duration-300"></div>
                ) : null}
                </Link>
              </li>

               <li>
                <Link
                  href="/om-bellevue"
                  onClick={() =>
                    setIsActive(prev => (prev === "/om-bellevue" ? null : "/om-bellevue"))
                  }
                  onMouseEnter={() => setHovered("/om-bellevue")}
                  onMouseLeave={() => setHovered(null)}
                  onFocus={() => setHovered("/om-bellevue")}
                  onBlur={() => setHovered(null)}
                  className="cursor-pointer transition-all duration-300 text-(--hvid) relative"
                >
                  Om Teatret
                   {(hovered === "/om-bellevue" || active === "/om-bellevue") ? (
                  <div className="absolute -top-3 -left-2 w-10 h-10 rounded-full bg-(--gul-900) -z-100 transition-all duration-300"></div>
                ) : null}
                </Link>
              </li>

              <li>
                <Link
                  href="/praktisk-info"
                  onClick={() =>
                    setIsActive(prev => (prev === "/praktisk-info" ? null : "/praktisk-info"))
                  }
                  onMouseEnter={() => setHovered("/praktisk-info")}
                  onMouseLeave={() => setHovered(null)}
                  onFocus={() => setHovered("/praktisk-info")}
                  onBlur={() => setHovered(null)}
                  className="cursor-pointer transition-all duration-300 text-(--hvid) relative"
                >
                  Praktisk Info
                   {(hovered === "/praktisk-info" || active === "/praktisk-info") ? (
                  <div className="absolute -top-3 -left-2 w-10 h-10 rounded-full bg-(--gul-900) -z-100 transition-all duration-300"></div>
                ) : null}
                </Link>
              </li>

              <li>
                <Link
                  href="/venneforening"
                  onClick={() =>
                    setIsActive(prev => (prev === "/venneforening" ? null : "/venneforening"))
                  }
                  onMouseEnter={() => setHovered("/venneforening")}
                  onMouseLeave={() => setHovered(null)}
                  onFocus={() => setHovered("/venneforening")}
                  onBlur={() => setHovered(null)}
                  className="cursor-pointer transition-all duration-300 text-(--hvid) relative"
                >
                  Venneforening
                   {(hovered === "/venneforening" || active === "/venneforening") ? (
                  <div className="absolute -top-3 -left-2 w-10 h-10 rounded-full bg-(--gul-900) -z-100 transition-all duration-300"></div>
                ) : null}
                </Link>
              </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Header;