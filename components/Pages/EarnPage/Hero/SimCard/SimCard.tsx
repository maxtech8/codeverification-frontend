import FadeInWhenVisible from "@/components/FadeInWhenVisible"

const SimCard = () => (
  <FadeInWhenVisible className="py-5 mt-[100px]">
    <button
      type="button"
      className="font-Jost font-bold text-xs md:text-sm p-[10px] rounded-[25px] h-[30px] 
      bg-[white] text-black flex items-center
      transition duration-[300ms] hover:scale-[1.1]"
    >
      THEY TRUST US
    </button>

    <FadeInWhenVisible className="w-[300px] 3md:w-[600px] xl:w-full flex flex-col mt-[30px]">
      <p
        className="font-space_grotesk font-500 text-[26px] 3md:text-[36px] mb-4
                    text-white text-center md:text-left"
      >
        How SIM cards are monetized
      </p>
      <div className="w-full mt-[10px]">
        <p
          className="font-poppins font-[400] text-sm md:text-base 
                    text-white mx-auto"
        >
          {`Users around the world are looking for a way to register additional accounts for social networks, \n
           marketplaces and other services. The SMSHUB portal finds SIM card owners who want to earn \n
            money and ensures that the code from the SMS is transferred from the provider to the user. Thus, \n
             each owner has ways to monetize mobile traffic through SIM cards. Read how to make money \n 
             on SIM cards and how to start.`}
        </p>
      </div>
    </FadeInWhenVisible>
    <FadeInWhenVisible className="w-[300px] 3md:w-[600px] xl:w-full flex flex-col mt-[30px]">
      <p
        className="font-space_grotesk font-500 text-[26px] 3md:text-[36px] mb-4
                    text-white text-center md:text-left"
      >
        What you need to start earning
      </p>
      <div className="w-full mt-[10px]">
        <p
          className="font-poppins font-[400] text-sm md:text-base 
                    text-white mx-auto mb-3"
        >
          To start work you will need:
        </p>
        <div className="w-full flex jsutify-start py-2">
          <p className="text-sm md:text-base text-blue_2 px-2 transfrom translate-y-[-3px]">•</p>

          <p
            className="font-poppins font-[400] text-sm md:text-base leading-[20px]
                    text-white mx-auto"
          >
            At least 256 sim cards: the more you have, the higher your income will be at the very
            beginning;
          </p>
        </div>
        <div className="w-full flex jsutify-start py-2">
          <p className="text-sm md:text-base text-blue_2 px-2 transfrom translate-y-[-3px]">•</p>

          <p
            className="font-poppins font-[400] text-sm md:text-base leading-[20px]
                    text-white mx-auto"
          >
            GSM-modem with 8+ ports or GOIP: SMSHUB manager will suggest reliable sellers offering
            fair prices;
          </p>
        </div>
        <div className="w-full flex jsutify-start py-2">
          <span className="text-sm md:text-base text-blue_2 px-2 transfrom translate-y-[-3px]">
            •
          </span>

          <p
            className="font-poppins font-[400] text-sm md:text-base leading-[20px]
                    text-white text-left md:text-center"
          >
            PC and stable internet connection.
          </p>
        </div>
      </div>
    </FadeInWhenVisible>
  </FadeInWhenVisible>
)

export default SimCard
