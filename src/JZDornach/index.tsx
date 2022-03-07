import { ProgressBar } from "./ProgressBar"
import { Title } from "./Title"
import { Yeartext } from "./Yeartext"
import { Message } from "./Message"
import {
  useVideoConfig,
  Img,
  Sequence,
  useCurrentFrame,
  interpolate,
  Easing,
} from "remotion"
import kingdomHall from "./kingdom-hall.jpg"
import "./style.css"

export const JZDornach: React.FC = () => {
  const frame = useCurrentFrame()
  const { width, durationInFrames, fps } = useVideoConfig()
  const zoomScale = interpolate(frame, [0, durationInFrames], [1.2, 1.0])
  const fadeToBlackOpacity = interpolate(
    frame,
    [durationInFrames - 20, durationInFrames],
    [0, 1],
    {
      easing: Easing.out(Easing.quad),
    }
  )
  const fadeInOpacity = interpolate(frame, [0, 10], [0, 1])

  return (
    <div className="flex-1 h-full text-gray-800 bg-blue-jw">
      <Img
        src={kingdomHall}
        className="absolute z-0"
        style={{ transform: `scale(${zoomScale})` }}
      />

      <div
        className="absolute h-full"
        style={{
          width: `${width - Math.round(width / 1.61803)}px`,
          backgroundImage: `linear-gradient(to right, rgba(255,255,255,1) 95%, rgba(255,255,255,0))`,
        }}
      >
        <div
          className="z-10 flex flex-col justify-between h-full p-16 pb-24"
          style={{ opacity: fadeInOpacity }}
        >
          <Title>
            Versammlung
            <br />
            Linz-Dornach
          </Title>

          <Sequence from={fps * 3} durationInFrames={fps * 20} layout="none">
            <Message>
              Liebe
              <br />
              Brüder und Schwestern,
              <br />
              unsere Zusammenkunft beginnt in Kürze.
            </Message>
          </Sequence>

          <Sequence from={fps * 28} durationInFrames={fps * 20} layout="none">
            <Message>Die Stummschaltung erfolgt jetzt.</Message>
          </Sequence>

          <Yeartext scripture="Psalm 34:10">
            "Wer Jehova sucht,
            <br />
            dem fehlt es nicht
            <br />
            an Gutem"
          </Yeartext>
        </div>
      </div>

      <div className="absolute bottom-0 z-20">
        <ProgressBar />
      </div>

      <div
        className="absolute z-50 w-full h-full bg-black"
        style={{ opacity: fadeToBlackOpacity }}
      ></div>
    </div>
  )
}
