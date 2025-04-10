"use client";

import { useFilter } from "@/lib/store";
import Image from "next/image";
import Link from "next/link";

import { LuStar } from "react-icons/lu";

export default function PetList({ data }) {
  const activeFilter = useFilter();

  const activeData =
    activeFilter === "All"
      ? data
      : data.filter((pet) => pet.type === activeFilter);

  return (
    <ul className="grid grid-cols-2 gap-4 py-4">
      {activeData.map((pet, id) => {
        return <PetCard key={id} {...pet} />;
      })}
    </ul>
  );
}

function PetCard({ id, name, age, breeds, photos }) {
  return (
    <li className="grid content-end min-h-36 relative bg-background drop-shadow-md rounded-2xl cursor-pointer overflow-clip transition-all duration-150 hover:drop-shadow-lg hover:scale-102">
      {photos.length > 0 && (
        <Image
          src={photos[0]?.medium}
          width={300}
          height={300}
          alt={name}
          className="rounded-2xl h-36 object-cover"
        />
      )}
      <article className="px-3  py-4 text-inactive">
        <header className="flex justify-between items-end gap-2">
          <Link href={`/single/${id}`} className="">
            <h2 className="text-foreground font-bold">{name}</h2>
          </Link>
          <p>{age}</p>
        </header>
        <p>{breeds?.primary}</p>
      </article>
      <button className="absolute top-2 right-2">
        <LuStar
          size={24}
          className="p-1 text-background bg-fav rounded-full cursor-pointer hover:fill-white hover:bg-accent transition-all duration-150"
        />
      </button>
    </li>
  );
}
