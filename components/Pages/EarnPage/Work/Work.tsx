import FadeInWhenVisible from "@/components/FadeInWhenVisible"
import Media from "@/shared/Media"
import lists from "./lists.json"
import Card from "./Card"

const Work = () => (
  <FadeInWhenVisible className="py-5 mt-[100px]">
    <button
      type="button"
      className="font-Jost font-bold text-xs md:text-sm p-[10px] rounded-[25px] h-[30px] 
      bg-[white] text-black flex items-center
      transition duration-[300ms] hover:scale-[1.1]"
    >
      HOW IT WORKS
    </button>
    <FadeInWhenVisible className="w-[300px] 3md:w-[600px] xl:w-full flex flex-col mt-[30px]">
      <p
        className="font-space_grotesk font-500 text-2xl 3md:text-3xl md:text-4xl mb-4
                    text-white text-center md:text-left"
      >
        How to start earning on SIM cards <br /> in just 3 steps!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3">
        <div className="col-span-2 flex justify-start item-center gap-[20px]">
          <div className="w-full flex flex-col justify-start items-start gap-[30px]">
            {lists.map((list, i) => (
              // eslint-disable-next-line react/no-array-index-key
              <Card data={list} i={i + 1} key={i} />
            ))}
          </div>
        </div>
        <div className="col-span-1 m-auto">
          <Media
            link="/images/earn/convert.svg"
            blurLink="/images/earn/convert.png"
            containerClasses="w-[300px] aspect-[327/345] rounded-full"
          />
        </div>
      </div>

      <div className="w-full mt-[10px]" />
    </FadeInWhenVisible>
    <FadeInWhenVisible className="w-[300px] 3md:w-[600px] xl:w-full flex flex-col mt-[100px]">
      <p
        className="font-space_grotesk font-500 text-[20px] 3md:text-[36px] mb-4
                    text-white text-center md:text-left"
      >
        How much you will earn: investments in SIM cards and their profitability
      </p>
      <div className="w-full mt-[10px] flex flex-col jsutify-start items-start gap-[20px]">
        <p
          className="font-poppins font-[400] text-sm md:text-base 
                    text-white mx-auto"
        >
          {`One card can eran up to 600 rubles per day, and the average partner's income per month is 
          173,847 rubles. But to ensure flowless earnings, the quantity of cards must be regularly renewed. 
          Many services provide the possibility of resale, but after a certain period of time passes. Clients 
          should not get into a situation when there is a number which has already been used for an 
          account registration.`}
        </p>
        <p
          className="font-poppins font-[400] text-sm md:text-base 
                    text-white mx-auto"
        >
          {`Number prices depend on the country of the card and the services for which the number will be 
          purchased. Current list of the most popular countries and services is always available in SMSHUB
           and SMS-Activate. SMSHUB provides the possibility of price increase, for example, during periods 
           of number shortage on the market.`}
        </p>
      </div>
    </FadeInWhenVisible>
  </FadeInWhenVisible>
)

export default Work
