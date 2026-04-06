import { useContext } from "react";
import { useGitHubProjects } from "../../hooks/useGitHubProjects.jsx";
import ThemeContext from "../../contexts/ThemeContext";
import GitHubRepoGridWithSkeleton from "./GitHubRepoGridWithSkeleton";

export default function GitHubProjects({ username, sortBy }) {
  const { theme } = useContext(ThemeContext);
  const { repos, isLoading, error } = useGitHubProjects(username, sortBy);
  const reposWithLiveDemoCards = buildPortfolioCards(repos, username);

  return (
    <div>
      <h2 className={`text-xl font-bold mb-2 ${theme === "light" ? "text-gray-800" : "text-white"}`}>
        GitHub Projekte von {username}
      </h2>

      {error && <p className="text-red-500">❌ Fehler: {error}</p>}

      {!isLoading && reposWithLiveDemoCards.length === 0 && <p>Keine Projekte gefunden...</p>}

      <GitHubRepoGridWithSkeleton isLoading={isLoading} repos={reposWithLiveDemoCards} />
    </div>
  );
}

function buildPortfolioCards(repos, username) {
  const portfolioName = "zirawans-webseite";
  const f1Name = "f1-webapp";
  const armbandName = "zirawans-armbaender";
  const legacyBraceletName = "project-bracelet";
  const normalizeName = (value) => value.toLowerCase().replace(/\s+/g, "");

  const portfolioRepo = repos.find(
    (repo) => normalizeName(repo.name) === portfolioName
  );

  const reposWithoutPinned = repos.filter((repo) => {
    const normalized = normalizeName(repo.name);
    return normalized !== portfolioName
      && normalized !== f1Name
      && normalized !== armbandName
      && normalized !== legacyBraceletName;
  });

  const existingF1Repo = repos.find((repo) => normalizeName(repo.name) === f1Name);
  const existingArmbandRepo = repos.find(
    (repo) => normalizeName(repo.name) === armbandName
  );

  const cards = [];

  if (portfolioRepo) {
    cards.push(portfolioRepo);
  }

  cards.push(existingArmbandRepo ?? {
    id: "manual-zirawans-armbaender",
    name: "zirawans-armbaender",
    description: "Armband Onlineshop Projekt",
    html_url: `https://github.com/${username}/zirawans-armbaender`,
  });

  cards.push(existingF1Repo ?? {
    id: "manual-f1-webapp",
    name: "F1-webApp",
    description: "F1 Web App Projekt",
    html_url: `https://github.com/${username}/F1-webApp`,
  });

  cards.push(...reposWithoutPinned);

  return cards;
}
