const Contact = () => {
  return (
    <section
      id="contact"
      className="p-10 min-h-screen flex flex-col items-center bg-base-100 text-base-content"
    >
      <h2 className="text-3xl font-bold text-center">Contact Me</h2>
      <div className="w-20 h-1 bg-primary rounded-full mt-2 mb-6"></div>

      {/* Card wrapper */}
      <div className="w-full max-w-xl bg-base-200 rounded-2xl shadow-lg p-8">
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-3 rounded-lg border border-base-300 bg-base-100 text-base-content focus:ring-2 focus:ring-primary outline-none transition"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-3 rounded-lg border border-base-300 bg-base-100 text-base-content focus:ring-2 focus:ring-primary outline-none transition"
          />
          <textarea
            rows="5"
            placeholder="Your Message"
            className="w-full px-4 py-3 rounded-lg border border-base-300 bg-base-100 text-base-content focus:ring-2 focus:ring-primary outline-none transition"
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
