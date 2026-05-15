import { useState } from "react";
import { Link, NavLink } from "react-router";
import { HiMenuAlt3, HiX } from "react-icons/hi"; // আইকন ইমপোর্ট করুন
import logo from "../assets/logo.jpg";
import Container from "./Container";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Catalogue", path: "/catalogue" },
    { name: "Registration", path: "/registration" },
    { name: "Login", path: "/login" },
  ];

  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-100 sticky top-0 z-50 transition-all duration-300">
      <Container>
        <div className="flex items-center justify-between py-4">
          {/* Logo Section */}
          <div className="shrink-0 flex items-center">
            <Link to="/" className="group">
              <img
                src={logo}
                alt="Logo"
                className="h-12 w-auto transform group-hover:scale-105 transition-transform duration-300"
              />
            </Link>
          </div>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center space-x-10">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `relative py-1 text-sm font-bold tracking-wide transition-all duration-300 group ${
                    isActive
                      ? "text-primary"
                      : "text-gray-600 hover:text-primary"
                  }`
                }
              >
                {item.name}
                {/* হোভার এনিমেশন লাইন */}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </NavLink>
            ))}
          </div>

          {/* Right Action Button */}
          <div className="hidden md:block">
            <button className="bg-primary hover:bg-blue-700 text-white text-sm font-bold py-2.5 px-7 rounded-sm shadow-[0_4px_14px_0_rgba(59,130,246,0.39)] transition-all active:scale-95">
              Call Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-3xl text-gray-700 focus:outline-none"
            >
              {isOpen ? <HiX /> : <HiMenuAlt3 />}
            </button>
          </div>
        </div>

        {/* Mobile Sidebar/Menu */}
        <div
          className={`md:hidden absolute left-0 w-full bg-white border-b transition-all duration-300 ease-in-out ${isOpen ? "top-[100%] opacity-100 visible" : "top-[120%] opacity-0 invisible"}`}
        >
          <div className="flex flex-col p-6 space-y-4">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className="text-lg font-semibold text-gray-700 hover:text-primary"
              >
                {item.name}
              </NavLink>
            ))}
            <button className="bg-primary text-white py-3 rounded-sm font-bold">
              Call Now
            </button>
          </div>
        </div>
      </Container>
    </nav>
  );
}
