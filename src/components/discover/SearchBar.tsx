import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
}

const SearchBar = ({ searchTerm, onSearchChange }: SearchBarProps) => {
  return (
    <div className="relative mb-6">
      <Search className="absolute left-3 top-3 h-5 w-5 text-black/50" />
      <Input
        type="text"
        placeholder="Search by name, skills, or bio"
        className="pl-10 input-field bg-white border-black/20 text-black placeholder:text-black/50 focus:border-purple-500"
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
