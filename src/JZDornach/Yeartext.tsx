import { ReactChild } from "react"
import "./style.css"

export const Yeartext: React.FC<{
  children: ReactChild | ReactChild[]
  scripture: String
}> = ({ children, scripture }) => (
  <div className="text-3xl">
    <strong className="font-semibold">{children}</strong>
    <br />({scripture})
  </div>
)
