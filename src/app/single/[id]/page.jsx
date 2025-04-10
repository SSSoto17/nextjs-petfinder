import Image from "next/image";
import { getSingleAnimal } from "@/lib/api";

import placeholderImg from "@/assets/img/placeholder.png";

export default async function SingleView({ params }) {
  const { id } = await params;
  const { name, age, photos, type, gender } = await getSingleAnimal(id);

  return (
    <main>
      <section>
        <Image
          src={photos[0]?.large || placeholderImg}
          alt={name}
          width={500}
          height={500}
        />
        <article>
          <h1>{name}</h1>
          <ul>
            <li>{type}</li>
            <li>{gender}</li>
          </ul>
        </article>
      </section>
    </main>
  );
}
