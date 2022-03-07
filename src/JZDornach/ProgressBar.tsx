import { useCurrentFrame, useVideoConfig, interpolate } from "remotion"

export const ProgressBar = () => {
  const frame = useCurrentFrame()
  const { durationInFrames, width } = useVideoConfig()

  return (
    <div
      className="h-8 bg-blue-jw"
      style={{
        width: `${interpolate(frame, [0, durationInFrames], [0, width])}px`,
      }}
    />
  )
}
