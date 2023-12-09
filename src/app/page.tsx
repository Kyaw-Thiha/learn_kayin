import Image from "next/image";
import Link from "next/link";

import HeroImage from "public/images/hero.jpg";

import { Button } from "~/components/ui/button";

export default async function Home() {
  return (
    <main className="mb-20 mt-4 flex min-h-screen flex-col">
      <HeroSection />
      <TopicList />
    </main>
  );
}

function HeroSection() {
  return (
    <div className="pb-6 sm:pb-8 lg:pb-12">
      <div className="mx-4 max-w-screen-2xl px-4 md:mx-20 md:px-8">
        <section className="flex flex-col-reverse justify-between gap-6 sm:gap-10 md:gap-16 lg:flex-row">
          <div className="flex flex-col justify-center sm:text-center lg:py-12 lg:text-left xl:w-5/12 xl:py-24">
            {/* <p className="mb-4 font-semibold text-muted-foreground md:mb-6 md:text-lg xl:text-xl">
              Welcome
            </p> */}

            <h1 className="text-black-800 mb-2 text-4xl font-bold sm:text-5xl md:mb-4 md:text-6xl">
              Let&#39;s learn Kayin
            </h1>

            <p className="mb-4 leading-relaxed text-gray-500 md:mb-8 lg:w-4/5 xl:text-lg">
              What are you waiting for?
            </p>

            <div className="flex flex-col gap-2.5 sm:flex-row sm:justify-center lg:justify-start">
              <Button>
                <Link href="/">Lets Start Now</Link>
              </Button>
            </div>
          </div>

          <div className="h-48 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:h-auto xl:w-1/2">
            <Image
              priority
              src={HeroImage}
              // width="1000"
              // height="500"
              alt="Hero Image"
              // className="h-full w-full object-cover object-center"
              className="h-auto w-full"
            />
          </div>
        </section>
      </div>
    </div>
  );
}

function TopicList() {
  const topics = [
    {
      name: "Basics",
      link: "/lesson/basics",
      level: "Easy",
    },
    {
      name: "Food",
      link: "/lesson/food",
      level: "Intermediate",
    },
    {
      name: "Number",
      link: "/lesson/number",
      level: "Intermediate",
    },
  ];

  return (
    <section className="mx-4 md:mx-12">
      <h2 className="mb-4 text-4xl">Topics</h2>
      {topics.map((topic) => (
        <div
          key={topic.link}
          className="mb-4 flex items-stretch justify-between"
        >
          <Link
            href={topic.link}
            className="flex w-full items-center justify-start rounded-lg px-4 py-2 transition-all hover:bg-accent hover:text-accent-foreground active:bg-blue-100 dark:active:bg-sky-950/60"
          >
            <div className="flex flex-col items-start">
              <h2 className="mb-2 text-xl font-semibold">{topic.name}</h2>
              <h3 className="text-muted-foreground">{topic.level}</h3>
            </div>
          </Link>
        </div>
      ))}
    </section>
  );
}
