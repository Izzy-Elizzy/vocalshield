import { Montserrat } from "next/font/google";

const mont = Montserrat({ subsets: ["latin"] });

export default function AppendixComponent() {
  return (
    <div className="appendix-container">
      <h1>Glossary</h1>
      <p>
        TBD
      </p>
      <h1>References</h1>
      <p>
        Burgess, Matt. "Voice Recognition Privacy & Speech Changer." Wired, 1
        June 2022, https://www.wired.com/story/voice-recognition-privacy-speech-changer/.<br />
        McAfee Corp. "McAfee Unveils Advanced Deepfake Audio Detection
        Technology at CES 2024 to Defend Against Rise in AI-Generated Scams and
        Disinformation." McAfee Newsroom, 8 Jan. 2024,
        https://www.mcafee.com/zh-tw/consumer-corporate/newsroom/press-releases/press-release.html?news_id=509b05a3-65e9-46d4-9f17-2dbc606e111a&csrc=vanity&offerid=403203.<br />
        Hong, Tan Jian. "Uncovering the Real Voice: How to Detect and Verify
        Audio Deepfakes." Medium, 14 Nov. 2023,
        https://medium.com/htx-s-s-coe/uncovering-the-real-voice-how-to-detect-and-verify-audio-deepfakes-42e480d3f431.
      </p>
    </div>
  );
}