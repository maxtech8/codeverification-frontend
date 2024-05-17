const Corner = ({ className = "" }) => {
  return (
    <div className={`${className}`}>
      <div className="flex">
        <div className="w-[2px] aspect-[1/1]" />
        <div className="corner w-[2px] aspect-[1/1] bg-[#0d5a6d]" />
        <div className="w-[2px] aspect-[1/1]" />
        <div className="corner w-[2px] aspect-[1/1] bg-[#0d5a6d]" />
      </div>
      <div className="flex">
        <div className="corner w-[2px] aspect-[1/1] bg-[#0d5a6d]" />
        <div className="corner w-[2px] aspect-[1/1] bg-[#0d5a6d]" />
      </div>
      <div className="pt-[2px]">
        <div className="corner w-[2px] aspect-[1/1] bg-[#0d5a6d]" />
      </div>
    </div>
  )
}

export default Corner
