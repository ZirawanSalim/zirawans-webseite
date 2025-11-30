import { useEffect, useState } from "react";
import { fetchGitHubProjects } from "../api/fetchGitHubProjects";

export function useGitHubProjects(username, sortBy) {
  const [repos, setRepos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function load() {
      setIsLoading(true);
      setError(null);

      try {
        let data = await fetchGitHubProjects(username);

        if (!Array.isArray(data)) {
          throw new Error("Ungültige GitHub Antwort");
        }

        data = sortRepositories(data, sortBy);
        setRepos(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    load();
  }, [username, sortBy]);

  return { repos, isLoading, error };
}

function sortRepositories(repos, sortBy) {
  return [...repos].sort((a, b) => {
    if (sortBy === "name") return a.name.localeCompare(b.name);
    if (sortBy === "updated_at") return new Date(b.updated_at) - new Date(a.updated_at);
    if (sortBy === "created_at") return new Date(b.created_at) - new Date(a.created_at);
    return 0;
  });
}
