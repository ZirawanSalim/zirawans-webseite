import GitHubRepoSkeleton from "./GitHubRepoSkeleton";

export default function GitHubSkeletonGrid() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: 6 }).map((_, index) => (
        <GitHubRepoSkeleton key={index} />
      ))}
    </div>
  );
}
