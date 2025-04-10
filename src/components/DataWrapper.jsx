import { getAnimals, getAnimalTypes } from "@/lib/api";
import PetFilter from "./PetFilter";
import PetList from "./PetList";

export default async function BrowsePets() {
  const filterData = await getAnimalTypes();
  const petData = await getAnimals();

  return (
    <section>
      <PetFilter data={filterData} />
      <PetList data={petData} />
    </section>
  );
}
