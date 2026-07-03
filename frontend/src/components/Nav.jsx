
const Nav = ({navList, setActive, active}) => {

  return(
    <nav>
      <ul className="flex
      h-8
      font-secondary font-light text-md
      gap-4 md:gap-6">
        {
          navList.map((nav) => {
            return(
            <li className="relative group" key={nav.name}>
              <button className={`${nav.name === active ? 'text-white' : ''} 
              text-gray-400 hover:text-white`}
              onClick={() => setActive(nav.name)}>
                {nav.name}
              </button>
              <span className={`absolute bottom-0 left-1/2 -translate-x-1/2
              h-0.5 w-0
              transition-all duration-100
              bg-white
              ${nav.name === active ? 'w-full' : '' }`}>
              </span>
            </li>

            )
          })
        }
      </ul>
    </nav>
  )

};

export default Nav;