"use client";

import Link from "next/link";
import { IoMdNotificationsOutline } from "react-icons/io";
import { LuHouse, LuStar, LuMessageCircle, LuUser } from "react-icons/lu";
import {} from "react-icons/io";
import { usePathname } from "next/navigation";

export function Header() {
  return (
    <header className="flex justify-between items-center py-4">
      <Link href="/" className="text-heading font-extrabold text-lg">
        FamilyFriends
      </Link>
      <NotificationBell />
    </header>
  );
}

export function NavBar() {
  const currentSite = usePathname();
  return (
    <nav className="py-4 bg-navbar sticky bottom-0 backdrop-blur-2xl">
      <ul className="flex justify-evenly gap-4">
        <li>
          <Link href="/">
            <LuHouse
              size={24}
              className={`${
                currentSite === "/" ? "text-accent" : "text-inactive"
              } hover:text-accent transition-all duration-150`}
            />
          </Link>
        </li>
        <li>
          <Link href="/favorites">
            <LuStar
              size={24}
              className={`${
                currentSite === "/favorites" ? "text-accent" : "text-inactive"
              } hover:text-accent transition-all duration-150`}
            />
          </Link>
        </li>
        <li>
          <Link href="/messages">
            <LuMessageCircle
              size={24}
              className={`${
                currentSite === "/messages" ? "text-accent" : "text-inactive"
              } hover:text-accent transition-all duration-150`}
            />
          </Link>
        </li>
        <li>
          <Link href="/account">
            <LuUser
              size={24}
              className={`${
                currentSite === "/account" ? "text-accent" : "text-inactive"
              } hover:text-accent transition-all duration-150`}
            />
          </Link>
        </li>
      </ul>
    </nav>
  );
}

function NotificationBell() {
  return (
    <div className="relative cursor-pointer">
      <IoMdNotificationsOutline size={24} className="stroke-2" />
      <div className="aspect-square absolute top-0.5 right-1 w-1.5 outline-2 outline-white bg-accent rounded-full" />
    </div>
  );
}
