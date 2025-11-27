import { useEffect, useState } from "react";
import { fetchGitHubProjects } from "../../api/apiGitHub";

export default function GitHubProjects({ username, sortBy }) {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    async function loadData() {
      let repos = await fetchGitHubProjects(username);

      
      repos = sortRepositories(repos, sortBy);

      setRepositories(repos);
    }

    loadData();
  }, [username, sortBy]);

  return (
    <div>
      <h2 className="text-xl font-bold">GitHub Projekte von {username}</h2>

      {repositories.length === 0 && <p>Keine Projekte gefunden...</p>}

     <ul className="space-y-4">
  {repositories.map((repo) => (
    <li
      key={repo.id}
      className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-md transition"
    >
      <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-300">
        {repo.name}
      </h3>

      <p className="text-gray-700 dark:text-gray-300 mb-2">
        {repo.description || "Keine Beschreibung"}
      </p>

      <a
        href={repo.html_url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline"
      >
        ➜ Zum Repository
      </a>
    </li>
  ))}
</ul>

    </div>
  );
}


function sortRepositories(repos, sortBy) {
  return [...repos].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    }

    if (sortBy === "updated_at") {
      return new Date(b.updated_at) - new Date(a.updated_at);
    }

    if (sortBy === "created_at") {
      return new Date(b.created_at) - new Date(a.created_at);
    }

    return 0;
  });
}
