import { useEffect, useState } from "react";

export function useFetch(query, category, page) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [jobsCount, setJobsCount] = useState(0);

  useEffect(() => {
    setData([]);
  }, [query, category]);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchQuery() {
      try {
        setIsLoading(true);
        setError("");

        const params = new URLSearchParams();
        if (query) params.append("search", query);
        if (category) params.append("category", category);

        params.append("language", "en");
        params.append("page", (page + 1).toString());

        const response = await fetch(
          `https://www.arbeitnow.com/api/job-board-api?${params.toString()}`,
          { signal: controller.signal },
        );

        if (!response.ok) throw new Error("Could not fetch jobs.");

        const result = await response.json();
        const rawJobs = result.data || [];

        // Strict Filter: Remove any jobs with German-specific markers
        const englishOnly = rawJobs.filter((job) => {
          const title = job.title.toLowerCase();
          const desc = job.description.toLowerCase();

          // Check for German gender markers (m/w/d, :in, *in)
          // and common German articles (der, die, das, bei)
          const hasGermanMarkers =
            title.includes("(m/w/d)") ||
            title.includes(":in") ||
            title.includes("*in") ||
            desc.includes(" bei ") ||
            desc.includes(" wir suchen ");

          return !hasGermanMarkers;
        });

        setData((prev) =>
          page === 0 ? englishOnly : [...prev, ...englishOnly],
        );

        setJobsCount(result.meta?.total || 0);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err.message || "An unexpected error occurred");
        }
      } finally {
        setIsLoading(false);
      }
    }

    const delay = query ? 500 : 0;
    const timerId = setTimeout(fetchQuery, delay);

    return () => {
      clearTimeout(timerId);
      controller.abort();
    };
  }, [query, category, page]);

  return { data, isLoading, error, jobsCount };
}
