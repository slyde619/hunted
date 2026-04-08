import { memo } from "react";
import { HiOutlineLocationMarker, HiOutlineClock } from "react-icons/hi";

const JobCard = memo(({ job }) => {
  const formattedDate = new Date(job.created_at * 1000).toLocaleDateString(
    "en-US",
    {
      month: "short",
      day: "numeric",
      year: "numeric",
    },
  );

  return (
    <article className="p-6 bg-white border border-slate-200 rounded-2xl hover:shadow-xl hover:border-amber-200 transition-all duration-300 flex flex-col gap-4">
      <div className="flex justify-between items-start">
        <div className="flex gap-4">
          {/* <div className="size-12 rounded-lg bg-slate-100 flex items-center justify-center border border-slate-200 overflow-hidden shrink-0 shadow-sm">
            <span className="text-xl font-bold text-slate-500 uppercase">
              {job.company_name?.charAt(0) || "J"}
            </span>
          </div> */}

          <div>
            <h3 className="font-bold text-slate-900 text-lg leading-tight line-clamp-1">
              {job.title}
            </h3>
            <p className="text-slate-500 text-sm font-medium">
              {job.company_name}
            </p>
          </div>
        </div>

        {job.remote && (
          <span className="bg-emerald-50 text-emerald-700 text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wide border border-emerald-100">
            Remote
          </span>
        )}
      </div>

      <div
        className="text-slate-600 text-sm line-clamp-3 h-16 leading-relaxed"
        dangerouslySetInnerHTML={{ __html: job.description }}
      />

      <div className="flex flex-wrap gap-4 mt-auto pt-4 border-t border-slate-100">
        <div className="flex items-center gap-1.5 text-slate-500 text-xs font-medium">
          <HiOutlineLocationMarker className="text-slate-400 text-sm" />
          {job.location || "Location Flexible"}
        </div>
        <div className="flex items-center gap-1.5 text-slate-500 text-xs font-medium">
          <HiOutlineClock className="text-slate-400 text-sm" />
          {formattedDate}
        </div>
      </div>

      <a
        href={job.url}
        target="_blank"
        rel="noreferrer"
        className="w-full py-3 bg-slate-900 text-white text-center rounded-xl font-semibold hover:bg-slate-800 active:scale-[0.98] transition-all"
      >
        Apply Now
      </a>
    </article>
  );
});

JobCard.displayName = "JobCard";

export default JobCard;
