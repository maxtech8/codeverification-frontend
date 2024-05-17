import questions from "./question.json"
import FadeInWhenVisible from "@/components/FadeInWhenVisible"
import Question from "@/shared/Question"

const FAQDesktop = () => (
  <div className="w-[290px] md:w-full flex flex-col justify-start mt-[200px] 3md:mt-[150px] ">
    <FadeInWhenVisible>
      <button
        type="button"
        className="flex items-center justify-center
            font-jost font-bold text-black
            text-[14px] p-[10px] rounded-[25px] w-[180px] h-[30px] bg-[white] mb-[50px]
            transition duration-[300ms] hover:scale-[1.1]"
      >
        FAQ
      </button>
      <p
        className="font-space_grotesk font-500 text-white pb-[50px]
          text-xl md:text-[36px] leading-[130%] border-b-2 border-gray_1"
      >
        Frequently asked questions
      </p>
    </FadeInWhenVisible>
    {questions.map((question, i) => (
      // eslint-disable-next-line react/no-array-index-key
      <FadeInWhenVisible key={i}>
        <Question data={question} />
      </FadeInWhenVisible>
    ))}
  </div>
)

export default FAQDesktop
