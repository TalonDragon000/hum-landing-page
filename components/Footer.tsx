export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="section-container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-white mb-2">Hum</h3>
            <p className="text-sm">Community-first chat for Web3 natives</p>
          </div>

          <div className="flex gap-6 text-sm">
            <a href="#" className="hover:text-white transition-colors">
              X (Twitter)
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Discord
            </a>
            <a href="#" className="hover:text-white transition-colors">
              GitHub
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm">
          <p>© {currentYear} Hum. Building the future of Web3 communities.</p>
        </div>
      </div>
    </footer>
  );
}
