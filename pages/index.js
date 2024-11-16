import { Montserrat } from "next/font/google";
import Waves from "@/components/waves";
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
        <a
          href="https://github.com/your-team-repo-url/wiki/User-Manual"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-link"
        >
          User Manual - Lab 3 & Lab 4
        </a>
      </div>
    </div>
  );
}
