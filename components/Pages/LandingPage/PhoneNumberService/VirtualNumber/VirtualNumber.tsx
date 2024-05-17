import FadeInWhenVisible from "@/components/FadeInWhenVisible"
import Media from "@/shared/Media"

const VirtualNumber = () => (
  <FadeInWhenVisible>
    <button
      type="button"
      className="font-Jost font-bold text-xs md:text-sm p-[10px] rounded-[25px] h-[30px] 
      bg-[white] text-black flex items-center
      transition duration-[300ms] hover:scale-[1.1]"
    >
      THEY TRUST US
    </button>
    <div className="w-[300px] 3md:w-[600px] xl:w-full flex flex-col mt-[30px]">
      <p className="font-space_grotesk font-500 text-xl 3md:text-3xl xl:text-4xl text-center 3md:text-left 3md:text-[36px] text-white">
        SMS Verification with a Virtual Number
      </p>
      <div className="grid grid-cols-1 3md:grid-cols-7 xl:grid-cols-12 w-full mt-[10px] md:mt-[30px]">
        <div className="col-span-7">
          <p className="mt-[30px] font-Poppins font-[400] text-sm md:text-base leading-[130%] text-white">
            {`Hendrerit quisque lacus ut amet euismod commodo \n
            maecenas aliquam. Imperdiet cursus aliquet cras dui \n
            maecenas orci consequat montes urna. Mauris arcu urna \n
            sit sed pharetra arcu fermentum tortor quis. Aliquam \n
            blandit ac neque felis donec justo velit vestibulum. Ut \n
            accumsan id est facilisis morbi varius amet malesuada. \n
            \n Nulla interdum sed facilisis scelerisque pellentesque. \n
            Accumsan lobortis platea eu pretium. Molestie lobortis ut \n
            aliquam tincidunt. Vitae elit consectetur eget in. Dolor ut ac \n
            adipiscing lorem dapibus elit sagittis vitae feugiat. Quisque \n
            nibh vitae nunc lorem aliquam dictum amet sed.`}
          </p>
        </div>
        <div className="col-span-5">
          <Media
            link="/images/landing/virtual_phone.svg"
            blurLink="/images/landing/virtual_phone.png"
            containerClasses="w-[250px] mt-[50px] 3md:w-full mx-auto aspect-[300/350]"
          />
        </div>
      </div>
    </div>
    <div className="w-[300px] 3md:w-[600px] xl:w-full flex flex-col">
      <p
        className="font-space_grotesk font-500 text-[26px] 3md:text-[36px] mb-4
                    text-white text-center md:text-left"
      >
        Virtual Numbers
      </p>
      <div className="w-full mt-[10px]">
        <p
          className="font-Poppins font-[400] text-sm md:text-base 
                    text-white mx-auto"
        >
          {`Nisi enim consequat nibh sagittis dictum euismod enim vulputate eleifend. Orci convallis{" "}
          \n
          non mattis habitasse tristique eget. Tempor non gravida pellentesque pretium quis tellus
          magna \n
          ornare. Sed lacus morbi pharetra vitae semper eu eget. Quis ac etiam sagittis nunc.
          Habitant \n
          volutpat id sed purus. \n
          \n
          If you use or develop software for auto-registrations, you can request the API and
          integrate SMS- \n
          Activate into your software.`}
        </p>
      </div>
    </div>
  </FadeInWhenVisible>
)

export default VirtualNumber
