import Image from "next/image";
import MorningImage from "public/images/basics/morning.jpg";
import AfternoonImage from "public/images/basics/afternoon.jpg";
import EveningImage from "public/images/basics/evening.jpg";
import NightImage from "public/images/basics/night.jpg";
import NameAskImage from "public/images/basics/name_ask.jpg";
import NameAnswerImage from "public/images/basics/name_answer.jpg";
import NiceToMeetYouImage from "public/images/basics/nice_to_meet_you.jpg";
import ThankYouImage from "public/images/basics/thank_you.jpg";

import { Button } from "~/components/ui/button";
import Link from "next/link";

export default async function Home() {
  const phrases = [
    {
      english: "Good Morning!",
      kayin: "Ghaw luh a ghay",
      image: MorningImage,
    },
    {
      english: "Good Afternoon!",
      kayin: "Nee luh a ghay",
      image: AfternoonImage,
    },
    {
      english: "Good Evening!",
      kayin: "Ha luh a ghay",
      image: EveningImage,
    },
    {
      english: "Good Night!",
      kayin: "Na luh a ghay",
      image: NightImage,
    },
    {
      english: "What is your name?",
      kayin: " Na mee dee leh?",
      image: NameAskImage,
    },
    {
      english: "My name is ______",
      kayin: "Ya mee may _______.",
      image: NameAnswerImage,
    },
    {
      english: "Nice to meet you!",
      kayin: "Tee ban a tha khu doh mah",
      image: NiceToMeetYouImage,
    },
    {
      english: "Thank you very much",
      kayin: "Ta bluh doh mah",
      image: ThankYouImage,
    },
  ];

  return (
    <main className="mb-20 mt-4 flex min-h-screen flex-col">
      <h1 className="mb-8 text-center text-4xl font-medium md:mb-8">
        Basics Lesson
      </h1>
      <section className="mx-4 mb-8 flex justify-end md:mx-24">
        <Button>
          <Link href="/quiz/basics">Quiz </Link>
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
          <Link href="/quiz/basics">
            Ready to test yourself? Answer the Quizzz
          </Link>
        </Button>
      </section>
    </main>
  );
}
