


export async function fetchGitHubProjects(username) {
  try {
    const response = await fetch(`https://api.github.com/users/${username}/repos`);

    if (!response.ok) {
      throw new Error(`Fehler beim Laden der Repositories: ${response.status}`);
    }

    const data = await response.json();
    return data; 
  } catch (error) {
    console.error("GitHub API Fehler:", error.message);
    return []; 
  }
}


