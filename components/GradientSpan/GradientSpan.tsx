import { twMerge } from "tailwind-merge"

type GradientSpanProps = {
  className?: string
  children: React.ReactNode
}

const GradientSpan = ({ className = " ", children }: GradientSpanProps) => (
  <span className={twMerge("bg-gradient_b_overlay_1 overflow-visible py-[10px]", className)}>
    {children}
  </span>
)

export default GradientSpan
