const GradientText = ({ className = "", children }) => (
  <span
    className={`bg-gradient_p_1
        bg-clip-text	text-[#00000000] overflow-visible
        ${className}`}
  >
    {children}
  </span>
)

export default GradientText
