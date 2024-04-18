import Waves from "@/components/waves";
import Header from "@/components/Header";
import { Montserrat } from "next/font/google";
import AppendixComponent from "@/components/appendixComponent";

const mont = Montserrat({ subsets: ["latin"] });

export default function Appendix() {
  return (
    <div className="background">
      <Waves />
      <div className="padding-container">
        <Header />
        <AppendixComponent/>
      </div>
    </div>
  );
}