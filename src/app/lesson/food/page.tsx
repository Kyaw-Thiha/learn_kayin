import Image from "next/image";
import ChickenImage from "public/images/food/chicken.jpg";
import BeefImage from "public/images/food/beef.jpg";
import PorkImage from "public/images/food/pork.jpg";
import RiceImage from "public/images/food/rice.jpg";
import BreadImage from "public/images/food/bread.jpg";
import WaterImage from "public/images/food/water.jpg";
import MilkImage from "public/images/food/milk.jpg";

import { Button } from "~/components/ui/button";
import Link from "next/link";

export default async function Home() {
  const phrases = [
    {
      english: "Chicken",
      kayin: "shawk",
      image: ChickenImage,
    },
    {
      english: "Beef",
      kayin: "shi kri",
      image: BeefImage,
    },
    {
      english: "Pork",
      kayin: "wa",
      image: PorkImage,
    },
    {
      english: "Rice",
      kayin: "hta ming",
      image: RiceImage,
    },
    {
      english: "Bread",
      kayin: "aing gri",
      image: BreadImage,
    },
    {
      english: "Drink Water",
      kayin: "Aw htee",
      image: WaterImage,
    },
    {
      english: "Milk",
      kayin: "htu k'auk",
      image: MilkImage,
    },
  ];

  return (
    <main className="mb-20 mt-4 flex min-h-screen flex-col">
      <h1 className="mb-8 text-center text-4xl font-medium md:mb-8">
        Food Lesson
      </h1>
      <section className="mx-4 mb-8 flex justify-end md:mx-24">
        <Button>
          <Link href="/quiz/food">Quiz </Link>
        </Button>
      </section>
      <section className="mx-4 flex flex-row flex-wrap justify-center gap-4 self-center md:gap-8">
        {phrases.map((phrase) => {
          return (
            <div className="flex flex-col gap-4" key={phrase.english}>
              <Image
                src={phrase.image}
                className="rounded-lg"
                width="300"
                height="250"
                alt={phrase.english}
              />
              <div className="flex flex-col items-center">
                <p>{phrase.kayin}</p>
                <p className="text-muted-foreground">{phrase.english}</p>
              </div>
            </div>
          );
        })}
      </section>
      <section className="mt-12 text-center">
        <Button>
          <Link href="/quiz/food">
            Ready to test yourself? Answer the Quizzz
          </Link>
        </Button>
      </section>
    </main>
  );
}
