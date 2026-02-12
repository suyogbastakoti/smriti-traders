import { useState, useEffect } from "react";
import Berger from "../assets/Berger.png";

function Contact(){

  // -------------------------
  // Loading state
  // -------------------------
  // true while form is submitting to backend
  const [loading, setLoading] = useState(false);

  // -------------------------
  // Form data state
  // -------------------------
  // Controlled inputs: React state holds the current value of each input
  const [formData, setFormData] = useState({
    name:"",       // Name input
    phone:"",      // Phone input
    message:"",    // Message textarea
  });

  // -------------------------
  // Status message
  // -------------------------
  // Stores success/error message to show to user
  const [status, setStatus] = useState("");

  // -------------------------
  // Handle input changes
  // -------------------------
  const handleChange = (e)=>{
    // Update only the input that changed while keeping others intact
    setFormData({
      ...formData,              // spread existing form data
      [e.target.name]: e.target.value,  // update field that triggered the event
    });
  };

  // -------------------------
  // Handle form submission
  // -------------------------
  const handleSubmit= async(e)=>{
    e.preventDefault();     // prevent default form submission (page reload)
    setLoading(true);       // start spinner / disable button

    try{
      // Send form data to backend API
      const res = await fetch("http://localhost:5000/api/contact",{
        method: "POST",
        headers: {
          "Content-Type": "application/json", // tell server it's JSON
        },
        body: JSON.stringify(formData),       // send the data
      });

      const data = await res.json(); // parse response from backend

      // -------------------------
      // Handle success/error
      // -------------------------
      if(res.ok){
        setStatus("Message sent successfully");     // show success message
        setFormData({name:"", phone: "", message: ""}); // reset form
      }else{
        // show backend error message or default error
        setStatus(data.message || "Something went wrong");
      }
    } catch(error){
      console.error(error); 
      setStatus("Server error. Try again later."); // network/server error
    }finally {
      setLoading(false); // stop spinner / enable button
    }
  };

  // -------------------------
  // Auto-hide status message after 3 seconds
  // -------------------------
  useEffect(()=>{
    if(status){
      const timer= setTimeout(()=> setStatus(""), 1000); // clear message after 1sec
      return ()=> clearTimeout(timer); // cleanup timer if component unmounts
    }
  }, [status]);

  return (
  <main className="py-16 px-6 max-w-4xl mx-auto relative">
      {/* Page title */}
      <h1 className="text-4xl font-bold text-center mb-10">
        Contact Us
      </h1>

      {/* -------------------------
          Contact Form
      ------------------------- */}
      <form onSubmit={handleSubmit} className="bg-gray-100 p-8 rounded-2xl shadow space-y-6">

          {/* Name input */}
          <input type="text" 
                 name="name" 
                 placeholder="Your Name" 
                 value={formData.name}          // controlled input
                 onChange={handleChange}       // updates state
                 required
                 className="w-full border p-3 rounded-lg bg-pink-200"
          />

          {/* Phone input */}
          <input type="number" 
                 name="phone" 
                 placeholder="Phone Number" 
                 value={formData.phone}
                 onChange={handleChange}
                 required
                 className="w-full border p-3 rounded-lg bg-pink-200"
          />

          {/* Message textarea */}
          <textarea name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full border p-3 rounded-lg h-32 bg-pink-200"
          />

          {/* Submit button */}
          <button 
            type="submit" 
            disabled={loading} // disable button while sending
            className={`bg-pink-500 text-white px-6 py-3 rounded-lg hover:bg-pink-600 transition w-full ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {loading ? "Sending..." : "Send Message"} {/* Button text changes while loading */}
          </button>

          <div className="flex justify-center items-center">
            <img src={Berger} className="h-64 w-64"/>
          </div>

      </form>

      {/* -------------------------
          Overlay success/error message
      ------------------------- */}
      {status && (
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
        <div className={`bg-white p-28 rounded-lg shadow-lg border ${
          status.includes("successfully") ? "border-green-500 text-green-600" : "border-red-500 text-red-600"
        }`}>
          {status}
        </div>
      </div>
  )};

  </main>  
  );
}

export default Contact;
