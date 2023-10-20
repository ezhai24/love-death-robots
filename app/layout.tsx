import Image from "next/image";

import { externalRoutes } from "./routes";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-screen">
      <body className="h-screen overflow-hidden">
        <nav className="absolute z-10 flex w-full justify-between px-[5%] pt-5">
          <a
            href={externalRoutes.netflix}
            className=" left-[5%] top-5 z-10 w-5 md:w-8"
          >
            <Image
              src="/assets/netflixLogo.png"
              alt="Netflix logo"
              height={60}
              width={30}
            />
          </a>
          <a
            href={externalRoutes.netflixLDRTitle}
            className=" right-[5%] top-5 z-10 w-28 md:w-44"
          >
            <Image
              src="/assets/ldrIconLogo.svg"
              alt="Heart, X, and robot icons of the Love, Death & Robots logo"
              height={60}
              width={200}
            />
          </a>
        </nav>
        {children}
      </body>
    </html>
  );
}
