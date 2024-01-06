import { Games } from "../../models/Games";
import { getAllGames } from "./gameApi";

// getAllGames().then((games) => {
//   games.forEach((genres: Games) => {
//     console.log();
//   });
// });

getAllGames().then((games) => {
  games.forEach((game: Games) => {
    console.log(game.genres[0].name);
  });
});
