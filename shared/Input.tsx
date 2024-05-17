const Input = ({ onChange, className = "", placeholder, type = "" }) => {
  return (
    <input
      className={`w-full h-[30px] md:w-[300px] xl:w-[400px] 2xl:w-[462px] xl-[50px] 2xl:h-[55px] 
            rounded-full bg-purple_4 opacity p-[20px]
            !outline-none !border-none !ring-0
            placeholder:text-white text-white ${className}`}
      placeholder={placeholder ? placeholder : ""}
      type={type ? type : "text"}
      onChange={onChange}
    />
  )
}
export default Input
