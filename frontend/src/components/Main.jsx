import { useState, useContext } from 'react'
import { UserContext } from './AuthContext.jsx'
import Nav from './Nav.jsx'
import DiscoverSection from './DiscoverSection.jsx';
import ToolsSection from './ToolsSection.jsx'
import RecentSection from './RecentSection.jsx'
import * as Asset from '../assets/asset.js'

const Main = () => {

  const [activeMainNavList, setActiveMainNavList] = useState('Discover');
  const [activeMainNavListTwo, setActiveMainNavListTwo] = useState('Recent');
  const { user } = useContext(UserContext);

  const mainNavList = [
    { name:'Discover',
      component: <DiscoverSection/>,
    },
    { name:'Tools',
      component: <ToolsSection />,
    }
  ];

  const tempData = [
    {
      name:'whatapp_010232.jpg',
      image:Asset.imageIconNeon,
      title:'Whatapp_010232.jpg',
      type:'JPG',
      time:'18:23',
      size:'10 kb'
    },
        {
      name:'ENG_010232.png',
      image:Asset.imageIconNeon,
      title:'ENG_010232.png',
      type:'PNG',
      time:'09:46',
      size:'120 kb'
    },
    {
      name:'whatapp_010232.pdf',
      image:Asset.pdfIconNeon,
      title:'Whatapp_010232.pdf',
      type:'PDF',
      time:'17:03',
      size:'89 kb'
    }
  ];

  const mainNavListTwo = [
    {
      name:'Recent',
      component:<RecentSection cardData={user ? tempData : null} />,
    },
    {
      name: 'Favorite',
      component:<h3>😕 Shoot, the website is in beta mode</h3>,
    },
    {
      name:'Shared',
      component:<h3>😕 Shoot, the website is in beta mode</h3>,
    }
  ];
  

  return(

    <main className="sm:w-dvw md:w-full">
      <section className="flex justify-center
      w-full
      md:py-6 md:px-16
      ">
        <div className="flex justify-between items-center
          px-12 font-google-code font-extralight text-md
          w-full h-24 rounded-2xl
        bg-surface">
          {
            user ? <h2> Welcome </h2> :
            <h2> Please log in to save you work & workspace </h2>
          }
          <div className="flex justify-end items-center
          h-12 w-64 pr-6 rounded-full
          bg-linear-to-r from-surface to-coat">
            {
              user ? <h2>{user?.email}</h2> :
              <h2>Explore latest tech!</h2>
            }
          </div>
        </div>
      </section>

      <section className="flex py-8
      w-full
      bg-surface">
        <div key={activeMainNavList} className="w-full flex flex-col px-4 md:px-16 gap-4">
          <Nav navList={mainNavList} setActive={setActiveMainNavList} active={activeMainNavList} />
          {
            mainNavList.find(item => item.name === activeMainNavList)?.component
          }
        </div>
      </section>

      <section className="flex pb-8
      w-full
    bg-surface">
        <div key={activeMainNavListTwo} className="w-full flex flex-col px-4 md:px-16 gap-4">
          <Nav navList={mainNavListTwo} setActive={setActiveMainNavListTwo} active={activeMainNavListTwo} />
          {
            mainNavListTwo.find(item => item.name === activeMainNavListTwo)?.component
          }
        </div>
      </section>
      
    </main>
  )


};

export default Main;