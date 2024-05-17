import { FC, ReactNode } from "react"
import Corner from "./Corner"
import styles from "./Button.module.css"

interface ButtonProps {
  id?: string
  refP?: Element
  children?: ReactNode
  className?: string
  type?: "button" | "submit" | "reset" | undefined
  pulseColor?: string
  onClick?: (e: any) => void
  disabled?: boolean
}

const Button: FC<ButtonProps> = ({
  id,
  refP,
  children,
  pulseColor,
  className,
  onClick,
  disabled,
  ...rest
}) => {
  return (
    <button
      {...(id && { id })}
      type="button"
      className={`transition duration-[50ms]
          text-[white] overflow-hidden relative
          active:bg-[#0d5a6d] bg-[#1aa3c3] rounded-[5px] 
          pb-[4px] pr-[2px] border-[2px] border-[#121212]
          ${disabled ? "cursor-not-allowed" : ""}`}
      onClick={onClick}
      disabled={disabled}
      {...rest}
    >
      <div
        className={`active:shadow-none shadow-[3px_8px_10px_10px_#0d5161]
      flex items-center justify-center ${className} ${styles.buttonCss}`}
      >
        <div className="absolute left-[4px] top-[4px]">
          <Corner />
        </div>
        <div className="absolute right-[5px] top-[4px]">
          <Corner className="rotate-[90deg]" />
        </div>
        <div className="absolute left-[4px] bottom-[7px]">
          <Corner className="rotate-[270deg]" />
        </div>
        <div className="absolute right-[5px] bottom-[7px]">
          <Corner className="rotate-[180deg]" />
        </div>
        {children}
      </div>
    </button>
  )
}

export default Button
