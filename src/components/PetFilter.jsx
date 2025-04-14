"use client";

import Image from "next/image";

import iconAll from "@/assets/img/All.png";
import iconCats from "@/assets/img/Cats.png";
import iconDogs from "@/assets/img/Dogs.png";
import { useFilter, useFilterActions } from "@/lib/store";

export default function PetFilter({ data }) {
  const activeFilter = useFilter();
  const { setFilter } = useFilterActions();

  const filterList = [
    { label: "All", icon: iconAll },
    { label: data[0].name, icon: iconDogs },
    { label: data[1].name, icon: iconCats },
  ];

  return (
    <header className="col-span-full! full-bleed sticky top-0 z-10 bg-navbar backdrop-blur-2xl">
      <ul className="flex gap-3 py-4 ">
        {filterList.map((type, id) => {
          return (
            <FilterTab
              key={id}
              {...type}
              active={activeFilter === type.label}
              setFilter={setFilter}
            />
          );
        })}
      </ul>
    </header>
  );
}

function FilterTab({ label, icon, active, setFilter }) {
  const style = `flex gap-2 items-center p-2 pr-6 rounded-full shrink-0 font-medium cursor-pointer drop-shadow-sm ${
    active
      ? "bg-accent text-background"
      : "bg-white text-inactive border border-border hover:text-accent hover:border-accent transition-all duration-150"
  }`;
  return (
    <li className={style} onClick={() => setFilter(label)}>
      <Image src={icon} width={32} height={32} alt={label} />
      {label}
    </li>
  );
}
