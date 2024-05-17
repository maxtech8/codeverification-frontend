import Media from "@/shared/Media"

const ServiceButton = ({ data }) => (
  <button
    type="button"
    className="w-full aspect-[1/1] 3md:w-full 3md:aspect-[2/1]
    flex flex-col justify-center items-center gap-[10px]
    padding-[12px] rounded-[12px] mb-[6px] 3md:mb-[10px]
    bg-gradient_black_4 
    transition duration-[300ms] hover:scale-[1.1]
    "
  >
    <Media link={data.link} blurLink={data.bluelink} containerClasses="w-[30px] aspect-[31/30]" />
    <p className="font-poppins text-[14px] 3md:text-[18px] text-[400] leading-[100%] text-white">
      {data.title}
    </p>
  </button>
)

export default ServiceButton
