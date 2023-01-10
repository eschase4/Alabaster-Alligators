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

  var action = "1,39,2,19,18,41,";

  var watchKey = "GHWA9Jkmbwm8azDdX0w8d8YYB3Omku0yVowWVtgD";
  var watchMode = `https://api.watchmode.com/v1/list-titles/?apiKey=GHWA9Jkmbwm8azDdX0w8d8YYB3Omku0yVowWVtgD&source_ids=&genres=1,39,2,19,18,41,&types=movie`;
  console.log(watchMode);

  //  TMDB api Call, uses IMDB id input to search for and find a move. Returns an Object with movie info inside

  var tmdbKey = "df5b060aa473758dc356cd7a2a5312f4";
  var movieId = "tt14040910";
  var tmdb = `https://api.themoviedb.org/3/movie/tt12262116?api_key=df5b060aa473758dc356cd7a2a5312f4&language=en-US`;
  console.log(tmdb);
});

// Do you want to watch something Cheesy
// Are you in a mood to laugh
// Do you want to see something Family friendly
// Would you like to watch a Movie or a Tv show?
// Do you wanna watch a classic or a recent program?

// Do a little excitement??
// #ACTION
// {"id":1,"name":"Action","tmdb_id":28};
// {"id":39,"name":"Action & Adventure","tmdb_id":10759}
// {"id":2,"name":"Adventure","tmdb_id":12},
// {"id":19,"name":"Western","tmdb_id":37}
// ,{"id":18,"name":"War","tmdb_id":10752},
// {"id":41,"name":"War & Politics","tmdb_id":10768}

// Do you wanna explore the past?
// #History
// // {"id":31,"name":"Biography","tmdb_id":null},
// // {"id":10,"name":"History","tmdb_id":36},

// Do you wanna laugh?
// #Comedy
// {"id":4,"name":"Comedy","tmdb_id":35},

// Are you in the mood to learn?
// #documentary
// {"id":6,"name":"Documentary","tmdb_id":99},
// {"id":36,"name":"Nature","tmdb_id":null},

// Do you wanna see the world just a little closer?
// #Reality
// {"id":34,"name":"Food","tmdb_id":null},
// {"id":28,"name":"Game Show","tmdb_id":null},
// {"id":22,"name":"News","tmdb_id":10763},
// {"id":23,"name":"Reality","tmdb_id":10764},
// {"id":26,"name":"Talk","tmdb_id":10767},
// {"id":35,"name":"Travel","tmdb_id":null},

// Do you need inspiration?
// #Sports
// {"id":29,"name":"Sports","tmdb_id":null},

// Do you want to see something Family friendly
// #Family Friendly
// {"id":8,"name":"Family","tmdb_id":10751},
// {"id":21,"name":"Kids","tmdb_id":10762},

// Elves?
// #fantasy
// {"id":9,"name":"Fantasy","tmdb_id":14}

// Do you wanna be on the edge of your seat?
// #Drama
// {"id":7,"name":"Drama","tmdb_id":18}

// Do you wanna be Scared?
// #Horror
// {"id":11,"name":"Horror","tmdb_id":27}

// Do you wanna fall in love?
// #Romance
// {"id":14,"name":"Romance","tmdb_id":10749},

// Do a little excitement??
// Whodunnit?
// #Thriller
// {"id":17,"name":"Thriller","tmdb_id":53}
// {"id":13,"name":"Mystery","tmdb_id":9648}
// {"id":5,"name":"Crime","tmdb_id":80},

// are you sick of reality?
// #animation
// {"id":3,"name":"Animation","tmdb_id":16},

// Somewhere between Pikachu and murder?
// #anime
// {"id":33,"name":"Anime","tmdb_id":null},

// Do you want to be spooked?
// Supernatural
// {"id":37,"name":"Supernatural","tmdb_id":null}

// Do you want to sing and Dance?
// #Music
// {"id":12,"name":"Music","tmdb_id":10402},
// {"id":32,"name":"Musical","tmdb_id":null},

// Do you want to step outside of reality?
// #Sci-Fi
// {"id":40,"name":"Sci-Fi & Fantasy","tmdb_id":10765},
// {"id":15,"name":"Science Fiction","tmdb_id":878},

// Do you want to watch something Cheesy
// #SOap
// {"id":25,"name":"Soap","tmdb_id":10766},
