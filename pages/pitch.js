import Waves from "@/components/waves";
import Header from "@/components/Header";
import { Montserrat } from "next/font/google";
import PitchComponent from "@/components/pitchComponent";

const mont = Montserrat({ subsets: ["latin"] });

export default function Pitch() {
  return (
    <div className="background">
      <Waves />
      <div className="padding-container">
        <Header />
        <PitchComponent/>
      </div>
    </div>
  );
}