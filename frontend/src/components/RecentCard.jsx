import { IoIosStarOutline } from "react-icons/io";
import { IoLinkOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";

const RecentCard = ({cardData = []}) => {

  const iconStyle = 'w-8 hover:scale-125 duration-150';

  return(
    <>
    {
      cardData.map((card, index) => {
        return(
          <div key={index}>
            <div className="flex items-center pl-6 pr-24 gap-6
            w-full h-20 rounded-sm bg-core border border-sheen/25
            hover:bg-coat group
            font-abstract font-extralight">
              <img className="w-12" src={card.image}/>
              <div>
                <p className="font-normal">{card.title}</p>
                <p className="text-sm">{card.type}</p>
              </div>
              <div className="flex justify-start ml-auto gap-24">
                <div className="hidden group-hover:block">
                  <div className="flex gap-4">
                    <CgProfile className={iconStyle}/>
                    <IoLinkOutline className={iconStyle} />
                    <IoIosStarOutline className={iconStyle} />
                  </div>
                </div>
                <h3 className="w-12">{card.time}</h3>
                <h3 className="w-12">{card.size}</h3>
              </div>
              
            </div>
          </div>
        )
    })
  }
  </>
  )


};

export default RecentCard;