import { Composition } from 'remotion'
import { MyComposition } from './Composition'

const fps = 30
const durationInFrames = fps * 60

export const RemotionVideo: React.FC = () => {
  return (
    <>
      <Composition
        id='JZ-Dornach'
        component={MyComposition}
        durationInFrames={durationInFrames}
        fps={fps}
        width={1280}
        height={720}
      />
    </>
  )
}
