const Card = ({ number, description }) => (
  <div
    className="bg-[url('/images/landing/step_card.png')]
          w-[100px] md:w-[250px] aspect-[250/140]"
  >
    <p className="text-white font-Poppins font-[600] leading-full md:leading-[75px] text-xl md:text-[50px] text-center">
      {number}
    </p>
    <p className="text-white font-400 text-[8px] md:text-[18px] text-center font-Poppins">
      {description}
    </p>
  </div>
)

export default Card
