import Waves from "@/components/waves";
import Header from "@/components/Header";
import { Montserrat } from "next/font/google";

const mont = Montserrat({ subsets: ["latin"] });

export default function Design() {
  return (
    <div className="background">
      <Waves />
      <div className="padding-container">
        <Header />
        <div className="presentation-container">
          <iframe
            src="https://docs.google.com/presentation/d/e/2PACX-1vQmj8sN2fEQujiaJRmrsb7lvouGGya71lJu9G-z0jBtOjahklLDue0yBxHDhFAdmqye1NjQtnFcgI9E/embed?start=false&loop=false&delayms=3000"
            frameborder="0"
            allowfullscreen="true"
            mozallowfullscreen="true"
            webkitallowfullscreen="true"
            className="presentation"
          ></iframe>
          <div className="download2-container">
            <a
              href="https://drive.google.com/file/d/1_mNo0GjFJsfwR_O-295Dj2MX3SKOwYXt/view?usp=sharing"
              className="download2-button">
              Click Here to Download PDF
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
