import { Link } from "react-router-dom";
import { useState } from "react";
import stlogo from "../assets/stlogo.png";

function Navbar() {

  // Controls mobile menu open/close
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-fuchsia-600 text-white px-6 py-4">

      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* LEFT - Logo */}
        <div className="flex items-center gap-2">
          <img src={stlogo} className="h-12 w-12 rounded-xl" alt="stlogo" />
          <span className="font-bold text-xl">Smriti Traders</span>
        </div>

        {/* CENTER - Desktop Nav Links */}
        <div className="hidden md:flex gap-8">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/about" className="hover:underline">About</Link>
          <Link to="/products" className="hover:underline">Products</Link>
          <Link to="/contact" className="hover:underline">Contact</Link>
        </div>

        {/* RIGHT - Desktop Button */}
        <div className="hidden md:block">
          <Link to="/contact">
            <button className="bg-pink-500 px-4 py-2 rounded-lg hover:bg-pink-600">
              Contact Us
            </button>
          </Link>
        </div>

        {/* HAMBURGER BUTTON (Mobile Only) */}
        <button
        className="md:hidden text-2xl"
        onClick={() => setIsOpen(!isOpen)}
        >
        {isOpen ? "✖" : "☰"}
        </button>


      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="flex flex-col gap-4 mt-4 md:hidden text-right text-2xl">
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/products" onClick={() => setIsOpen(false)}>Products</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>

          <Link to="/contact" onClick={() => setIsOpen(false)}>
            <button className="bg-pink-500 px-4 py-2 rounded-lg hover:bg-pink-600">
              Contact Us
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
