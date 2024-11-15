import { Montserrat } from 'next/font/google';
import Waves from '@/components/Waves';
import Hero from '@/components/Hero';
import Header from '@/components/Header';

const mont = Montserrat({ subsets: ['latin'] });

export default function Home() {
    return (
        <div className="background">
            <Waves />
            <div className="padding-container">
                <Header />
                <Hero />

                <div style={{ textAlign: 'center', marginTop: '50px' }}>
                    <a
                        href="https://github.com/your-team-repo-url/wiki/User-Manual"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="nav-link" // Apply the same class as the other navigation links
                    >
                        User Manual - Lab 3 & Lab 4
                    </a>
                </div>
            </div>
        </div>
    );
}
