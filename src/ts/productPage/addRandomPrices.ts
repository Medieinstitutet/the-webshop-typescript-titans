import { getAllGames } from './gameApi';
import { Games } from '../../models/Games'

interface GamesWithPrice extends Games {
    price: number;
  }
  
  export async function addRandomPrices(): Promise<GamesWithPrice[]> {
    
    const storedGames = localStorage.getItem('gamesWithPrices');
    if (storedGames) {
      return JSON.parse(storedGames) as GamesWithPrice[];
    }
  
    try {
      const games = await getAllGames();
  
      const gamesWithPrice: GamesWithPrice[] = games.map(game => ({
        ...game,

        price: Math.floor(Math.random() * (60 - 10 + 1)) + 10
      }));
  
      localStorage.setItem('gamesWithPrices', JSON.stringify(gamesWithPrice));
  
      return gamesWithPrice;
    } catch (error) {
      console.error("Error adding prices to games:", error);
      throw error;
    }
  }