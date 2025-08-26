interface InsuranceCompaniesProps {
  insurers: string[];
}

export const InsuranceCompanies = ({ insurers }: InsuranceCompaniesProps) => {
  return (
    <div className="space-y-4">
      <h3 className="text-base font-semibold text-gray-900">Ubezpieczyciele</h3>
      <div className="grid grid-cols-2 gap-x-4 gap-y-1">
        {insurers.map((insurer) => (
          <div 
            key={insurer} 
            className="text-sm text-gray-800 hover:text-[#A4833B] hover:bg-gray-50 transition-all duration-200 py-1 px-2 -mx-2 rounded cursor-pointer"
          >
            {insurer}
          </div>
        ))}
      </div>
    </div>
  );
};