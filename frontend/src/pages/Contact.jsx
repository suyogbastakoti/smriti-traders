import { useState } from "react";

function Contact(){
  const [formData, setFormData] = useState({
    name:"",
    phone:"",
    message:"",
  });

  const handleChange = (e)=>{
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit= async(e)=>{
    e.preventDefault();

    try{
      const res = await fetch("http://localhost:5000/api/contact",{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if(res.ok){
        alert(data.message);
        setFormData({name:"", phone: "", message: ""});
      }else{
        alert(data.message || "Something went wrong");
      }
    } catch(error){
      console.error(error);
      alert("Server error. Try again later.");
    }
    //Backend will come here later
    console.log(formData);
  };
  
  
  return (
    <main className="py-16 px-6 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-10">
        Contact Us
      </h1>

      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow space-y-6">
          <input type="text" 
                 name="name" 
                 placeholder="Your Name" 
                 value={formData.name}
                 onChange={handleChange}
                 required
                 className="w-full border p-3 rounded-lg"
          />

          <input type="number" 
                 name="phone" 
                 placeholder="Phone Number" 
                 value={formData.phone}
                 onChange={handleChange}
                 required
                 className="w-full border p-3 rounded-lg"
          />

          <textarea name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full border p-3 rounded-lg h-32"
          />

          <button type="submit" className="bg-pink-500 text-white px-6 py-3 rounded-lg hover:bg-pink-600 transition w-full">
            Send Message
          </button>
      </form>
    </main>  
  );
}
export default Contact;