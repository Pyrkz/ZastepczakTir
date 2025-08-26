interface CoverageAreasProps {
  regions: string[];
}

export const CoverageAreas = ({ regions }: CoverageAreasProps) => {
  return (
    <div className="space-y-4">
      <h3 className="text-base font-semibold text-gray-900">Działamy w całej Polsce</h3>
      <div className="grid grid-cols-2 gap-x-4 gap-y-1">
        {regions.map((region) => (
          <div 
            key={region} 
            className="text-sm text-gray-800 hover:text-[#A4833B] hover:bg-gray-50 transition-all duration-200 py-1 px-2 -mx-2 rounded cursor-pointer"
          >
            {region}
          </div>
        ))}
      </div>
    </div>
  );
};