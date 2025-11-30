export async function fetchGitHubProjects(username) {
  try {
    const res = await fetch(`https://api.github.com/users/${username}/repos`);
    return await res.json();
  } catch (error) {
    console.error("API Fehler:", error);
    return [];
  }
}
