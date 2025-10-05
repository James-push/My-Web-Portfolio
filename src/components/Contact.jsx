const Contact = () => {
  return (
    <section
      id="contact"
      className="pt-16 pb-0 min-h-screen flex flex-col items-center bg-base-100 text-base-content transition-colors duration-500"
    >
    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center">Contact Me</h2>
    <div className="w-16 sm:w-20 h-1 bg-primary rounded-full mt-4 mb-9"></div>
  <div className="w-full max-w-xs xs:max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl bg-base-200 rounded-lg xs:rounded-xl sm:rounded-2xl shadow-sm xs:shadow-md sm:shadow-lg p-3 sm:p-6 md:p-8 transition-colors duration-500">
  <form className="space-y-3 xs:space-y-4 text-sm xs:text-base">
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full px-3 py-2 sm:px-4 sm:py-3 rounded-md xs:rounded-lg border border-base-300 bg-base-100 text-base-content focus:ring-2 focus:ring-primary outline-none transition-colors duration-500"
          />
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-3 py-2 sm:px-4 sm:py-3 rounded-md xs:rounded-lg border border-base-300 bg-base-100 text-base-content focus:ring-2 focus:ring-primary outline-none transition-colors duration-500"
          />
          <textarea
            rows="4"
            placeholder="Write a message"
            className="w-full px-3 py-2 sm:px-4 sm:py-3 rounded-md xs:rounded-lg border border-base-300 bg-base-100 text-base-content focus:ring-2 focus:ring-primary outline-none transition-colors duration-500"
          ></textarea>

          <button
            type="submit"
            className="w-full py-2 xs:py-3 rounded-md xs:rounded-lg bg-primary text-primary-content font-medium hover:bg-primary-focus transition-colors duration-500 text-sm xs:text-base"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
