import "./globals.css";
import { Manrope } from "next/font/google";
import { Header, NavBar } from "@/components/Globals";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata = {
  title: "PetFinder & Friends",
  description: "Find your new best friend!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} antialiased`}>
        <Header />
        <main className="no-scrollbar overflow-x-visible">{children}</main>
        <NavBar />
      </body>
    </html>
  );
}
