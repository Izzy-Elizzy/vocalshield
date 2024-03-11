import { Montserrat } from "next/font/google";
import Waves from "@/components/waves";
import Header from "@/components/Header";

const mont = Montserrat({ subsets: ["latin"] });

export default function Presentation() {
  return (
    <div className="background">
    <Waves/>
    <div className="padding-container">
    <Header/>
    <div className="presentation-container">

    <iframe
    src="https://docs.google.com/presentation/d/e/2PACX-1vQiEtobMWt8vPDJArj-JfHfwDDvcGt5wOqTK1DSF9Xec15PWnBxe6HNw9WMTDk0vVp--N3QybxMe303/embed?start=false&loop=false&delayms=3000"
    frameborder="0"
    allowfullscreen="true"
    mozallowfullscreen="true"
    webkitallowfullscreen="true"
    className="presentation"
    ></iframe>
    </div>
    </div>
    </div>
  );
}
