export default function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <span className="text-2xl font-bold text-blue-800">ConsultPro</span>
        <nav className="space-x-6">
          <a href="#services" className="text-gray-700 hover:text-blue-700 font-medium">Services</a>
          <a href="#about" className="text-gray-700 hover:text-blue-700 font-medium">About</a>
          <a href="#contact" className="text-gray-700 hover:text-blue-700 font-medium">Contact</a>
        </nav>
      </div>
    </header>
  );
}
