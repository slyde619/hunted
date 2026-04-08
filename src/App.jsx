import { useState } from "react";
import Search from "./components/Search";
import { useFetch } from "./hooks/useFetch";
import JobList from "./components/JobList";
import CategoryFilter from "./components/CategoryFilter";

export default function App() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("");
  const [page, setPage] = useState(0);

  const { data, isLoading, error, jobsCount } = useFetch(query, category, page);

  const handleQuery = (e) => {
    setQuery(e.target.value);
    setPage(0);
  };

  const handleCategory = (catValue) => {
    setCategory(catValue);
    setPage(0);
  };

  const hasMore = data.length < jobsCount && page < 4;

  return (
    <main className="max-w-7xl mx-auto p-6 min-h-screen flex flex-col">
      <header className="mb-10 text-center">
        <h1 className="text-4xl font-bold text-slate-100 mb-4 tracking-tight">
          Find your next role
        </h1>
        <div className="max-w-2xl mx-auto">
          <Search query={query} onQuery={handleQuery} />
        </div>
      </header>

      <CategoryFilter active={category} onSelect={handleCategory} />

      {!isLoading && data.length > 0 && (
        <div className="mb-6 flex justify-between items-center text-gray-300">
          <h2>
            Showing {data.length} of {jobsCount || data.length} jobs
          </h2>
        </div>
      )}

      <div className="grow">
        <JobList
          jobs={data}
          isLoading={isLoading && page === 0}
          error={error}
        />
      </div>

      {hasMore && (
        <div className="mt-12 mb-20 flex flex-col items-center gap-4">
          <button
            disabled={isLoading}
            onClick={() => setPage((prev) => prev + 1)}
            className={`px-10 py-4 bg-slate-900 text-white font-bold rounded-2xl transition-all shadow-lg
              ${
                isLoading
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-slate-800 hover:-translate-y-1 active:scale-95 shadow-slate-200"
              }`}
          >
            {isLoading ? "Loading more..." : "Load More Jobs"}
          </button>
          <p className="text-xs text-slate-400">Page {page + 1} of 5</p>
        </div>
      )}

      {/* Footer message  */}
      {!hasMore && data.length > 0 && !isLoading && (
        <p className="text-center text-slate-400 my-10 italic">
          You've reached the end of the listings.
        </p>
      )}
    </main>
  );
}
