import { useState } from "react"
import Icon from "@/shared/Icon"
import FadeInWhenVisible from "@/components/FadeInWhenVisible"

const SearchService = () => {
  const [text, setText] = useState("")
  return (
    <FadeInWhenVisible
      className="flex items-center bg-[#282828] rounded-[10px] 
               overflow-hidden mt-5"
    >
      <Icon name="Search" size={16} className="ml-[10px] text-[white]" />
      <input
        className="bg-[transparent] flex-grow outline-none 
          border-none text-[white]
                focus:!outline-none focus:border-none"
        placeholder="Find a Service"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </FadeInWhenVisible>
  )
}

export default SearchService
