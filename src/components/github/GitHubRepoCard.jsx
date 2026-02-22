export default function GitHubRepoCard({ name, description, html_url }) {
  return (
    <div className="p-5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-md rounded-xl hover:shadow-xl transition-shadow duration-200">
      <h3 className="text-xl font-bold text-blue-600 dark:text-blue-300">
        {name}
      </h3>

      <p className="text-gray-700 dark:text-gray-300 mt-1 mb-3">
        {description || "Keine Beschreibung"}
      </p>

      <a
        href={html_url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 dark:text-blue-400 hover:underline"
      >
        ➜ Zum Repository
      </a>
    </div>
  );
}
