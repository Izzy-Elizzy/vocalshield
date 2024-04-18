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
          <li onClick={() => router.push('/feasability')} className="header-item">Feasability</li>
          <li onClick={() => router.push('/design')} className="header-item">Design</li>
          <li onClick={() => router.push('/pitch')} className="header-item">Pitch</li>
          <li onClick={() => router.push('/appendix')} className="header-item">Appendix</li>
          <li onClick={() => router.push('/links')} className="header-item">Links</li>
        </div>
        <div className="try-button">Try for Free</div>
      </header>
    )
}