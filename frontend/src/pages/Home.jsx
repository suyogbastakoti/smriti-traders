import { Link } from "react-router-dom";
import Berger from "../assets/Berger.png"
import interior from "../assets/interior.jpg";
import exterior from "../assets/exterior.jpg";
import waterproofing from "../assets/waterproofing.jpg";
import berger from "../assets/berger.mp4";


function Home(){
  return (

   <main>
   
<section className="relative w-full h-screen overflow-hidden">
  
  {/* Video */}
  <video
    src={berger}
    autoPlay
    muted
    loop
    playsInline
    className="absolute top-0 left-0 w-full h-full object-cover"
  />

  {/* Dark Overlay */}
  <div className="absolute top-0 left-0 w-full h-full bg-black/47">

  {/* Content on top of video */}
  <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 text-white">

    <h1 className="text-4xl md:text-5xl font-bold mb-6">
      Smriti Traders
    </h1>

    <p className="max-w-2xl mb-8 text-lg">
      Authorized Berger Paints Dealer in Kathmandu, Gaurighat.
      Providing quality paints and solutions for homes and businesses.
    </p>

    <Link to="/products">
      <button className="bg-pink-500 hover:bg-pink-600 transition rounded-2xl px-8 py-3 text-xl">
        View Products
      </button>
    </Link>

  </div>

  </div>
</section>






{/* Trust Section */}
    
    <section className="text-center py-16 px-6">
            
        <img src={Berger} alt="Partner-logo" className="h-24 w-24 mx-auto mb-3" />

            <h2 className="text-2xl font-bold mb-4">
                Trusted Berger Paints Partner
            </h2>

            <p className="text-gray-600 text-lg max-w-xl mx-auto ">
                Smriti Traders is an authorized dealer of Berger Paints,
                offering genuine products and expert guidance for all your painting needs.
            </p>
    </section>


{/* PRODUCT HIGHLIGHTS */}

<section className="text-center bg-gray-200 py-20 px-6">
    <h2 className="text-2xl font-bold mb-12">
        Our Product Categories
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto ">
    
    {/* first sample product */}

        <div className="bg-white p-8 rounded-xl text-center shadow ">

            <img src={interior} alt="interior-product-image" className="h-72 w-72 mx-auto" />
            <h3 className="text-xl mb-4 font-semibold">
                Interior Paints
            </h3>

            <p className="text-gray-600">
                Smooth finish and vibrant colors for interiors.
            </p>
        </div>

    {/* Second sample product */}

        <div className="bg-white p-8 rounded-xl text-center shadow ">
            
            <img src={exterior} alt="exterior-product-image" className="h-64 w-64 mx-auto mb-5" />

            <h3 className="text-xl mb-4 font-semibold">
                Exterior Paints
            </h3>

            <p className="text-gray-600">
                Durable and weather-resistant exterior solutions.
            </p>
        </div>
       

    {/* Third sample product */}

        <div className="bg-white p-8 rounded-xl text-center shadow ">
            
            <img src={waterproofing} alt="waterproofing-product-image" className="h-64 w-64 mx-auto mb-5" />
            
            <h3 className="text-xl mt-2 mb-4 font-semibold">
                Waterproofing
            </h3>

            <p className="text-gray-600">
                Protection against leakage and dampness.
            </p>
        </div>

    </div>

</section>

{/* CALL TO ACTION */}
<section className="bg-purple-600 py-16 px-6 text-center text-white">
    <h2 className="text-3xl font-bold mb-4">
        Need Paint Advice or Products?
    </h2>

    <p className="mb-12">
        Contact Smriti Traders today for expert guidance and genuine Berger Paints.
    </p>

    <Link to="/contact" className="inline-block bg-pink-500 rounded-2xl p-3 text-xl hover:bg-pink-600 transition">
        Contact Us
    </Link>
</section>

</main>

  );

  
}
export default Home;