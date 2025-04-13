"use client";

import Link from "next/link";
import { IoMdNotificationsOutline } from "react-icons/io";
import {
  LuHouse,
  LuStar,
  LuMessageCircle,
  LuUser,
  LuChevronLeft,
} from "react-icons/lu";
import { usePathname, useRouter } from "next/navigation";
import { useFavorites, useAddFavorite, useRemoveFavorite } from "@/lib/store";

export function Header() {
  return (
    <header className="py-4 z-10 bg-navbar sticky top-0 backdrop-blur-2xl">
      <nav className="flex justify-between items-center">
        <Link href="/" className="text-heading font-extrabold text-lg">
          FamilyFriends
        </Link>
        <NotificationBell />
      </nav>
    </header>
  );
}

export function NavBar() {
  const currentSite = usePathname();

  return (
    <nav className="py-4 z-10 bg-navbar sticky bottom-0 backdrop-blur-2xl">
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
    <div className="relative cursor-pointer group">
      <IoMdNotificationsOutline
        size={24}
        className="stroke-2 group-hover:text-inactive transition-all duration-150"
      />
      <div className="aspect-square absolute top-0.5 right-1 w-1.5 outline-2 outline-white bg-accent rounded-full" />
    </div>
  );
}

export function PetNavBar({ data }) {
  const pathname = usePathname();
  const router = useRouter();
  const favorites = useFavorites();

  return (
    <nav
      className={`${
        pathname !== "/" ? "p-6" : "p-4"
      } flex justify-between items-center absolute top-0 right-0 left-0`}
    >
      {pathname.includes("single") && (
        <LuChevronLeft
          size={32}
          className="bg-white rounded-full p-1 cursor-pointer hover:scale-105 transition-all duration-75 z-10"
          onClick={() => router.back()}
        />
      )}
      <FavoriteButton
        iconSize={pathname.includes("single") ? 32 : 24}
        data={data}
        isFavorite={favorites.find((fav) => fav.id === data.id)}
      />
    </nav>
  );
}

export function FavoriteButton({ iconSize, data, isFavorite }) {
  const addFav = useAddFavorite();
  const removeFav = useRemoveFavorite();

  return (
    <button
      onClick={isFavorite ? () => removeFav(data.id) : () => addFav(data)}
      className="ml-auto z-10"
    >
      <LuStar
        size={iconSize}
        className={`${
          isFavorite ? "fill-white bg-accent" : "bg-fav"
        } p-1 text-background rounded-full cursor-pointer hover:fill-white hover:bg-accent transition-all duration-150`}
      />
    </button>
  );
}
