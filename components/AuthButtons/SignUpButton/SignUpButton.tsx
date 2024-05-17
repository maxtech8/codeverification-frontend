import Link from "next/link"
import GradientButton from "@/components/GradientButton"

const SignUpButton = () => (
  <GradientButton
    containerClasses="w-[125px] h-[60px] 
        flex items-center justify-center 
        rounded-[12px] bg-gradient_b_overlay_1 
        text-white cursor-pointer"
  >
    <Link href="/signup">Sign Up</Link>
  </GradientButton>
)
export default SignUpButton
