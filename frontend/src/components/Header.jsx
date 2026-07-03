import { useState, useEffect, useRef, useContext } from "react";
import { UserContext } from './AuthContext.jsx'
import { useNavigate, Link } from 'react-router-dom'
import { IoIosSearch, IoIosNotificationsOutline } from "react-icons/io"
import * as Asset from '../assets/asset.js'
import ProfileModal from './ProfileModal.jsx'
import GeneralButton from './GeneralButton.jsx'

const Header = () => {

  const headNavList = [
    {name: "Home", link:"/"},
    {name: "AI Space", link:"/aispace"},
    {name: "Documents", link:"/documents"},
    {name: "Edit", link:"/edit"},
    {name: "Tools", link:"/tools"}
  ];

  const pages = {
    signup: '/signup'
  }

  const [showSearch, setShowSearch] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(false);

  const profileModalRef = useRef(null);
  const profileButtonRef = useRef(null);

  const navigate = useNavigate();

  const { user } = useContext(UserContext);

  useEffect(() => {

    const handleClick = (event) => {

      if (
          profileModalRef.current &&
          !profileModalRef.current.contains(event.target) &&
          profileButtonRef.current &&
          !profileButtonRef.current.contains(event.target)
        ) {
          setShowProfileModal(false);
        }
    };

    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick)
    }
  }, []);

  return(
    <header className="flex items-center justify-between
      sm:w-dvw md:w-full h-14
      px-4 md:px-16
      bg-surface
      font-secondary font-light text-white">
      <div className="flex items-center
      gap-4 md:gap-12">
        <div className="flex items-center
        gap-2 cursor-pointer">
          <img className="h-6" src="/g-logo.svg" alt="Main logo" />
          <span>PBG Viewer</span>
        </div>

        <nav>
          <ul className="flex flex-col md:flex-row
          md:h-14
          gap-4 md:gap-8
          text-md">
            {headNavList.map((nav) => {
              return (
              <li className="flex relative group items-center" key={nav.name}>
                <Link className="text-gray-400 hover:text-text-primary"
                key={nav.name} to={nav.link}> {nav.name} </Link>
                <span className="hidden md:block absolute bottom-0 left-1/2
                h-0.5 w-0
                bg-white
                transition-all duration-100
                -translate-x-1/2
                group-hover:w-full"
                />
              </li>
            )})}
            
          </ul>
        </nav>
      </div>

      <div className="flex items-center
      gap-4 md:gap-6">

        {
          !user && 
          <GeneralButton value="Sign Up" func={ () => navigate(pages.signup) } />

        }

        <a href="#notification">
          <IoIosNotificationsOutline className="text-2xl"/>
        </a>

        <button className="cursor-pointer"
        onClick={() => setShowSearch(!showSearch)}>
            <IoIosSearch className="text-2xl"/>
        </button>

        {
          showSearch && 
          <input className="px-4 py-1 border outline-none
          rounded-full font-abstract"
          text="type" placeholder="search"
          />
        }

        <div className="flex relative items-center">
          <button className="cursor-pointer hover:scale-110"
          onClick={() => setShowProfileModal(!showProfileModal)}
          ref={profileButtonRef}>
            <img className="h-6" src={Asset.profileIcon}/>
          </button>
          <ProfileModal show={showProfileModal} modalRef={profileModalRef} />
        </div>

      </div>

    </header>
  );

};

export default Header;
