import { getAllGames } from './gameApi';
import { Games } from '../../models/Games'

interface GamesWithPrice extends Games {
    price: number;
  }//Förlänger interfacet med ny egenskap och nytt namn så att pris går att lägga till i varje objekt
  
  export async function addRandomPrices(): Promise<GamesWithPrice[]> {
    //Om det finns spel från tidigare session så skickar functionen dessa
    const storedGames = localStorage.getItem('gamesWithPrices');
    if (storedGames) {
      return JSON.parse(storedGames) as GamesWithPrice[];
    }
    //Om det inte finns spel lagrade i localstorage så kommer spelen att hämtas från api:et och ett randompris läggs in i varje spelobject, 
    //varje spel läggs in i det nya interfacet med pris. 
    try {
      const games = await getAllGames();
  
      const gamesWithPrice: GamesWithPrice[] = games.map(game => ({
        ...game,

        price: Math.floor(Math.random() * (60 - 10 + 1)) + 10
      }));
      
  
      localStorage.setItem('gamesWithPrices', JSON.stringify(gamesWithPrice));
  
      return gamesWithPrice;
      //Spel med pris läggs in i localstorage och funktionen returnerar spel med priser

    } catch (error) {
      console.error("Error adding prices to games:", error);
      throw error;
    }
  }