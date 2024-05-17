import Link from "next/link"

const DesktopMenu = () => (
  <div>
    <div className="flex m-auto gap-[30px] xl:gap-[45px]">
      <Link href="/#">
        <div className="cursor-pointer text-[16px] leading-[30px] text-white">Free number</div>
      </Link>
      <Link href="/#">
        <div className="cursor-pointer text-[16px] leading-[30px] text-white">Temporary</div>
      </Link>
      <Link href="/#">
        <div className="cursor-pointer text-[16px] leading-[30px] text-white">Price</div>
      </Link>
      <Link href="/#">
        <div className="cursor-pointer text-[16px] leading-[30px] text-white">API</div>
      </Link>
      <Link href="/#">
        <div className="cursor-pointer text-[16px] leading-[30px] text-white">Instruction</div>
      </Link>
    </div>
  </div>
)

export default DesktopMenu
