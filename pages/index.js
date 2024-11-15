import { Montserrat } from "next/font/google";
import Waves from "@/components/waves";
import Hero from "@/components/Hero";
import Header from "@/components/Header";

const mont = Montserrat({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="background">
      <Waves/>
      <div className="padding-container">
      <Header/>
      <a 
                    href="https://github.com/Izzy-Elizzy/vocalshield/wiki/User-Manual" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    style={{ display: "block", marginTop: "20px", textAlign: "center", fontSize: "18px", color: "#0070f3", textDecoration: "none" }}
                >
                    User Manual - Lab 3 & Lab 4
                </a>      <Hero/>
      </div>
    </div>
  );
}
