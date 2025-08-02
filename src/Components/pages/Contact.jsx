import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    emailjs
      .send(
        "service_2v0mtr3", // Replace with your EmailJS service ID
        "template_73hfn92", // Replace with your EmailJS template ID
        formData,
        "0I5y9QqRZiqzYVNTi" // Replace with your EmailJS public key
      )
      .then(() => {
        setSuccess(true);
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 via-green-100 to-yellow-100">
      {/* Hero Section */}
      <section
        className="relative h-[50vh] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1677182117470-ffb159b72d3b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative z-10 text-center text-white flex flex-col justify-center items-center h-full space-y-4">
          <h1 className="text-4xl sm:text-6xl font-bold tracking-wide">Contact Us</h1>
          <p className="text-xl sm:text-4xl font-light">
            Let's connect and make your journey unforgettable!
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <div className="max-w-3xl mx-auto bg-white p-8 mt-10 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-teal-700 text-center">Get in Touch 📩</h2>
        <p className="text-gray-600 text-center mt-2">We'd love to hear from you!</p>

        <form className="mt-6 flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="border-2 p-3 rounded-lg focus:border-teal-500"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="border-2 p-3 rounded-lg focus:border-teal-500"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            className="border-2 p-3 rounded-lg focus:border-teal-500"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button
            type="submit"
            className="bg-teal-500 text-white p-3 rounded-lg hover:bg-teal-600 transition duration-300"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message 📬"}
          </button>
        </form>

        {/* Success Message */}
        {success && (
          <p className="mt-4 text-green-600 text-center">
            ✅ Thank you for reaching out! Check your email for a response.
          </p>
        )}
      </div>

      {/* Contact Info */}
      <div className="text-center mt-10 text-gray-700 pb-10">
        <p>📍 Address: </p>
        <p>📧 Email:</p>
        <p>📞 Phone:</p>
        
      </div>
    </div>
  );
};

export default Contact;
