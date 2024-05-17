import { useMediaQuery } from "usehooks-ts"
import Link from "next/link"
import AuthButtons from "@/components/AuthButtons"
import Logo from "./Logo"
import useIsMobile from "@/hooks/useIsMobile"
import MobileMenu from "../MobileMenu"
import DesktopMenu from "../DesktopMenu"

const Header = () => {
  const isMacbook = useMediaQuery("(max-width: 1060px)")
  const isMobile = useIsMobile()
  return (
    <div className="bg-black flex justify-between items-center px-4">
      <Link href="/">
        <div>
          <Logo />
        </div>
      </Link>
      <div className="flex gap-[80px] items-center">
        {isMacbook ? <MobileMenu /> : <DesktopMenu />}
        {!isMobile && <AuthButtons />}
      </div>
    </div>
  )
}

export default Header
