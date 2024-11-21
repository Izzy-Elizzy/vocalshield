import { Montserrat } from "next/font/google";

const mont = Montserrat({ subsets: ["latin"] });

export default function LabComponent() {
  return (
    <div className="lab-container">
      <a href="https://github.com/Izzy-Elizzy/vocalshield/wiki">Lab 3</a>
      <a href="https://drive.google.com/file/d/1jrDeR96uo0VrBYgFQ2xhr-ljgunQagoT/view?usp=sharing">Durel Lab 1</a>
      <br/>
      <a href="https://drive.google.com/file/d/1qpVE0K76jVsmFGc9p2Ue1sz9tC7aPaan/view?usp=sharing">Joshua Lab 1</a>
      <br/>
      <a href="https://docs.google.com/document/d/1Jh58QXdVu-xnc1c59pI10_6_crko4yzawixaWkEpCXQ/edit?usp=sharing">Izzy Lab 1</a>
      <br/>
      <a href="https://drive.google.com/file/d/1sOQRgYppQx0uO0ZXp9m_vGmrkda5PCIH/view?usp=sharing">Darrell Lab 1</a>
      <br/>
      <a href="https://drive.google.com/file/d/1swbgM7N1J28X_fjPifE_ys5h6gDkNc08/view?usp=sharing">Dima Lab 1</a>
    </div>
  );
}
