import { motion } from "framer-motion"
import Link from "next/link"

const MenuList = () => (
  <div className="w-screen h-screen fixed left-0 top-[40px] 3md:top-[115px] z-[2] bg-[rgba(0,0,0,.5)]">
    <motion.div
      className="w-full h-[calc(100vh-40px)] bg-white text-[16px] font-radikal_light text-black cursor-pointer overflow-y-auto
          shadow-[0_0_1rem_rgba(0,0,0,.2)]"
      initial={{
        x: "100%",
      }}
      animate={{
        x: "0%",
      }}
      exit={{
        x: "0%",
      }}
      transition={{
        duration: 0.2,
      }}
    >
      <Link href="/try-it-on">
        <div className="px-[32px] py-[20px] border-b border-b-gray">Wallet</div>
      </Link>
      <Link href="/inspiration">
        <div className="px-[32px] py-[20px] border-b border-b-gray">Exchange</div>
      </Link>
      <Link href="/blog">
        <div className="px-[32px] py-[20px] border-b border-b-gray">Explorer</div>
      </Link>
      <Link href="/whyus">
        <div className="px-[32px] py-[20px] border-b border-b-gray">Log in</div>
      </Link>
      <Link href="/faq">
        <div className="px-[32px] py-[20px] border-b border-b-gray">Sign Up</div>
      </Link>
      <Link href="/contact">
        <div className="px-[32px] py-[20px] border-b border-b-gray">Connect</div>
      </Link>
    </motion.div>
  </div>
)

export default MenuList
