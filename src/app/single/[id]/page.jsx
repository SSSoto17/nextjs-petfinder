import Image from "next/image";
import { PetNavBar } from "@/components/Globals";
import { getSingleAnimal } from "@/lib/api";

import placeholderImg from "@/assets/img/placeholder.png";

export default async function SingleView({ params }) {
  const { id } = await params;
  const petData = await getSingleAnimal(id);

  return (
    <section className="relative col-start-2">
      <PetNavBar data={petData} />
      <Image
        src={petData.photos[0]?.large || placeholderImg}
        alt={petData.name}
        width={480}
        height={480}
        className="aspect-square object-cover rounded-4xl"
      />
      <PetDetails {...petData} />
      <AdoptButton>{petData.name}</AdoptButton>
    </section>
  );
}

function PetDetails({ name, description, type, gender, age, breeds }) {
  const petProps = [
    { label: type, color: "bg-[#ACD7FF]" },
    { label: gender, color: "bg-[#EDA8B3]" },
    { label: age, color: "bg-[#C5E59C]" },
    { label: breeds?.primary, color: "bg-[#F1E689]" },
  ];
  return (
    <article className="py-4">
      <h1 className="text-heading text-3xl font-bold">{name}</h1>
      <ul className="flex flex-wrap gap-2 py-4">
        {petProps.map((prop, id) => {
          return <DetailBar key={id} {...prop} />;
        })}
      </ul>
      <p>{description}</p>
    </article>
  );
}

function DetailBar({ label, color }) {
  return (
    <li
      className={`px-4 py-2 rounded-3xl text-inactive ${color} cursor-pointer`}
    >
      {label}
    </li>
  );
}

function AdoptButton({ children }) {
  return (
    <button className="flex justify-center gap-1 min-w-full bg-accent text-white py-5 px-2 rounded-full cursor-pointer transition-all duration-150 hover:scale-105 hover:drop-shadow-sm">
      <span className="font-bold">Adopt</span> {children}
    </button>
  );
}
