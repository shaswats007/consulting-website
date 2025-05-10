export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-black text-white border-t border-gray-800">
      <div className="container mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-5xl md:text-6xl font-bold mb-8">Superior Expertise</h2>
          <p className="text-gray-400 text-xl mb-10">
            ConsultPro is a collective of industry-leading experts who create innovative strategies for businesses ready to transform their operations and growth trajectory.
          </p>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <p className="text-4xl font-bold mb-2">15+</p>
              <p className="text-gray-400">Years of experience</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">250+</p>
              <p className="text-gray-400">Successful projects</p>
            </div>
          </div>
        </div>
        <div className="bg-gray-900 aspect-square flex items-center justify-center">
          <p className="text-5xl font-bold tracking-tight">CONSULTPRO</p>
        </div>
      </div>
    </section>
  );
}
