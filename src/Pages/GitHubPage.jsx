import { useState } from "react";
import GitHubProjects from "../components/github/GitHubProjects";

export default function GitHubPage() {
  const [sortBy, setSortBy] = useState("name");

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4 text-blue-600 dark:text-blue-300">
        Meine GitHub Projekte
      </h1>

      <label className="block text-gray-700 dark:text-gray-300 mb-2">
        Sortieren nach:
      </label>

      <select
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
        className="mb-6 p-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-blue-400"
      >
        <option value="name">Name</option>
        <option value="updated_at">Zuletzt aktualisiert</option>
        <option value="created_at">Erstellungsdatum</option>
      </select>

      <GitHubProjects username="ZirawanSalim" sortBy={sortBy} />
    </div>
  );
}
