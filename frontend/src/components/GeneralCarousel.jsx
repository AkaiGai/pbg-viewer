import {useState, useEffect} from 'react'
import GeneralCard from './GeneralCard.jsx'
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io";


const GeneralCarousel = ({cardData}) => {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(4);
  
    useEffect(() => {
      const updateVisibleCards = () => {
        if(window.innerWidth < 640) setVisibleCards(1);
        else if(window.innerWidth < 1024) setVisibleCards(2);
        else setVisibleCards(4);
      };
  
      updateVisibleCards();
  
      window.addEventListener('resize', updateVisibleCards);
      
      return () => {
        window.removeEventListener('resize', updateVisibleCards);
      };
  
    }, []);
  
    const maxIndex = Math.max(cardData.length - visibleCards, 0);
    const cardWidth = 100 / visibleCards;
    const totalCards = Math.max(cardData.length - visibleCards + 1, 1);
  
  
    const handleNext = () => {
      setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
    };
  
    const handlePrev = () => {
      setCurrentIndex((prev) => Math.max(prev - 1, 0));
    };

  return(
    <div className="flex flex-col items-center">

      <div className="flex relative items-center">
        
        <div className={`flex items-center justify-start absolute
        left-0 top-0 h-full w-20 z-5
        bg-linear-to-r from-surface to-transparent
        ${currentIndex === 0 ? 'opacity-0' : 'opacity-100'}`}>
          <button className="cursor-pointer hover:scale-110 active:scale-90 transition-all duration-150
          disabled:opacity-0"
          onClick={handlePrev}
          disabled={currentIndex === 0}>
            <IoIosArrowDropleftCircle className="text-4xl text-sheen"/>
          </button>
        </div>

        <div className="w-full overflow-hidden">
          <div className="flex transition-transform duration-300"
          style={{
            transform: `translateX(-${currentIndex * cardWidth}%)`
          }}>
            {
              cardData.map((item) => {
                return(
                  <div className="basis-full sm:basis-full md:basis-1/2 lg:basis-1/4 shrink-0" key={item.id}>
                    <GeneralCard list={item}/>
                  </div>
                )
              })
            }
          </div>
        </div>

        <div className={`flex items-center justify-end absolute
        h-full w-20 right-0 top-0 z-10
        bg-linear-to-l from-surface to-transparent
        ${currentIndex >= maxIndex ? 'opacity-0' : 'opacity-100'}`}>
          <button className="cursor-pointer hover:scale-110 active:scale-90 transition-all duration-150
          disabled:opacity-0"
          onClick={handleNext}
          disabled={currentIndex >= maxIndex}>
            <IoIosArrowDroprightCircle className="text-4xl text-sheen" />
          </button>
        </div>

      </div>

      <div className="flex gap-x-2 mt-4">
        {
          [...Array(totalCards)].map((_, index) => {
            return (
              <button key={index} className={`h-2 w-2 rounded-full
              cursor-pointer border 
              ${index === currentIndex ? 'bg-white' : ''}`}></button>
            )
          })
        }
      </div>

    </div>
  )
}

export default GeneralCarousel;