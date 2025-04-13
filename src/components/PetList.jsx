"use client";

import { useFavorites, useFilter } from "@/lib/store";
import { PetNavBar } from "./Globals";

import { LuStar } from "react-icons/lu";

import Image from "next/image";
import Link from "next/link";

import placeholderImg from "@/assets/img/placeholder.png";

export default function PetList({ data }) {
  const activeFilter = useFilter();
  const favorites = useFavorites();

  const filteredData =
    activeFilter === "All"
      ? data
      : data.filter((pet) => pet.type === activeFilter);

  const pets = !data ? favorites : filteredData;

  if (!data && favorites.length === 0)
    return (
      <header className="flex items-center gap-4 h-full justify-center cursor-default">
        <p className="text-lg text-inactive">No favorites yet</p>
        <LuStar size={24} className="stroke-accent fill-accent" />
      </header>
    );

  return (
    <ul className="grid grid-cols-2 gap-4 py-4">
      {pets.map((pet, id) => {
        return <PetCard key={id} {...pet} data={pet} />;
      })}
    </ul>
  );
}

function PetCard({ id, name, age, breeds, photos, data }) {
  return (
    <li className="grid grid-rows-[1fr,_auto] content-end min-h-36 bg-background drop-shadow-md rounded-2xl cursor-pointer overflow-clip transition-all duration-150 hover:drop-shadow-lg hover:scale-102">
      <PetNavBar data={data} />
      <Image
        src={photos[0]?.medium || placeholderImg}
        width={300}
        height={300}
        alt={name}
        className="rounded-2xl h-36 object-cover"
      />

      <article className="px-3  py-4 text-inactive">
        <header className="flex justify-between items-end gap-2">
          <h2 className="text-foreground font-bold">
            <Link
              href={`/single/${id}`}
              className="after:absolute after:inset-0"
            >
              {name}
            </Link>
          </h2>
          <p>{age}</p>
        </header>
        <p>{breeds?.primary}</p>
      </article>
    </li>
  );
}
