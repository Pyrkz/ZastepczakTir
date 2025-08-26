import Link from 'next/link';

export const Copyright = () => {
  return (
    <div className="bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <p>© 2025 ZastępczakTir.pl. Wszystkie prawa zastrzeżone.</p>
            <div className="flex items-center gap-4">
              <Link href="/polityka-prywatnosci" className="hover:text-gray-700 transition-colors">
                Polityka prywatności
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <span>Powered by</span>
            <Link 
              href="https://sitefy.pl" 
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-700 transition-colors font-medium"
            >
              Sitefy.pl
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};