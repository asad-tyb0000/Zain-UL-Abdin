import type { Job } from "@/data/profile";

// Flat bullet list, or grouped bullets (title + sub-items) when a job has groups.
export default function JobPoints({ job }: { job: Job }) {
  return (
    <>
      <h4>{job.pointsLabel}</h4>
      {job.points.length > 0 && (
        <ul className="points">
          {job.points.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
      )}
      {job.groups && (
        <div className="groups">
          {job.groups.map((g) => (
            <div key={g.title}>
              <h5>{g.title}</h5>
              <ul className="points">
                {g.items.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
