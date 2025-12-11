import GitHubRepoCard from "./GitHubRepoCard";

function GitHubRepoGrid({ repos }) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {repos.map(repo => (
        <GitHubRepoCard key={repo.id} {...repo} />
      ))}
    </div>
  );
}

export default GitHubRepoGrid;
