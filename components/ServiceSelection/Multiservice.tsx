import { useState } from "react"
import ToggleButton from "@/shared/ToggleButton"
import FadeInWhenVisible from "@/components/FadeInWhenVisible"

const Multiservice = () => {
  const [isMutiservice, setIsMultiservice] = useState(false)
  const onToggle = () => {
    setIsMultiservice(!isMutiservice)
  }
  return (
    <FadeInWhenVisible className="flex items-center mt-[30px]">
      <div className="flex gap-[10px] items-center">
        <p className="text-white text-[18px] font-Poppins font-[400]">Mutiservice</p>
        <ToggleButton onClick={onToggle} value={isMutiservice} id="multiservice-switch" />
      </div>
    </FadeInWhenVisible>
  )
}

export default Multiservice
