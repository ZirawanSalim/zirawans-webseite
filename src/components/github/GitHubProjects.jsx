import { useGitHubProjects } from "../../hooks/useGitHubProjects.jsx";
import GitHubRepoGridWithSkeleton from "./GitHubRepoGridWithSkeleton";

export default function GitHubProjects({ username, sortBy }) {
  const { repos, isLoading, error } = useGitHubProjects(username, sortBy);

  return (
    <div>
      <h2 className="text-xl font-bold">GitHub Projekte von {username}</h2>

      {error && <p className="text-red-500">❌ Fehler: {error}</p>}

      {!isLoading && repos.length === 0 && <p>Keine Projekte gefunden...</p>}

      <GitHubRepoGridWithSkeleton isLoading={isLoading} repos={repos} />
    </div>
  );
}
