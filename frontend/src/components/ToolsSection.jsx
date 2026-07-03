import GeneralCarousel from "./GeneralCarousel.jsx"
import * as asset from '../assets/asset.js'


const ToolsSection = () => {

    const toolsCardData = [
      {
        id:1,
        name:'PPT to PDF',
        image:asset.pptIconNeon,
        title:'PPT to PDF',
        description:"Hey, We have lanuched new AI features don't forget to explore them",
        instruction:''
      },
      {
       id:2,
       name:'IMG to PDF',
       image:asset.imageIconNeon,
       title:'IMG TO PDF',
       description:'We have huge community which supports and answers your query, Join Now',
       instruction:''
      },
      {
        id:3,
        name:'DOC to PDF',
        image:asset.wordIconNeon,
        title:'DOC to PDF',
        description:"Hey, We have lanuched new AI features don't forget to explore them",
        instruction:''
      },
      {
        id:4,
        name:'Compress PDF',
        image:asset.pdfIconNeon,
        title:'Compress PDF',
        description:"Hey, We have lanuched new AI features don't forget to explore them",
        instruction:''
      },
      {
        id:5,
        name:'PDF to JPG',
        image:asset.pdfIconNeon,
        title:'PDF to JPG',
        description:"Hey, We have lanuched new AI features don't forget to explore them",
        instruction:''
      },
      {
        id:6,
        name:'EXCEL to PDF',
        image:asset.excelIconNeon,
        title:'EXCEL to PDF',
        description:"Hey, We have lanuched new AI features don't forget to explore them",
        instruction:''
      },
      {
        id:7,
        name:'PDF to DOC',
        image:asset.pdfIconNeon,
        title:'PDF to DOC',
        description:"Hey, We have lanuched new AI features don't forget to explore them",
        instruction:''
      },
    ]

  return(
    <GeneralCarousel cardData={toolsCardData}/>
  )

}

export default ToolsSection;