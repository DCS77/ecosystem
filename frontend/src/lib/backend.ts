export async function get<T>(path: string): Promise<T> {
  const response = await fetch(`${import.meta.env.VITE_TEST_BACKEND}/${path}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return (await response.json()) as T;
}
