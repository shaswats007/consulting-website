import { ChartBarIcon, DevicePhoneMobileIcon, LightBulbIcon } from '@heroicons/react/24/solid';

const services = [
  {
    title: 'Business Strategy',
    description: 'Crafting actionable plans to drive growth and achieve your business goals.',
    icon: LightBulbIcon,
  },
  {
    title: 'Digital Transformation',
    description: 'Leveraging technology to streamline operations and enhance customer experience.',
    icon: DevicePhoneMobileIcon,
  },
  {
    title: 'Market Analysis',
    description: 'Providing insights into market trends to inform strategic decisions.',
    icon: ChartBarIcon,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 bg-black text-white">
      <div className="container mx-auto">
        <div className="max-w-4xl mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-12">A powerful suite of consulting services</h2>
          <p className="text-xl text-gray-400">Each service is designed to address specific business challenges and opportunities.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {services.map(({ title, description, icon: Icon }, i) => (
            <div
              key={title}
              className="border border-gray-800 p-10 hover:border-gray-600 transition-colors group"
            >
              <div className="mb-8 opacity-80 group-hover:opacity-100 transition-opacity">
                <Icon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{title}</h3>
              <p className="text-gray-400">{description}</p>
              <div className="mt-8 h-1 w-12 bg-white transition-all duration-300 group-hover:w-20"></div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-20">
          <a href="#contact" className="border border-white px-8 py-4 text-lg font-medium hover:bg-white hover:text-black transition-colors">
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
}
