import React from "react";

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  searchTerm,
  onSearchChange,
}) => {
  return (
    <div className="mb-6">
      <input
        type="text"
        placeholder="Search jobs by title, company, or location..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

export default SearchBar;
