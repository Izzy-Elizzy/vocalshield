import { Montserrat } from "next/font/google";

const mont = Montserrat({ subsets: ["latin"] });

export default function LabComponent() {
  return (
    <div className="lab-container">
      <a href="https://docs.google.com/document/d/1lg3FDrrpiiu3TU3NK78PURxRMPS5CAmKJqfNAND5nFI/edit?usp=sharing">LAB OUTLINE LINKS</a>
    </div>
  );
}
