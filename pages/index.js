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
        <h2 style={{ textAlign: "center", marginTop: "50px" }}>
          Team Members & Contributions
        </h2>
        <ul style={{ listStyleType: "none", padding: 0 }}>
          <li>Durel - Lab 1</li>
          <li>Joshua - Lab 1</li>
          <li>Izzy - Lab 1</li>
          <li>Darrell - Lab 1</li>
          <li>Dima - Lab 1</li>
        </ul>
        <br />
        <a
          href="https://github.com/your-team-repo-url/wiki/User-Manual"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-link" // Apply the same class as the other navigation links
        >
          User Manual - Lab 3 & Lab 4
        </a>
        <Hero />
      </div>
    </div>
  );
}
