import { useEffect, useState } from "react";

export function useGitHubRepo(repoFullName) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!repoFullName) return;

    const fetchRepo = async () => {
      try {
        setLoading(true);

        const response = await fetch(
          `https://api.github.com/repos/${repoFullName}`,
        );

        if (!response.ok) {
          throw new Error("Error al obtener el repositorio");
        }

        const result = await response.json();

        setData({
          stars: result.stargazers_count,
          forks: result.forks_count,
          language: result.language,
          url: result.html_url,
        });
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRepo();
  }, [repoFullName]);

  return { data, loading, error };
}
