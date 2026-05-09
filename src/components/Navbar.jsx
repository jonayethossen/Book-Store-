import logo from "../assets/logo.jpg";
export default function Navbar() {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Catalogue", path: "/catalogue" },
    { name: "Registration", path: "/registration" },
    { name: "Login", path: "/login" },
  ];
  return (
    <nav className="bg-white shadow-md px-4 py-4 flex items-center justify-between sticky top-0 z-50">
      {/* left sight for logo */}
      <div className="flex-shrink-0">
        <a href="/">
          <img src={logo} alt="Logo" className="h-10 w-auto cursor-pointer" />
        </a>
      </div>
      {/* center position item */}
      <div className="hidden md:flex space-x-6">
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.path}
            className="text-gray-600 hover:text-blue-600 font-medium transition-colors duration-200"
          >
            {item.name}
          </a>
        ))}
      </div>
      {/* rightt site */}
      <div>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-xl">
          Call Now
        </button>
      </div>
    </nav>
  );
}
