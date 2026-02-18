import { useState, useEffect } from "react";
import stlogo from "../assets/stlogo.png";
import Berger from "../assets/Berger.png";

function Contact() {
  // Loading spinner state
  const [loading, setLoading] = useState(false);

  // Form data state
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  // Status message (success/failure)
  const [status, setStatus] = useState("");

  // Update form inputs
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Save to backend
      const res = await fetch(
        "https://smriti-traders-backend.onrender.com/api/contact",
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

      // Success
      setStatus("Message sent successfully!");
      setFormData({ name: "", phone: "", message: "" });
    } catch (error) {
      console.error(error);
      setStatus("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  // Auto-hide status message after 2 seconds
  useEffect(() => {
    if (status) {
      const timer = setTimeout(() => setStatus(""), 2000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  return (
    <main className="py-16 px-4 max-w-4xl mx-auto relative">
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-10">
        Contact Us
      </h1>

      <form
        onSubmit={handleSubmit}
        className="bg-fuchsia-600 p-6 sm:p-8 rounded-2xl shadow space-y-4"
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
          className="w-full border p-3 rounded-lg h-28 sm:h-32 bg-pink-200"
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

        {/* Partner logos responsive */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-6">
          <img
            src={stlogo}
            alt="stlogo"
            className="w-48 sm:w-60 rounded-2xl"
          />
          <img
            src={Berger}
            alt="berger"
            className="w-48 sm:w-60 rounded-2xl"
          />
        </div>
      </form>

      {/* Status message overlay at center */}
      {status && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div
            className={`p-6 sm:p-8 rounded-lg shadow-lg border text-center max-w-xs sm:max-w-sm w-11/12 pointer-events-auto ${
              status.includes("success") ? "border-green-500 text-green-600 bg-green-100" : "border-red-500 text-red-600 bg-red-100"
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
