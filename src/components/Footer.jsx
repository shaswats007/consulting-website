export default function Footer() {
  return (
    <footer className="py-12 px-6 bg-black text-white border-t border-gray-800">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div>
            <p className="text-2xl font-bold tracking-tight mb-2">CONSULTPRO</p>
            <p className="text-gray-400 text-sm">© {new Date().getFullYear()} ConsultPro. All rights reserved.</p>
          </div>
          
          <div className="flex gap-8 mt-6 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Twitter</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
