export default function Contact() {
  return (
    <section id="contact" className="py-16 px-4 bg-white">
      <div className="max-w-lg mx-auto">
        <h2 className="text-3xl font-bold text-blue-900 mb-4 text-center">Contact Us</h2>
        <form className="space-y-6">
          <input type="text" placeholder="Your Name" className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-500" />
          <input type="email" placeholder="Your Email" className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-500" />
          <textarea placeholder="Your Message" rows="4" className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-500"></textarea>
          <button type="submit" className="w-full bg-blue-700 text-white py-3 rounded font-semibold hover:bg-blue-800 transition">Send Message</button>
        </form>
      </div>
    </section>
  );
}
