import { useRouter } from "next/router"
import GradientSpan from "@/components/GradientSpan"
import setCookie from "@/lib/setCookie"

const LogOutButton = () => {
  const router = useRouter()
  const handleClick = () => {
    setCookie("token", "")
    router.push("/")
  }
  return (
    <GradientSpan
      className="w-[125px] h-[60px] 
    flex items-center justify-center 
    rounded-[12px] bg-gradient_b_overlay_1 
    text-white cursor-pointer
    transition duration-[300ms] hover:scale-[1.1]"
    >
      <button
        type="button"
        onClick={handleClick}
        className="
    w-[123px] h-[58px] bg-black 
    rounded-[12px] flex justify-center 
    items-center"
      >
        Log Out
      </button>
    </GradientSpan>
  )
}

export default LogOutButton
