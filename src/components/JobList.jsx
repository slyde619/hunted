import JobCard from "./JobCard";
import { JobSkeleton } from "./JobSkeleton";

const JobList = ({ jobs, isLoading, error }) => {
  // Loading State
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <JobSkeleton key={i} />
        ))}
      </div>
    );
  }

  // Error State
  if (error) {
    return (
      <div className="text-center py-20 bg-red-50 rounded-3xl border border-red-100">
        <p className="text-red-600 font-medium">Oops! {error}</p>
      </div>
    );
  }

  // Empty State
  if (jobs.length === 0) {
    return (
      <div className="text-center py-10 border-2 max-w-md mx-auto border-slate-200 rounded-3xl">
        <h3 className="text-xl font-semibold text-slate-800">No jobs found</h3>
        <p className="text-slate-500">
          Try adjusting your search or category filters.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {jobs.map((job) => (
        <JobCard key={job.slug} job={job} />
      ))}
    </div>
  );
};

export default JobList;
