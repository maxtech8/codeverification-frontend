import Link from "next/link"
import GradientSpan from "@/components/GradientSpan"

const LoginButton = () => (
  <GradientSpan
    className="w-[125px] h-[60px] 
    flex items-center justify-center 
    rounded-[12px] bg-gradient_b_overlay_1 
    text-white cursor-pointer
    transition duration-[300ms] hover:scale-[1.1]"
  >
    <span className="w-[123px] h-[58px] bg-black rounded-[12px] flex justify-center items-center">
      <Link href="/login">LOG IN</Link>
    </span>
  </GradientSpan>
)

export default LoginButton
