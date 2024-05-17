import { FC, ReactNode, useState } from "react"
import { motion } from "framer-motion"

interface AccordionProps {
  className?: string
  questionClassName?: string
  contentClassname?: string
  question: ReactNode
  content: ReactNode
  expandIcon: ReactNode
  hideIcon: ReactNode
}

const Accordion: FC<AccordionProps> = ({
  className,
  questionClassName,
  contentClassname,
  question,
  content,
  expandIcon,
  hideIcon,
}) => {
  const [isExpaned, setIsExpanded] = useState(false)

  return (
    <div className={`${className || ""}`} data-aos="fade-up">
      <div className="w-full flex justify-between items-center md:items-start">
        <p className={`${questionClassName || ""}`}>{question}</p>
        <button type="button" onClick={() => setIsExpanded(!isExpaned)}>
          {isExpaned ? hideIcon : expandIcon}
        </button>
      </div>
      {isExpaned && (
        <motion.div
          animate={{
            height: isExpaned ? "auto" : "0px",
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
            className="pt-[24px] md:pt-[32px] leading-[1.5]
                  font-radikal_light text-[16px]
                  text-white"
            animate={{
              opacity: isExpaned ? 1 : 0,
            }}
            initial={{
              opacity: isExpaned ? 0 : 1,
            }}
            transition={{
              delay: isExpaned ? 0.5 : 0,
              duration: 0.5,
            }}
          >
            {content}
          </motion.p>
        </motion.div>
      )}
    </div>
  )
}

export default Accordion
