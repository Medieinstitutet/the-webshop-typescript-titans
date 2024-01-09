import { Games } from "../../models/Games";

export async function getAllGames(): Promise<Games[]> {
  const apiKey = "7877e4283d094220957e6e64b98408ea";
  const url = `https://api.rawg.io/api/games?key=${apiKey}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    const data = await response.json();
    return data.results as Games[];
  } catch (error) {
    console.error("Failed to fetch games:", error);
    return [];
  }
}
