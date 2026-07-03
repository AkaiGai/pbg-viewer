import { useState, useContext } from 'react'
import { UserContext } from '../components/AuthContext.jsx'
import { Link, useNavigate } from 'react-router-dom'
import { IoEyeOffSharp, IoEyeSharp, IoChevronBackSharp } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import * as Asset from '../assets/asset.js'

const SignInPage = () => {

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const [showPassword, setShowPassword] = useState(false); 

  const navigate = useNavigate();

  const { setUser } = useContext(UserContext);

  const URL = 'http://localhost:5000/';
  const login = 'api/auth/login';
  const iconStyle = 'text-xl text-secondary-900';

  const handleSignIn = async () => {
    try{
      const response = await fetch(URL+login, {
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify(formData)
      });

    const data = await response.json();

    if(!response.ok){
      throw new Error(data.message);
    }

    localStorage.setItem('user', JSON.stringify(data));
    setUser(data);

    alert(data.message);

    navigate('/');
    setFormData({
      email: "",
      password: ""
    });

    }catch(error){
      alert(error.message);
    }
    
  };

  return(
    <main className="flex min-w-[100dw] h-screen text-black">

        <div className='flex flex-col justify-between w-1/2 h-full sm:p-4 md:p-12'>

          <div className="flex justify-between">
            <div className="flex items-center gap-2 cursor-pointer font-secondary">
              <img className="h-6" src={Asset.logo} alt="Main logo" />
              <span className="font-black">PBG Viewer</span>
            </div>
            <div className="relative group flex items-center gap-4">
              <p className="hidden group-hover:inline text-sheen font-extralight">Back Home</p>
              <button className="flex items-center justify-center relative cursor-pointer
              size-8 rounded-full text-gray-400 bg-white hover:bg-abstract-300 hover:text-white duration-150"
              onClick={() => navigate('/')}>
                <IoChevronBackSharp className="size-6 relative right-0.5"/>
              </button>
            </div>
          </div>

          <div className="flex justify-center
          w-full">

            <div className="flex flex-col p-8 gap-y-4 border-0 rounded-2xl shadow-lg">

              <div className="">
                <h2>Hey, welcome back</h2>
                <h2 className="text-xl">Sign In to PBG Viewer</h2>
              </div>

              <div className="flex flex-col relative gap-y-4 justify-center">
                <input className="w-72 h-12 px-4
                border-0 rounded-full bg-secondary-100 outline-none"
                placeholder="email"
                value={formData.email}
                onChange={(e) => setFormData({
                    ...formData,
                    email: e.target.value
                  })}/>
                <input className="relative w-72 h-12 pl-4 pr-10
                border-0 rounded-full bg-secondary-100 outline-none"
                placeholder="password" type={showPassword ? 'text' : 'password'}
                value={formData.password}
                onChange={(e) =>setFormData({
                  ...formData,
                  password: e.target.value
                })}/>
                <button className="absolute right-4 bottom-19.5 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
                type="button">
                  { showPassword ? <IoEyeSharp className={iconStyle}/> : <IoEyeOffSharp className={iconStyle}/> }</button>
                <button className="w-full h-12 bg-secondary-200 text-sheen
                hover:bg-secondary-500 hover:scale-105 hover:text-white
                duration-300 border-0 rounded-full"
                type="submit"
                onClick={handleSignIn}>Sign In</button>
              </div>

              <div className="flex items-center gap-1">
                <hr className="flex-1"/>
                <span className="text-sm"> OR sign in with</span>
                <hr className="flex-1"/>
              </div>

              <div className="flex gap-x-2">
                <button className="flex justify-center items-center w-1/2 h-12 bg-secondary-100 text-sheen
                hover:bg-secondary-500 hover:scale-105 hover:text-white
                duration-300 border-0 rounded-full"
                type="button"><FcGoogle className="size-6" /></button>

                <button className="flex justify-center items-center w-1/2 h-12 bg-secondary-100 text-sheen
                hover:bg-secondary-500 hover:scale-105 hover:text-white
                duration-300 border-0 rounded-full"
                type="button"><FaApple className="size-6" /></button>
              </div>

            </div>
          </div>

          

          <div>
            <h2>Don't have a account. <Link to="/signup" className="text-primary-500">Sign up</Link></h2>
          </div>

        </div>

        <div className="w-1/2">
          <img className="w-full h-full object-cover"
          src={Asset.driveBgImage}/>
        </div>
        
    </main>
  )
};

export default SignInPage;