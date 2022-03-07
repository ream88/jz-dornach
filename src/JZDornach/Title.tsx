import { ReactChild } from "react"
import "./style.css"

export const Title: React.FC<{ children: ReactChild | ReactChild[] }> = ({
  children,
}) => {
  return (
    <div
      className="text-5xl font-semibold text-blue-jw"
      style={{ fontVariantCaps: "small-caps" }}
    >
      {children}
    </div>
  )
}
