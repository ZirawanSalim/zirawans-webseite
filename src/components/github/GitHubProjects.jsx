import { useGitHubProjects } from "../../hooks/useGitHubProjects.jsx";

export default function GitHubProjects({ username, sortBy }) {
  const { repos, isLoading, error } = useGitHubProjects(username, sortBy);

  return (
    <div>
      <h2 className="text-xl font-bold">GitHub Projekte von {username}</h2>

      {isLoading && <p>⏳ Lädt...</p>}
      {error && <p className="text-red-500">❌ Fehler: {error}</p>}

      {!isLoading && repos.length === 0 && <p>Keine Projekte gefunden...</p>}

      <ul className="space-y-4">
        {repos.map((repo) => (
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
