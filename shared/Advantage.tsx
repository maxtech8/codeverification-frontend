const Advantage = ({ list, i }) => {
  return (
    <div className="flex justify-start gap-[20px] py-3">
      {/* <div className="col-span-1"> */}
      <p
        className="font-space_grotesk font-500 text-white 
            text-lg md:text-2xl
            flex gap-[10px] md:gap-[30px]"
      >
        <span>0{i + 1}</span>
      </p>
      {/* </div> */}
      <div className="flex flex-col gap-[5px] ">
        <p
          className="font-space_grotesk font-500 text-white 
            text-lg md:text-2xl leading-[100%]
            flex gap-[10px] md:gap-[30px]"
        >
          {list.title}
        </p>
        <p
          className="w-full overflow-hidden font-poppins font-400 text-white 
            text-xs md:text-base"
        >
          {list.detail}
        </p>
      </div>
    </div>
  )
}

export default Advantage
