import { useState, useContext } from 'react'
import { UserContext } from '../components/AuthContext.jsx'
import { useNavigate } from 'react-router-dom'
import GeneralButton from './GeneralButton.jsx'

const ProfileModal = ({show, modalRef}) => {

  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return(
    <div className={`absolute top-full right-0
    mt-6 p-4
    w-64 rounded-2xl
    bg-coat
    origin-top-right
    transition-all duration-150
    ${show ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}
    ref={modalRef}>
      
      {
        user ? <GeneralButton value="Log Out" func={handleLogout}/>
        : <GeneralButton value="Sign In" func={() => navigate('signin')} />
      }
    </div>
  )

};

export default ProfileModal;
