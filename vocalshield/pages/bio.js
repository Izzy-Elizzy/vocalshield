import Waves from "@/components/waves";
import Header from "@/components/Header";
import BioComponent from "@/components/Bio";
import { Montserrat } from "next/font/google";

const mont = Montserrat({ subsets: ["latin"] });

export default function Bio() {
  return (
    <div className="background">
      <Waves />
      <div className="padding-container">
        <Header />
        <BioComponent/>
        </div>
    </div>
  );
}
