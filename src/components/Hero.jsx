import { ArrowRightIcon } from '@heroicons/react/24/solid';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-800 via-blue-600 to-indigo-700 py-28 px-4 text-center flex items-center justify-center min-h-[60vh]">
      <div className="absolute inset-0 opacity-30 bg-[url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center pointer-events-none" />
      <div className="relative z-10 max-w-3xl mx-auto text-white animate-fade-in">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 drop-shadow-lg">
          Accelerate Your Business Success
        </h1>
        <p className="text-xl md:text-2xl mb-10 font-medium drop-shadow">
          World-class consulting for growth, innovation, and leadership.
        </p>
        <a href="#contact" className="inline-flex items-center gap-2 bg-white text-blue-800 px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-blue-700 hover:text-white transition-all duration-200 text-lg animate-bounce">
          Get Started
          <ArrowRightIcon className="w-5 h-5" />
        </a>
        <div className="bg-blue-500 text-white p-8 text-2xl">If this is blue, Tailwind works in React!</div>

      </div>
    </section>
  );
}
