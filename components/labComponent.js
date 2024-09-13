import { Montserrat } from "next/font/google";

const mont = Montserrat({ subsets: ["latin"] });


export default function LabComponent() {
    return(
        <div className="lab-container">
            <h1>LABS GO HERE</h1>
        </div>
    )
}