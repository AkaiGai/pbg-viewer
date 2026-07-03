import * as Asset from '../assets/asset.js'
import RecentCard from './RecentCard.jsx'


const RecentSection = ({cardData}) => {

  const iconStyle = 'w-8 hover:scale-125 duration-150'; 

  const renderSection = () => {
    if(cardData){
      return(

        <div>

          <nav className="pb-4">
            <ul className="flex px-24 gap-24 items-center
            font-secondary font-medium">
              <li className="w-12">Name</li>
              <li className="ml-auto w-12">Opened</li>
              <li className="w-12">Size</li>
            </ul>
          </nav>

          <RecentCard cardData={cardData} />

        </div>
      )
    }
    else{
      return(
        <div className="flex justify-center items-center
        p-4 gap-4
        h-72 w-full rounded-xl
        bg-core">
          <button className="flex flex-col gap-1
          cursor-pointer hover:scale-105 duration-150">
            <img className="h-32" src={Asset.addFileIconNeon}/>
            <h3 className="font-extralight text-md">Select a
              <span className="text-secondary-500"> file</span></h3>
          </button>
          
        </div>
      )
    }
  }
  return renderSection();
    
};

export default RecentSection;