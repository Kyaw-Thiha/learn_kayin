import "~/styles/globals.css";
import "~/app/globals.css";

import { Inter } from "next/font/google";
import { cookies } from "next/headers";

import { TRPCReactProvider } from "~/trpc/react";
import { Button } from "~/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Learn Kayin",
  description: "Where Kayin children can learn",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable}`}>
        <TRPCReactProvider cookies={cookies().toString()}>
          <RootNav />
          {children}
        </TRPCReactProvider>
      </body>
    </html>
  );
}

const RootNav = () => {
  return (
    <header className="border-b">
      <nav className="container mx-auto flex justify-between px-4 py-4">
        <Button asChild className="flex gap-2 px-4 py-6" variant="outline">
          <Link href="/">
            {/* <Image
              className="bg-white"
              src="/images/logo-light.svg"
              alt="Logo"
              width="32"
              height="32"
            /> */}
            <span className="text-2xl font-bold">Learn Kayin</span>
          </Link>
        </Button>

        <div className="flex flex-row items-center gap-4"></div>
      </nav>
    </header>
  );
};
