import { useState } from "react"
import MenuList from "./MenuList"

const MobileMenu = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false)

  return (
    <div className="w-full flex justify-between items-center cursor-pointer">
      <button
        type="button"
        onClick={() => setIsOpenMenu(!isOpenMenu)}
        aria-label="Toggle Menu"
        className="flex flex-col justify-center items-center space-y-[5px] w-[50px] h-[40px] rounded-lg cursor-pointer"
      >
        <hr className="w-[19px] h-0.5 border-[1.25px] border-white bg-none" />
        <hr className="w-[19px] h-0.5 border-[1.25px] border-white" />
        <hr className="w-[19px] h-0.5 border-[1.25px] border-white" />
      </button>
      {isOpenMenu && <MenuList />}
    </div>
  )
}

export default MobileMenu
