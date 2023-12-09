import Image from "next/image";
import OneImage from "public/images/number/1.jpg";
import TwoImage from "public/images/number/2.jpg";
import ThreeImage from "public/images/number/3.jpg";
import FourImage from "public/images/number/4.jpg";
import FiveImage from "public/images/number/5.jpg";
import SixImage from "public/images/number/6.jpg";
import SevenImage from "public/images/number/7.jpg";
import EightImage from "public/images/number/8.jpg";
import NineImage from "public/images/number/9.jpg";
import TenImage from "public/images/number/10.jpg";
import AMImage from "public/images/number/am.jpg";
import PMImage from "public/images/number/pm.jpg";

import { Button } from "~/components/ui/button";
import Link from "next/link";

export default async function Home() {
  const phrases = [
    {
      english: "One",
      kayin: "ter",
      image: OneImage,
    },
    {
      english: "Two",
      kayin: "kee",
      image: TwoImage,
    },
    {
      english: "Three",
      kayin: "thu",
      image: ThreeImage,
    },
    {
      english: "Four",
      kayin: "lwee",
      image: FourImage,
    },
    {
      english: "Five",
      kayin: "yeh",
      image: FiveImage,
    },
    {
      english: "Six",
      kayin: "hku",
      image: SixImage,
    },
    {
      english: "Seven",
      kayin: "nwee",
      image: SevenImage,
    },
    {
      english: "Eight",
      kayin: "hkaw",
      image: EightImage,
    },
    {
      english: "Nine",
      kayin: "kwee",
      image: NineImage,
    },
    {
      english: "Ten",
      kayin: "ta hsee",
      image: TenImage,
    },
    {
      english: "a.m.",
      kayin: "hgaw ka",
      image: AMImage,
    },
    {
      english: "p.m.",
      kayin: "haw ka",
      image: PMImage,
    },
  ];

  return (
    <main className="mb-20 mt-4 flex min-h-screen flex-col">
      <h1 className="mb-8 text-center text-4xl font-medium md:mb-8">
        Food Lesson
      </h1>
      <section className="mx-4 mb-8 flex justify-end md:mx-24">
        <Button>
          <Link href="/quiz/number">Quiz </Link>
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
          <Link href="/quiz/number">
            Ready to test yourself? Answer the Quizzz
          </Link>
        </Button>
      </section>
    </main>
  );
}
