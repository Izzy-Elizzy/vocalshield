import { Montserrat } from "next/font/google";

const mont = Montserrat({ subsets: ["latin"] });

export default function LinksComponent() {
  return (
    <div className="linksContainer">
      <a href="https://www.odu.edu/">ODU LINK</a>
      <a href="https://www.odu.edu/computer-science">CS ODU LINK</a>
    </div>
  );
}