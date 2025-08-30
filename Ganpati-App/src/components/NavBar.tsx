function NavBar() {
  return (
    <div>
      <nav className="bg-gradient-to-r from-orange-600 via-yellow-500 to-red-600 shadow-md">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="#"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://t4.ftcdn.net/jpg/05/62/69/59/240_F_562695931_v704qVw5YowF3cJKRerKZM0yVplrwPCl.jpg"
              className="h-16 rounded-full border-2 border-white shadow-lg"
              alt="Ganesha Logo"
            />
            <span className="self-center text-2xl font-bold text-white drop-shadow-md">
              Ganesha
            </span>
          </a>

          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-user"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 
              border border-orange-300 rounded-lg bg-orange-100 
              md:space-x-8 md:flex-row md:mt-0 md:border-0 md:bg-transparent">
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-white bg-orange-700 rounded-lg 
                  md:bg-transparent md:text-yellow-100 md:hover:text-white hover:bg-orange-800"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-yellow-100 rounded-lg hover:bg-orange-800 
                  md:hover:bg-transparent md:hover:text-white"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-yellow-100 rounded-lg hover:bg-orange-800 
                  md:hover:bg-transparent md:hover:text-white"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-yellow-100 rounded-lg hover:bg-orange-800 
                  md:hover:bg-transparent md:hover:text-white"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-yellow-100 rounded-lg hover:bg-orange-800 
                  md:hover:bg-transparent md:hover:text-white"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );

  
}

export default NavBar;

