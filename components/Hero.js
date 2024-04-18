import { Montserrat } from "next/font/google";

const mont = Montserrat({ subsets: ["latin"] });


export default function Hero() {
    return(
      <div className="hero-section">
        <p className="hero-slogan">The Future of Intelligent Voice Protection</p>
        <h1 className="hero-hook">
          Your Voice.
          <br/>
          Secure, Unbreakable
        </h1>
        <div className="download-button">
          <p className="download-text">Download</p>
          <p1 className="model-text">
            Latest SDK
          </p1>
          <br/>
          <p className="version-text">Version 1.0</p>
          <div className="download-icon"/>
        </div>
      </div>
  
    )
}