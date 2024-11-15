import { Montserrat } from "next/font/google";
import Waves from "@/components/Waves"; 
import Hero from "@/components/Hero";
import Header from "@/components/Header";

const mont = Montserrat({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="background">
      <Waves />
      <div className="padding-container">
        <Header />
        <Hero />
    </div>
    </div>
  );
}
