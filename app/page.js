import Blog from "@/components/Blog";
import Footer from "@/components/Footer";
import Form from "@/components/Form";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import Journal from "@/components/Journal";
import NewsLetter from "@/components/NewsLetter";
import Wines from "@/components/Wines";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen overflow-hidden flex-col">
      <Hero />
      <Journal />
      <NewsLetter />
      <Blog />
      <Gallery />
      <Wines />
      <Form />
      <Footer />
    </main>
  );
}
