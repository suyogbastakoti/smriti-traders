import { Link } from "react-router-dom";

function Navbar(){
    return(
        <nav className="bg-fuchsia-600 text-white px-8 py-4 flex justify-between items-center">
            <h1 className="font-bold text-xl">
                Smriti Traders
            </h1>

            <div className="flex gap-6">
                <Link to="/" className="hover:underline">Home</Link>
                <Link to="/about" className="hover:underline">About</Link>
                <Link to="/products" className="hover:underline">Products</Link>
                <Link to="/contact" className="hover:underline">Contact</Link>
            </div>

            <Link to="/contact">
                <button className="bg-pink-500 text-xl p-2 rounded-2xl hover:bg-pink-600 transition">
                    Contact Us
                </button>
            </Link>
        </nav>
    );
}

export default Navbar;