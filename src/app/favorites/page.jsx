import PetList from "@/components/PetList";
import { getAnimals } from "@/lib/api";

export default async function Favorites() {
  return (
    <section className="relative">
      <PetList />
    </section>
  );
}
