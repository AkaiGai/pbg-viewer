import { useState, createContext } from 'react'

export const UserContext = createContext();

export const UserProvider = ({children}) => {

  let storedUser = null;

  try {
    const localUser = localStorage.getItem('user');
    storedUser = localUser ? JSON.parse(localUser) : null;
  } catch {
    storedUser = null;
  }

  const [user, setUser] = useState(storedUser);
  
  return(
    <UserContext.Provider value={{user, setUser}}>
      {children}
    </UserContext.Provider>
  )

};
