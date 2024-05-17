import Link from "next/link"
/* eslint-disable */
const CTASecton = () => (
  <div className="text-white flex gap-[25px] font-poppins">
    <Link href="/affiliate">
      <div className="text-[14px] leading-[1] cursor-pointer">Affiliatve program</div>
    </Link>
    <Link href="/earn">
      <div className="text-[14px] leading-[1] cursor-pointer">Earn on SIM cards</div>
    </Link>
    <Link href="#">
      <div className="text-[14px] leading-[1] cursor-pointer">Making money on accounts</div>
    </Link>
    <Link href="#">
      <div className="text-[14px] leading-[1] cursor-pointer">Blog</div>
    </Link>
    <Link href="#">
      <div className="text-[14px] leading-[1] cursor-pointer">Apps</div>
    </Link>
    <Link href="#">
      <div className="text-[14px] leading-[1] cursor-pointer">Software</div>
    </Link>
    <Link href="#">
      <div className="text-[14px] leading-[1] cursor-pointer">Contacts</div>
    </Link>
    <Link href="#">
      <div className="text-[14px] leading-[1] cursor-pointer">FAQ</div>
    </Link>
  </div>
)

export default CTASecton
