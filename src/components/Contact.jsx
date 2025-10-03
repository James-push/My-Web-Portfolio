const Contact = () => {
  return (
    <section
      id="contact"
      className="pt-4 pb-0 min-h-screen flex flex-col items-center bg-base-100 text-base-content transition-colors duration-500"
      style={{ marginTop: "4rem" }}
    >
      <h2 className="text-6xl font-bold text-center">Contact Me</h2>
      <div className="w-20 h-1 bg-primary rounded-full mt-4 mb-9"></div>
  <div className="w-full max-w-2xl bg-base-200 rounded-2xl shadow-lg p-8 transition-colors duration-500">
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full px-4 py-3 rounded-lg border border-base-300 bg-base-100 text-base-content focus:ring-2 focus:ring-primary outline-none transition-colors duration-500 placeholder:duration-100"
          />
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-3 rounded-lg border border-base-300 bg-base-100 text-base-content focus:ring-2 focus:ring-primary outline-none transition-colors duration-500 placeholder:duration-100"
          />
          <textarea
            rows="5"
            placeholder="Write a message"
            className="w-full px-4 py-3 rounded-lg border border-base-300 bg-base-100 text-base-content focus:ring-2 focus:ring-primary outline-none transition-colors duration-500 placeholder:duration-100"
          ></textarea>

          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-primary text-primary-content font-medium hover:bg-primary-focus transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
