import { HiOutlineSearch, HiX } from "react-icons/hi";

const Search = ({ query, onQuery }) => {
  const handleClear = () => {
    onQuery({ target: { value: "" } });
  };

  return (
    <div className="relative w-full group">
      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-amber-500 transition-colors duration-200">
        <HiOutlineSearch size={20} />
      </div>

      <input
        type="text"
        value={query}
        onChange={onQuery}
        placeholder="Search jobs..."
        className="w-full pl-12 pr-12 py-3.5 rounded-full border-2 border-slate-200 bg-white 
                   outline-none transition-all duration-200 
                   placeholder:text-slate-400
                   focus:border-amber-400 focus:ring-4 focus:ring-amber-400/10"
      />

      {query && (
        <button
          onClick={handleClear}
          type="button"
          className="absolute right-4 top-1/2 -translate-y-1/2 p-1 rounded-lg
                     hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-all"
          aria-label="Clear search"
        >
          <HiX size={18} />
        </button>
      )}
    </div>
  );
};

export default Search;
