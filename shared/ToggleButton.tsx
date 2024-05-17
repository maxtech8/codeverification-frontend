import { FC, ReactNode, useState, useEffect } from "react"
interface ToggleButtonProps {
  id: string
  onClick?: () => void
  children?: ReactNode
  value?: boolean
}
const ToggleButton: FC<ToggleButtonProps> = ({ onClick, value }) => {
  const [isToggle, setIsToggle] = useState(false)

  useEffect(() => {
    setIsToggle(value)
  }, [value])

  return (
    <div className="flex justify-center w-[32px] h-[18px] cursor-pointer">
      <div
        className={`flex items-center dark:bg-[white] bg-gradient_b_overlay_1 rounded-full w-full h-full pl-2`}
        onClick={onClick}
      >
        <div
          className={`${isToggle ? "translate-x-[calc(100%-5px)]" : "translate-x-[-5px]"} 
                        bg-[black]
                        bg-[white] w-[14px] h-[14px] rounded-full 
                        transition duration-[300ms] ease-[cubic-bezier(0.68,-0.55,0.265,1.55)]`}
        />
      </div>
    </div>
  )
}

export default ToggleButton
