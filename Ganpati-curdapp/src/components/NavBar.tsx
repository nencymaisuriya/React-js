
function NavBar() {
  return (
    <nav className="bg-gradient-to-r from-orange-600 via-yellow-500 to-red-600 shadow-md fixed w-full top-0 z-50">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
        
        {/* Logo */}
        <a href="#" className="flex items-center space-x-3">
          <img
            src="https://t4.ftcdn.net/jpg/05/62/69/59/240_F_562695931_v704qVw5YowF3cJKRerKZM0yVplrwPCl.jpg"
            className="h-16 rounded-full border-2 border-white shadow-lg"
            alt="Ganesha Logo"
          />
          <span className="self-center text-2xl font-bold text-white drop-shadow-md">
            Ganesha
          </span>
        </a>

        {/* Menu */}
        <ul className="hidden md:flex space-x-8 font-medium text-yellow-100">
          {["Home", "About", "Services", "Pricing", "Contact"].map((item, idx) => (
            <li key={idx}>
              <a
                href="#"
                className="hover:text-white hover:underline underline-offset-4 transition"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
