import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      // Example: Send form data to a server or an email service
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Failed to send the message. Please try again.");
      }
    } catch (error) {
      setStatus("An error occurred. Please try again.");
    }
  };

  return (
    <section id="contact" className="bg-gray-900 text-white py-12 px-6">
      <div className="container mx-auto text-center max-w-2xl">
        <h2 className="text-4xl font-bold mb-6 text-blue-400">Contact</h2>
        <p className="text-lg mb-8">
          Have a question or want to work together? Reach out!
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full p-4 bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full p-4 bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            className="w-full p-4 bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="4"
            required
          ></textarea>
          <button
            type="submit"
            className="w-full p-4 bg-blue-500 text-white rounded font-semibold hover:bg-blue-600 transition duration-300"
          >
            Send Message
          </button>
        </form>
        {status && <p className="mt-4 text-sm text-gray-400">{status}</p>}
      </div>
    </section>
  );
}

export default Contact;
