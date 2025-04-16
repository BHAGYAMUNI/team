import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

interface FilterPanelProps {
  skills: string[];
  locations: string[];
  selectedSkills: string[];
  selectedLocations: string[];
  availableOnly: boolean;
  onToggleSkill: (skill: string) => void;
  onToggleLocation: (location: string) => void;
  onToggleAvailability: () => void;
  onClearFilters: () => void;
}

const FilterPanel = ({
  skills,
  locations,
  selectedSkills,
  selectedLocations,
  availableOnly,
  onToggleSkill,
  onToggleLocation,
  onToggleAvailability,
  onClearFilters,
}: FilterPanelProps) => {
  return (
    <div className="mb-6 bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-sm animate-fade-in text-black">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-black">Filters</h2>
        <Button
          variant="ghost"
          size="sm"
          onClick={onClearFilters}
          disabled={selectedSkills.length === 0 && selectedLocations.length === 0 && !availableOnly}
        >
          Clear all
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label className="mb-2 block">Skills</Label>
          <div className="flex flex-wrap gap-2">
            {skills.map(skill => (
              <button
                key={skill}
                className={`text-sm px-3 py-1 rounded-full transition-colors ${
                  selectedSkills.includes(skill)
                    ? "bg-primary text-white"
                    : "bg-gray-100 hover:bg-gray-200"
                }`}
                onClick={() => onToggleSkill(skill)}
              >
                {skill}
              </button>
            ))}
          </div>
        </div>

        <div>
          <Label className="mb-2 block">Location</Label>
          <div className="flex flex-wrap gap-2">
            {locations.map(location => (
              <button
                key={location}
                className={`text-sm px-3 py-1 rounded-full transition-colors ${
                  selectedLocations.includes(location)
                    ? "bg-primary text-white"
                    : "bg-gray-100 hover:bg-gray-200"
                }`}
                onClick={() => onToggleLocation(location)}
              >
                {location}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-4">
        <button
          className={`text-sm px-3 py-1 rounded-full transition-colors ${
            availableOnly
              ? "bg-primary text-white"
              : "bg-gray-100 hover:bg-gray-200"
          }`}
          onClick={onToggleAvailability}
        >
          Available for collaboration
        </button>
      </div>
    </div>
  );
};

export default FilterPanel;
