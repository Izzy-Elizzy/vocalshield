import { Montserrat } from "next/font/google";

const mont = Montserrat({ subsets: ["latin"] });

export default function PitchComponent() {
  return (
    <div className="pitchContainer">
      <h1>Elevator Pitch</h1>
      <p>
        In an era where AI voice cloning can turn a content creators asset into a
        vulnerability, VocalShield emerges as a beacon of protection. Designed
        for creators streaming on YouTube, podcasting on Spotify, or engaging
        audiences on Twitch, VocalShield employs advanced voice data alteration
        techniques to intricately modify your unique voice imprint. This ensures
        your voice remains authentic and unmistakably yours, all while shielding
        it from unauthorized cloning and misuse. With VocalShield, content
        creators can focus on crafting impactful stories and building
        connections, secure in the knowledge that their vocal identity is
        safeguarded across any platform. It's not just about protection; it's
        about empowering creators with the confidence to share their voices with
        the world, knowing their digital footprint is secure.
      </p>
    </div>
  );
}