import Waves from "@/components/waves";
import Header from "@/components/Header";
import LabComponent from "@/components/labComponent";
import { Montserrat } from "next/font/google";

const mont = Montserrat({ subsets: ["latin"] });

export default function Lab() {
  return (
    <div className="background">
      <Waves />
      <div className="padding-container">
        <Header />
        <LabComponent/>
        </div>
    </div>
  );
}
