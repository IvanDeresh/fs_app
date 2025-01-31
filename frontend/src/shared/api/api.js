export async function fetchSuperHeroes() {
  return await fetch("http://localhost:3003/superheroes")
    .then((res) => res.json())
    .catch((err) => console.error(err));
}
export async function createSuperHeroes(name) {
  try {
    const response = await fetch("http://localhost:3003/superheroes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name }),
    });
    if (!response.ok) throw new Error("Failed to create superhero");
    return await response.json();
  } catch (err) {
    console.error(err);
  }
}
