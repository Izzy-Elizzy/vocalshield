import { Montserrat } from "next/font/google";
import { useRouter } from "next/router";

const mont = Montserrat({ subsets: ["latin"] });

export default function Header() {

  const router = useRouter();

    return(
        <header className="header">
        <h1 onClick={() => router.push('/')} className="logo">vocalshield</h1>
        <div className="header-list">
          <li onClick={() => router.push('/bio')} className="header-item">Bio</li>
          <li onClick={() => router.push('/presentation')} className="header-item">Presentation</li>
        </div>
        <div className="try-button">Try for Free</div>
      </header>
    )
}