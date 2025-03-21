export default function ContactForm() {
  return (
    <div className="h-screen pt-44" id="contact">
      <div class="max-w-96 sm:max-w-lg mx-auto p-6 bg-gray-800 text-white rounded-lg shadow-lg">
        <h2 class="text-2xl font-bold text-center text-blue-200 mb-6">
          Contact Me
        </h2>
        <form>
          <div class="mb-4">
            <label for="name" class="block text-sm font-semibold text-blue-200">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              class="w-full p-3 mt-2 bg-gray-700 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your full name"
              required
            />
          </div>

          <div class="mb-4">
            <label
              for="email"
              class="block text-sm font-semibold text-blue-200"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              class="w-full p-3 mt-2 bg-gray-700 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>

          <div class="mb-4">
            <label
              for="message"
              class="block text-sm font-semibold text-blue-200"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              class="w-full p-3 mt-2 bg-gray-700 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="4"
              placeholder="Enter your message"
              required
            ></textarea>
          </div>

          <div class="text-center">
            <button
              type="submit"
              class="w-full py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
