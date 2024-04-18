import Waves from "@/components/waves";
import Header from "@/components/Header";
import { Montserrat } from "next/font/google";

const mont = Montserrat({ subsets: ["latin"] });

export default function Links() {
  return (
    <div className="background">
      <Waves />
      <div className="padding-container">
        <Header />
        <div class="download2-container">
            <a
              href="https://drive.google.com/file/d/1ULcJypWcVs8Q78mxc9iPsdbE6WX7-6YF/view?usp=sharing"
              class="download2-button"
            >
              Click Here to Lab Outline PDF
            </a>
          </div>
      </div>
    </div>
  );
}