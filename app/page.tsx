import Banner from "@/components/Banner";
import Cook from "@/components/Cook";
import Expert from "@/components/Expert/page";
import Features from "@/components/Features";
import Gallery from "@/components/Gallery";
import NewsLetter from "@/components/NewsLetter";

export default function Home() {
  return (
    <main>
      <Banner />
      <Features />
      <Cook />
      <Expert/>
      <Gallery/>
      <NewsLetter />
    </main>
  );
}
