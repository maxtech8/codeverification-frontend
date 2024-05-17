import { motion } from "framer-motion"
import { useState } from "react"
import Media from "@/shared/Media"

const Question = ({ data }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div
      className="border-b border-b-igray w-full
        flex justify-center"
    >
      <div className="w-full px-4 md:px-0">
        <div className="flex items-center border-y-[2px] border-gray_1 justify-between py-2 md:py-5 text-base md:!text-lg md:!text-[27px] ">
          <button
            type="button"
            className="w-full mrounded-[10px] p-4 text-left text-white text-sm md:text-[18px] leading-[120%]"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {data.title}
          </button>
          <motion.button
            onClick={() => setIsExpanded(!isExpanded)}
            animate={{
              rotate: isExpanded ? "180deg" : "0deg",
            }}
            initial={{
              rotate: isExpanded ? "0deg" : "180deg",
            }}
            transition={{
              duration: 0.25,
            }}
          >
            <Media
              link="/images/landing/up.png"
              blurLink="/images/landing/up.png"
              containerClasses="w-[20px] md:w-[30px] aspect-[20/12] rounded-full"
            />
          </motion.button>
        </div>
        <motion.div
          animate={{
            height: isExpanded ? "auto" : "0px",
          }}
          initial={{
            height: "0px",
          }}
          transition={{
            duration: 0.5,
          }}
          className="overflow-hidden h-fit"
        >
          <motion.p
            className="py-[16px] md:py-[24px]  md:pb-6 leading-[1.5]
                    font-radikal_light text-sm md:text-[16px]
                    text-white"
            animate={{
              opacity: isExpanded ? 1 : 0,
            }}
            initial={{
              opacity: isExpanded ? 0 : 1,
            }}
            transition={{
              delay: isExpanded ? 0.5 : 0,
              duration: 0.5,
            }}
          >
            {data.answer}
          </motion.p>
        </motion.div>
      </div>
    </div>
  )
}

export default Question
