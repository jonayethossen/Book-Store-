import { Link, NavLink } from "react-router";
import logo from "../assets/logo.jpg";
import Container from "./Container";
export default function Navbar() {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Catalogue", path: "/catalogue" },
    { name: "Registration", path: "/registration" },
    { name: "Login", path: "/login" },
  ];
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      {/* Main container */}
      <Container>
        <div className="flex items-center justify-between py-3">
          {/* left sight for logo */}
          <div className="shrink-0 cursor-pointer">
            <Link to="/">
              <img src={logo} alt="Logo" className="h-10 w-auto " />
            </Link>
          </div>
          {/* center position nav item */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className="text-primary-text hover:text-hover-text font-medium transition-colors duration-200"
              >
                {item.name}
              </NavLink>
            ))}
          </div>
          {/* right button */}
          <div>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-xl">
              Call Now
            </button>
          </div>
        </div>
      </Container>
    </nav>
  );
}
