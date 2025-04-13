import Image from "next/image";
import PlaceholderImg from "@/assets/img/placeholder.png";
import Link from "next/link";

export default function Messages() {
  return (
    <main>
      <ul className="grid gap-4">
        <MessageCard />
        <MessageCard />
        <MessageCard />
      </ul>
    </main>
  );
}

function MessageCard() {
  return (
    <li className="relative bg-border p-4 rounded-xl flex gap-8 transition-all duration-150 hover:text-inactive hover:bg-fav">
      <Image
        src={PlaceholderImg}
        alt="Text"
        className="bg-navbar rounded-full aspect-square w-14 "
      />
      <article className="grow">
        <header className="flex justify-between gap-4">
          <h2 className="text-lg font-semibold">
            <Link href="/" className="after:absolute after:inset-0">
              Name
            </Link>
          </h2>
          <p>Date</p>
        </header>
        <p>Text preview...</p>
      </article>
    </li>
  );
}
