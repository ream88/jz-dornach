import { ReactChild } from "react"
import { interpolate, useCurrentFrame, useVideoConfig } from "remotion"

export const Message: React.FC<{ children: ReactChild | ReactChild[] }> = ({
  children,
}) => {
  const frame = useCurrentFrame()
  const { durationInFrames } = useVideoConfig()

  const opacity = interpolate(
    frame,
    [0, 20, durationInFrames - 20, durationInFrames],
    [0, 1, 1, 0]
  )

  return (
    <div className="text-3xl" style={{ opacity: opacity }}>
      {children}
    </div>
  )
}
