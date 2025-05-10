export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-black text-white border-t border-gray-800">
      <div className="container mx-auto">
        <div className="max-w-xl mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-8">Get in Touch</h2>
          <p className="text-xl text-gray-400">
            Ready to transform your business? Our team is ready to help you achieve your goals.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-16">
          <form className="space-y-8">
            <div className="space-y-1">
              <label htmlFor="name" className="text-sm text-gray-400 uppercase tracking-wide">Name</label>
              <input 
                type="text" 
                id="name"
                className="w-full bg-transparent border-b border-gray-800 py-3 focus:outline-none focus:border-gray-500 text-white transition-colors" 
              />
            </div>
            
            <div className="space-y-1">
              <label htmlFor="email" className="text-sm text-gray-400 uppercase tracking-wide">Email</label>
              <input 
                type="email" 
                id="email"
                className="w-full bg-transparent border-b border-gray-800 py-3 focus:outline-none focus:border-gray-500 text-white transition-colors" 
              />
            </div>
            
            <div className="space-y-1">
              <label htmlFor="message" className="text-sm text-gray-400 uppercase tracking-wide">Message</label>
              <textarea 
                id="message"
                rows="4" 
                className="w-full bg-transparent border-b border-gray-800 py-3 focus:outline-none focus:border-gray-500 text-white transition-colors"
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              className="border border-white px-8 py-4 text-lg font-medium hover:bg-white hover:text-black transition-colors"
            >
              Send Message
            </button>
          </form>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-3">Email</h3>
              <p className="text-gray-400">contact@consultpro.com</p>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-3">Phone</h3>
              <p className="text-gray-400">+1 (555) 123-4567</p>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-3">Address</h3>
              <p className="text-gray-400">
                123 Business Avenue<br />
                Suite 500<br />
                San Francisco, CA 94108
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}