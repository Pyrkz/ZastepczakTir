interface CallToActionProps {
  phoneNumber: string;
  onPhoneCall: (phoneNumber: string) => void;
  onScrollToContact: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export const CallToAction = ({ phoneNumber, onPhoneCall, onScrollToContact }: CallToActionProps) => {
  return (
    <div className="mt-16 pt-8 border-t border-gray-100">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Potrzebujesz auta zastępczego?
          </h3>
          <p className="text-sm text-gray-600">
            Skontaktuj się z nami już dziś i otrzymaj pomoc w 24h
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={() => onPhoneCall(phoneNumber)}
            className="px-6 py-3 bg-gradient-to-r from-[#A4833B] to-[#dfbc7a] text-white font-medium text-sm rounded-full shadow-sm transform transition-all duration-300 ease-in-out hover:shadow-lg hover:scale-105 text-center cursor-pointer border-none"
            style={{ color: '#ffffff !important' }}
            type="button"
          >
            Zadzwoń teraz
          </button>
          <a
            href="#kontakt"
            onClick={onScrollToContact}
            className="px-6 py-3 border border-gray-300 text-gray-700 font-medium text-sm rounded-full hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 text-center cursor-pointer"
          >
            Formularz kontaktowy
          </a>
        </div>
      </div>
    </div>
  );
};