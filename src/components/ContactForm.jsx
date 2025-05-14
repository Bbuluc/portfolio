import { useState } from "react";
import emailjs from "emailjs-com";
export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted:", formData);

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        event.target,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then((result) => {
        alert("Message sent!");
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch(() => alert("Something went wrong. Please try again."));
  };

  return (
    <div className="h-screen pt-44" id="contact">
      <div class="max-w-96 sm:max-w-lg mx-auto p-6 bg-gray-800 text-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-blue-200 mb-6">
          Contact Me
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label for="name" class="block text-sm font-semibold text-blue-200">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 mt-2 bg-gray-700 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your full name"
              required
            />
          </div>

          <div class="mb-4">
            <label
              for="email"
              className="block text-sm font-semibold text-blue-200"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 mt-2 bg-gray-700 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>

          <div class="mb-4">
            <label
              for="message"
              className="block text-sm font-semibold text-blue-200"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 mt-2 bg-gray-700 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="4"
              placeholder="Enter your message"
              required
            ></textarea>
          </div>

          <div class="text-center">
            <button
              type="submit"
              className="w-full py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 hover:cursor-pointer"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
