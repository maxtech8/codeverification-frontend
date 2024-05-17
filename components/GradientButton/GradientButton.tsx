import GradientSpan from "../GradientSpan"

const GradientButton = ({ children, containerClasses = "" }) => (
  <GradientSpan
    className={`px-[30px] h-[60px] 
      flex items-center justify-center 
      rounded-[12px] text-white cursor-pointer 
      transition duration-[300ms] hover:scale-[1.1] ${containerClasses}`}
  >
    {children}
  </GradientSpan>
)

export default GradientButton
