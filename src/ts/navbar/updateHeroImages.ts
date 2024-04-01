// import { getAllGames } from "../productPage/gameApi";

// export async function updateHeroImages(): Promise<void> {
//     const games = await getAllGames();
  
//     if (games.length > 1) {
//       const heroImage1 = document.querySelector('.landingpage-heroimage') as HTMLElement;
//       const heroImage2 = document.querySelector('.landingpage-heroimage2') as HTMLElement;
  
//       const selectedGame1 = games[Math.floor(Math.random() * games.length)];
//       const selectedGame2 = games[Math.floor(Math.random() * games.length)];
  
//       const imageUrl1 = selectedGame1.background_image;
//       const imageUrl2 = selectedGame2.background_image;
  
//       heroImage1.style.backgroundImage = `url(${imageUrl1})`;
//       heroImage2.style.backgroundImage = `url(${imageUrl2})`;
//     }
//   }
  
//   // Call this function when the page loads
  