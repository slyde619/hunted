export const JobSkeleton = () => (
  <div className="p-6 bg-slate-50 border border-slate-100 rounded-2xl animate-pulse">
    <div className="flex gap-4 mb-4">
      <div className="size-12 bg-slate-200 rounded-lg"></div>
      <div className="flex-1 space-y-2">
        <div className="h-4 bg-slate-200 rounded w-3/4"></div>
        <div className="h-3 bg-slate-200 rounded w-1/2"></div>
      </div>
    </div>
    <div className="space-y-2">
      <div className="h-3 bg-slate-200 rounded"></div>
      <div className="h-3 bg-slate-200 rounded w-5/6"></div>
    </div>
  </div>
);
