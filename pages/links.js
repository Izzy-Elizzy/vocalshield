import Waves from "@/components/waves";
import Header from "@/components/Header";
import { Montserrat } from "next/font/google";
import LinksComponent from "@/components/linksComponent";

const mont = Montserrat({ subsets: ["latin"] });

export default function Links() {
  return (
    <div className="background">
      <Waves />
      <div className="padding-container">
        <Header />
        <LinksComponent/>
      </div>
    </div>
  );
}