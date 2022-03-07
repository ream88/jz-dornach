import { Composition } from "remotion"
import { JZDornach } from "./JZDornach"

const fps = 30
const durationInSeconds = 60

export const RemotionVideo: React.FC = () => {
  return (
    <Composition
      id="JZ-Dornach"
      component={JZDornach}
      durationInFrames={fps * durationInSeconds}
      fps={fps}
      width={1280}
      height={720}
    />
  )
}
