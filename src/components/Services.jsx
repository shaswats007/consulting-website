import { ChartBarIcon, DevicePhoneMobileIcon, LightBulbIcon } from '@heroicons/react/24/solid';

const services = [
  {
    title: 'Business Strategy',
    description: 'Crafting actionable plans to drive growth and achieve your business goals.',
    icon: LightBulbIcon,
    color: 'from-blue-400 to-blue-700',
  },
  {
    title: 'Digital Transformation',
    description: 'Leveraging technology to streamline operations and enhance customer experience.',
    icon: DevicePhoneMobileIcon,
    color: 'from-indigo-400 to-indigo-700',
  },
  {
    title: 'Market Analysis',
    description: 'Providing insights into market trends to inform strategic decisions.',
    icon: ChartBarIcon,
    color: 'from-teal-400 to-teal-700',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 px-4 bg-gradient-to-b from-white via-blue-50 to-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-12 text-center">Our Services</h2>
        <div className="grid gap-10 md:grid-cols-3">
          {services.map(({ title, description, icon: Icon, color }, i) => (
            <div
              key={title}
              className={
                `group rounded-2xl shadow-lg bg-gradient-to-br ${color} p-8 flex flex-col items-center text-white transform transition hover:scale-105 hover:shadow-2xl duration-300`
              }
            >
              <span className="mb-6 bg-white bg-opacity-20 rounded-full p-4">
                <Icon className="w-12 h-12 text-white drop-shadow" />
              </span>
              <h3 className="text-2xl font-semibold mb-2">{title}</h3>
              <p className="text-white/90 text-center">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
