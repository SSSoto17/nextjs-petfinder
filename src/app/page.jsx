import { getAnimals, getAnimalTypes } from "@/lib/api";
import PetFilter from "@/components/PetFilter";
import PetList from "@/components/PetList";

export default async function Home() {
  const filterData = await getAnimalTypes();
  const petData = await getAnimals();
  return (
    <section className="relative">
      <PetFilter data={filterData} />
      <PetList data={petData} />
    </section>
  );
}
