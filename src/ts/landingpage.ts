import { getAllGames } from './gameApi';
import { Games } from './Games';

getAllGames().then(games => {
    games.forEach((game: Games) => {
        console.log(game.name);
    });
});