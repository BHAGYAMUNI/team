import { X } from "lucide-react";

interface AppliedFiltersProps {
  selectedSkills: string[];
  selectedLocations: string[];
  availableOnly: boolean;
  onToggleSkill: (skill: string) => void;
  onToggleLocation: (location: string) => void;
  onToggleAvailability: () => void;
  onClearFilters: () => void;
}

const AppliedFilters = ({
  selectedSkills,
  selectedLocations,
  availableOnly,
  onToggleSkill,
  onToggleLocation,
  onToggleAvailability,
  onClearFilters,
}: AppliedFiltersProps) => {
  if (selectedSkills.length === 0 && selectedLocations.length === 0 && !availableOnly) {
    return null;
  }

  return (
    <div className="flex flex-wrap gap-2 mb-6">
      {selectedSkills.map(skill => (
        <div key={skill} className="flex items-center bg-gray-100 text-sm px-3 py-1 rounded-full text-black">
          {skill}
          <button onClick={() => onToggleSkill(skill)} className="ml-2">
            <X className="h-3 w-3" />
          </button>
        </div>
      ))}
      {selectedLocations.map(location => (
        <div key={location} className="flex items-center bg-gray-100 text-sm px-3 py-1 rounded-full">
          {location}
          <button onClick={() => onToggleLocation(location)} className="ml-2">
            <X className="h-3 w-3" />
          </button>
        </div>
      ))}
      {availableOnly && (
        <div className="flex items-center bg-gray-100 text-sm px-3 py-1 rounded-full">
          Available
          <button onClick={onToggleAvailability} className="ml-2">
            <X className="h-3 w-3" />
          </button>
        </div>
      )}
      <button 
        onClick={onClearFilters} 
        className="text-primary text-sm hover:underline"
      >
        Clear all
      </button>
    </div>
  );
};

export default AppliedFilters;
