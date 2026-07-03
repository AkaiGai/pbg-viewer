
const GeneralButton = ({value, func}) => {

  return(
      <button className="px-3 py-1
        rounded-full
        font-abstract text-sm
        bg-secondary-600 hover:bg-secondary-500
        cursor-pointer
        hover:scale-105 active:scale-90 transition-all duration-150"
        onClick={func}>
        {value}
      </button>
  )

};

export default GeneralButton;        
