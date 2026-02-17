import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import Berger from "../assets/Berger.png";
import stlogo from "../assets/stlogo.png";

function Contact() {

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Save to MongoDB via backend
      const res = await fetch(
        "https://smriti-traders-production.up.railway.app/api/contact",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Database save failed");
      }

      // Send Email via EmailJS
      await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        name: formData.name,
        phone: formData.phone,
        message: formData.message,
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    );


      setStatus("Message sent successfully");
      setFormData({ name: "", phone: "", message: "" });

    } catch (error) {
      console.error(error);
      setStatus("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  // Auto-hide status message
  useEffect(() => {
    if (status) {
      const timer = setTimeout(() => setStatus(""), 1500);
      return () => clearTimeout(timer);
    }
  }, [status]);

  return (
    <main className="py-16 px-6 max-w-4xl mx-auto relative">
      <h1 className="text-4xl font-bold text-center mb-10">
        Contact Us
      </h1>

      <form
        onSubmit={handleSubmit}
        className="bg-fuchsia-600 p-8 rounded-2xl shadow space-y-6"
      >

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full border p-3 rounded-lg bg-pink-200"
        />

        <input
          type="number"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
          className="w-full border p-3 rounded-lg bg-pink-200"
        />

        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full border p-3 rounded-lg h-32 bg-pink-200"
        />

        <button
          type="submit"
          disabled={loading}
          className={`bg-pink-500 text-white px-6 py-3 rounded-lg hover:bg-pink-600 transition w-full ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {loading ? "Sending..." : "Send Message"}
        </button>

        <div className="flex justify-center items-center">
          <img src={stlogo} alt="stlogo" className="h-60 w-64 rounded-2xl" />
          <img src={Berger} alt="berger" className="h-60 w-64 rounded-2xl ml-5" />
        </div>

      </form>

      {status && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
          <div
            className={`bg-green-300 p-20 rounded-lg shadow-lg border ${
              status.includes("successfully")
                ? "border-green-500 text-green-600"
                : "border-red-500 text-red-600"
            }`}
          >
            {status}
          </div>
        </div>
      )}
    </main>
  );
}

export default Contact;
