import { useState, useEffect } from 'react'
import GeneralCard from './GeneralCard.jsx'
import * as asset from '../assets/asset.js'
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io";
import GeneralCarousel from './GeneralCarousel.jsx';

const DiscoverSection = () => {

  const discoverCardData = [
    {
      id:1,
      name:'AI Space',
      image:asset.chatGPTIconNeon,
      title:'Explore AI Space',
      description:"Hey, We have lanuched new AI features don't forget to explore them",
      instruction:''
    },
    {
     id:2,
     name:'Log IN',
     image:asset.profileIconNeon,
     title:'Explore Community 2',
     description:'We have huge community which supports and answers your query, Join Now',
     instruction:''
    },
    {
      id:3,
      name:'AI Space',
      image:asset.pdfIcon,
      title:'Explore AI Space 3',
      description:"Hey, We have lanuched new AI features don't forget to explore them",
      instruction:''
    },
    {
      id:4,
      name:'AI Space',
      image:asset.pdfIcon,
      title:'Explore AI Space 4',
      description:"Hey, We have lanuched new AI features don't forget to explore them",
      instruction:''
    },
    {
      id:5,
      name:'AI Space',
      image:asset.pdfIcon,
      title:'Explore AI Space 5',
      description:"Hey, We have lanuched new AI features don't forget to explore them",
      instruction:''
    },
    
  ]

  return(
    <GeneralCarousel cardData={discoverCardData}/>
  )

};

export default DiscoverSection;