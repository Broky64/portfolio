import { Navbar } from "@/components/navbar";
import { PortfolioHero } from "@/components/portfolio-hero";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <main>
        <PortfolioHero/>
      </main>
    </div>
  );
}
