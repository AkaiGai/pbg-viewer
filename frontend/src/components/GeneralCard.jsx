
const GeneralCard = ({list}) => {

  return(
    <div className="flex justify-center items-center w-full h-45 px-4 rounded-md">
      <div className="flex flex-col justify-center p-4 gap-4 h-full
    bg-coat font-light rounded-md border border-sheen/20">
      <div className="flex items-end
      gap-4">
        <img className="h-10" src={list.image}/>
        <h2>{list.title}</h2>
      </div>
      <p className="text-sm text-sheen">{list.description}</p>
      <p className="text-sm text-sheen font-bold">Drag and Drop, or 
        <span className="text-secondary-600 font-light"> Select a file</span>
      </p>
    </div>
    </div>
    
  )

}

export default GeneralCard;