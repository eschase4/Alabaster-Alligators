console.log("this works!");

// genres, length, format(tv/movie),

// draft short survey to determine which genre to select.

// API 1 watch mode, input genre to get a result of  Movies, randomly grab a movie from results

// API 2 OMDB, input randomly selected movie to get Plot and score.

// if user has seen movie we re-run function to get another random movie

// Horror: Dark places and unexplained things like forests, graveyards, castles, abandoned structures or buildings, locked doors to remove rooms, blood, gore, or killing instruments.
// Sci-Fi: Outer space or futuristic items like spaceships or laser guns
// Sports: Sports arenas, teams, athletes, and sports equipment
// War: Different vehicles such as tanks, planes, or realistic battlefields
// Westerns: Cattle, stage coaches, saloons, ten-gallon hats, the frontier, or revolvers
// Crime: Detectives, gangsters, criminals, fugitives, or inmates
// Action: Chase sequences, extended fight scenes, guns, races against time
// Comedy: Slapstick humor, witty dialogue, rites of passage, gross-out humor, fish-out-of-water, cross-dressing, mistaken identity
// Drama: a self-sacrificial maternal figure
// Musicals: singing and dancing
// Romance: different stages of “falling in love” with a subsequent break-up and reconciliation, true love, fairy tales, forbidden love
// Mystery
$(function () {
  // Watch Mode list titles api call to filter out movies from list Watch Mode

  var watchKey = "GHWA9Jkmbwm8azDdX0w8d8YYB3Omku0yVowWVtgD";
  var watchMode = `https://api.watchmode.com/v1/list-titles/?apiKey=${watchKey}&source_ids=&genres=1,39`;
  console.log(watchMode);

  //  TMDB api Call, uses IMDB id input to search for and find a move. Returns an Object with movie info inside

  var tmdbKey = "df5b060aa473758dc356cd7a2a5312f4";
  var movieId = "tt5746054";
  var tmdb = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${tmdbKey}&language=en-US`;
  console.log(tmdb);
});
