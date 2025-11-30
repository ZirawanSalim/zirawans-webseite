import { useEffect, useState } from "react";
import { fetchGitHubLanguages } from "../api/fetchGitHubLanguages";

export function useGitHubLanguages(user, repo) {
  const [languages, setLanguages] = useState({});

  useEffect(() => {
    async function load() {
      const langs = await fetchGitHubLanguages(user, repo);
      setLanguages(langs);
    }
    load();
  }, [user, repo]);

  return languages;
}
