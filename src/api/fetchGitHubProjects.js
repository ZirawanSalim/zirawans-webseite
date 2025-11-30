export async function fetchGitHubProjects(username) {
  const url = `https://api.github.com/users/${username}/repos`;

  try {
    const res = await fetch(url);
    return await res.json();
  } catch (error) {
    console.error("API Fehler:", error);
    return [];
  }
}
