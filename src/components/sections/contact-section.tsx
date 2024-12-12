export const ContactSection = () => {
  return (
    <section className="">
      <div className="bg-gray-300 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800">
              Contact details
            </h2>
            <p className="text-lg text-gray-600 mt-4">
              For any type of online project please don't hesitate to get in
              touch with me. The fastest way is to send me your message using
              the following email&nbsp;
              <a
                className="text-secondary-500 hover:text-primary-500"
                href="#your-link"
              >
                contact@domain.com
              </a>
            </p>
          </div>
          <div className="w-full max-w-lg mx-auto">
            <form id="contactForm">
              <div className="mb-6 relative">
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full py-3 pl-6 pr-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 peer pt-6"
                />
                <label
                  htmlFor="name"
                  className="absolute left-6 top-1/2 transform -translate-y-1/2 text-sm text-primary-500  transition-all duration-200 peer-placeholder-shown:top-1/2 peer-placeholder-shown:translate-y-1/2 peer-focus:top-3 peer-focus:translate-y-0 peer-focus:text-black peer-focus:text-sm font-medium label-control"
                >
                  Name
                </label>
              </div>
              <div className="mb-6 relative">
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full py-3 pl-6 pr-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 peer pt-6"
                />
                <label
                  htmlFor="email"
                  className="absolute left-6 top-1/2 transform -translate-y-1/2 text-sm text-primary-500 transition-all duration-200 peer-placeholder-shown:top-1/2 peer-placeholder-shown:translate-y-1/2 peer-focus:top-3 peer-focus:translate-y-0 peer-focus:text-black peer-focus:text-sm font-medium label-control"
                >
                  Email
                </label>
              </div>
              <div className="mb-6 relative">
                <textarea
                  id="message"
                  required
                  className="w-full py-3 pl-6 pr-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 peer pt-6"
                />
                <label
                  htmlFor="message"
                  className="absolute left-6 top-1/2 transform -translate-y-1/2 text-sm text-primary-500 transition-all duration-200 peer-placeholder-shown:top-1/2 peer-placeholder-shown:translate-y-1/2 peer-focus:top-3 peer-focus:translate-y-0 peer-focus:text-black peer-focus:text-sm font-medium label-control"
                >
                  Project details
                </label>
              </div>
              <div className="mb-6">
                <button
                  type="submit"
                  className="w-full py-3 px-6 bg-secondary-600 text-white font-semibold rounded-full shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-secondary-500
                  form-control-submit-button"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
