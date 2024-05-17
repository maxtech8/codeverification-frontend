import FadeInWhenVisible from "@/components/FadeInWhenVisible"
import Media from "@/shared/Media"

const Card = ({ data, i }) => (
  <FadeInWhenVisible className="w-full grid grid-cols-1 md:grid-cols-5 justify-start items-center gap-[20px]">
    <div className="w-[100px] col-span-1 mx-auto text-white relative flex justify-center text-[50px] font-poppins items-center">
      <Media
        link={`/images/earn/step${i}.svg`}
        blurLink={`/images/earn/step${i}.svg`}
        containerClasses="w-[100px] aspect-[1/1] rounded-full"
      />
      <div className="absolute bottom-0 left-[25px] md:left-[50px]" />
    </div>
    <div className="col-span-4 flex justify-center items-center font-poppins text-base text-white">
      <p className="font-poppins text-base leadint-[100%]">{data.answer}</p>
    </div>
  </FadeInWhenVisible>
)

export default Card
