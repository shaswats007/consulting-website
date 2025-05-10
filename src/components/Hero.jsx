import { ArrowRightIcon } from '@heroicons/react/24/solid';

export default function Hero() {
  return (
    <section className="relative bg-black text-white pt-32 pb-20 px-6 min-h-screen flex flex-col justify-center">
      <div className="container mx-auto">
        <h1 className="text-6xl md:text-8xl font-bold leading-tight tracking-tight mb-12 max-w-5xl">
          Consulting
          <br />
          <span className="text-gray-400">Reimagined</span>
        </h1>
        
        <div className="grid md:grid-cols-2 gap-16 mt-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">It's Your Business</h2>
            <p className="text-xl text-gray-400 mb-8 max-w-lg">Stop paying excessive fees for mediocre advice. Quality consulting is attainable for businesses of all sizes.</p>
            
            <a href="#services" className="flex items-center group">
              <span className="text-xl font-medium mr-4 group-hover:mr-6 transition-all">View Services</span>
              <span className="rounded-full bg-white p-2 text-black">
                <ArrowRightIcon className="w-5 h-5" />
              </span>
            </a>
          </div>
          
          <div className="space-y-8">
            <div className="rounded-lg border border-gray-800 p-8 hover:border-gray-600 transition-colors">
              <h3 className="text-2xl font-bold mb-3">Strategy First</h3>
              <p className="text-gray-400">Clear direction and actionable insights that align with your goals.</p>
            </div>
            <div className="rounded-lg border border-gray-800 p-8 hover:border-gray-600 transition-colors">
              <h3 className="text-2xl font-bold mb-3">Data Driven</h3>
              <p className="text-gray-400">Decisions backed by analytics, not just intuition or outdated practices.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
