

// genres, length, format(tv/movie),

// draft short survey to determine which genre to select.

// API 1 watch mode, input genre to get a result of  Movies, randomly grab a movie from results

// API 2 OMDB, input randomly selected movie to get Plot and score.

// if user has seen movie we re-run function to get another random movie
// $("#movie").click(function get(event) {
//   event.preventDefault();
//   console.log("you are searching for a movie!");
//   getMovie();
// });
console.log("this works!");
const selectedGenre = [];
var currentQuestion = 0;

$("#start").click(function (event) {
  event.preventDefault();
  console.log("you have started the quiz!");
  $("#tv-screen").text("");
  $("#start").hide();
  quiz();
});

function quiz() {
  console.log("Quiztime")
  const Quiz = [
    {
      id: 0,
      q: "Are you in the mood for something scary?",
      a: [
        { text: "Yes", addGenre: "horror" },
        { text: "No", addGenre: "" },
      ],
    },
    {
      id: 1,
      q: "Do you want a little excitement?",
      a: [
        { text: "Yes", addGenre: "action" },
        { text: "No", addGenre: "" },
      ],
    },
    {
      id: 2,
      q: "Do you want to explore the past?",
      a: [
        { text: "Yes", addGenre: "history" },
        { text: "No", addGenre: "" },
      ],
    },
    {
      id: 3,
      q: "Do you want to laugh?",
      a: [
        { text: "Yes", addGenre: "comedy" },
        { text: "No", addGenre: "" },
      ],
    },
    {
      id: 4,
      q: "Are you in the mood to learn?",
      a: [
        { text: "Yes", addGenre: "docu" },
        { text: "No", addGenre: "" },
      ],
    },
    {
      id: 5,
      q: "Do you want to see the world a little bit closer?",
      a: [
        { text: "Yes", addGenre: "reality" },
        { text: "No", addGenre: "" },
      ],
    },
    {
      id: 6,
      q: "Do you need inspiration?",
      a: [
        { text: "Yes", addGenre: "sports" },
        { text: "No", addGenre: "" },
      ],
    },
    {
      id: 7,
      q: "Do you want/need something family friendly?",
      a: [
        { text: "Yes", addGenre: "family" },
        { text: "No", addGenre: "" },
      ],
    },
    {
      id: 8,
      q: "Elves?",
      a: [
        { text: "Yes", addGenre: "fantasy" },
        { text: "No", addGenre: "" },
      ],
    },
    {
      id: 9,
      q: "Are you ready to be on the edge of your seat?",
      a: [
        { text: "Yes", addGenre: "thriller" },
        { text: "No", addGenre: "" },
      ],
    },
    {
      id: 10,
      q: "Are you ready for a roller-coaster of emotions?",
      a: [
        { text: "Yes", addGenre: "drama" },
        { text: "No", addGenre: "" },
      ],
    },
    {
      id: 11,
      q: "Do you want something animated (japenese style)?",
      a: [
        { text: "Yes", addGenre: "anime" },
        { text: "No", addGenre: "" },
      ],
    },
    {
      id: 12,
      q: "Do you want to have your heart strings tugged?",
      a: [
        { text: "Yes", addGenre: "romance" },
        { text: "No", addGenre: "" },
      ],
    },
    {
      id: 13,
      q: "Are you ready to get spooked by spoopy ghosts?",
      a: [
        { text: "Yes", addGenre: "supernatural" },
        { text: "No", addGenre: "" },
      ],
    },
    {
      id: 14,
      q: "Wanna sing and dance",
      a: [
        { text: "Yes", addGenre: "music" },
        { text: "No", addGenre: "" },
      ],
    },
    {
      id: 15,
      q: "Want to watch a cheesy TV show?",
      a: [
        { text: "Yes", addGenre: "soap" },
        { text: "No", addGenre: "" },
      ],
    },
    {
      id: 16,
      q: "Do you want to step outside of reality?",
      a: [
        { text: "Yes", addGenre: "scifi" },
        { text: "No", addGenre: "" },
      ],
    },
    {
      id: 17,
      q: "Do you prefer drawings over people?",
      a: [
        { text: "Yes", addGenre: "animation" },
        { text: "No", addGenre: "" },
      ],
    },
  ];
  askQuestion(Quiz)
}

function askQuestion(Quiz) {
  console.log("running the quiz again")
  if (currentQuestion < 17) {
    $("#tv-screen").text(Quiz[currentQuestion].q)
    $('#yes').text("Yes")
    $('#no').text("No")
    $("#yes").on('click', function () {
      checkGenre(Quiz[currentQuestion].a[0])
      console.log("yes!")
      $("#tv-screen").text(Quiz[currentQuestion].q)
    })
    $("#no").on('click', function () {
      checkGenre(Quiz[currentQuestion].a[1])
      $("#tv-screen").text(Quiz[currentQuestion].q)
      console.log("no!")
    })
  }
  else {
    getMovie()
  }
}

function checkGenre(selectedOption) {
  console.log(selectedOption);
  console.log(typeof selectedOption);
  // $("#tv-screen").text("")
  $("#yes").off("click").one("click", function () {
    $("#tv-screen").text("")
  })
  $("#no").off("click").one("click", function () {
    $("#tv-screen").text("")
  })

  if (selectedOption.text === "Yes") {
    console.log("Valid Yes Input")
    selectedGenre.push(selectedOption.addGenre)
    console.log(selectedGenre)
    localStorage.setItem("selectedGenre", JSON.stringify(selectedGenre))
  }
  else {
    console.log("Valid No Input")
    console.log(selectedGenre)
  }
  currentQuestion++
  quiz()
}

//
// }
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
function getMovie() {
 
  console.log("Get Movie!")
  // Watch Mode list titles api call to filter out movies from list Watch Mode
  var action = "1,39,2,19,18,41,";
  var history = "31,10,";
  var comedy = "4,";
  var docu = "6,36,";
  var reality = "34,28,22,23,26,35,";
  var sports = "29,";
  var family = "8,21,";
  var fantasy = "9,";
  var drama = "7,";
  var horror = "11,";
  var romance = "14,";
  var thriller = "17,13,5,";
  var animation = "3,";
  var anime = "33,";
  var supernatural = "37,";
  var music = "12,32,";
  var scifi = "40,15,";
  var soap = "25,";
  var movie = "movie";
  var tv = "tv_series";
  // Need to create algorithm or survey to choose which queries to put in our api Call.
  // *content type (movie/tvSeries) must match query type. i.e(soap type = tv)

  // selectedGenre = ["horror", "comedy"];
  // create a temp variable to hold the string data (number IDS)   --> for loop
  // let tempArr = ["11, ", 4] .  --> Array.join() . - convert the arry into a string
  // let urlInput = "11, 4, "
  //will replace "horror" for example with another valid set of info
  //we can add an if/else statement to decide what will be displayed. aka movie v. tv so one doesn't show up as undefined.

  var movie = "movie";
  var tv = "tv_series";
  // var container = addGenre;
  var watchKey = "GHWA9Jkmbwm8azDdX0w8d8YYB3Omku0yVowWVtgD";
  var watchMode = `https://api.watchmode.com/v1/list-titles/?apiKey=${watchKey}&source_ids=&genres=${action}&types=${movie}}`;
  console.log(watchMode);
  // Use a fetch call to get data from first api and return data we will use to find a movie for the User
  fetch(watchMode)
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      } else {
        throw new Error("Something went wrong on API server!");
      }
    })
    .then((data) => {
      //  grabbed data from fetch and put important and relevant datas into variables
      console.log(data);
      var total = data.titles.length;
      console.log(total);
      var aNumber = Math.floor(Math.random() * total);
      console.log(aNumber);
      var selection = data.titles[aNumber].tmdb_id;
      var type = data.titles[aNumber].tmdb_type;
      console.log(selection);
      console.log(type);
      localStorage.setItem("movie", selection);
      localStorage.setItem("showType", type);
      yourChoice();
    });
  //  TMDB api Call, uses IMDB id input to search for and find a move. Returns an Object with movie info inside
  function yourChoice() {
    var urPick = localStorage.getItem("movie");
    console.log(urPick);
    var urType = localStorage.getItem("showType");
    var imdbId = "tt6443346";
    var tmdbKey = "df5b060aa473758dc356cd7a2a5312f4";
    var movieId = "550";
    var tmdb = `https://api.themoviedb.org/3/${urType}/${urPick}?api_key=${tmdbKey}&language=en-US`;

    console.log(tmdb);

    fetch(tmdb)
      .then((info) => {
        if (info.status === 200) {
          return info.json();
        } else {
          throw new Error("Something went wrong on API server!");
        }
      })
      .then((result) => {
        console.log(result);
        var pick = result.title;
        var pick1 = result.original_name;
        var img = result.poster_path;
        console.log(pick);
        //IMAGE NOT DISPLAYING---------NEEDS DEBUGGED!!!!!!!!!!!
        $("#media-image").attr(
          "src",
          "https://www.themoviedb.org/t/p/w600_and_h900_bestv2" + img
        );
        if (pick1 === undefined) {
          $("#tv-screen").text("Here's your movie choice:  " + pick);
        }
        else if (pick === undefined) {
         $("#tv-screen").text("Here's your TV choice:  " + pick1);
        }
      });
  }
}

function details() {
  var source = localStorage.getItem("movie");
  console.log(source);
  var secondCallKey = "GHWA9Jkmbwm8azDdX0w8d8YYB3Omku0yVowWVtgD";
  var callDetail = `https://api.watchmode.com/v1/title/${3173903}/sources/?apiKey=${secondCallKey}&append_to_response=sources'`;

  fetch(callDetail)
    .then((stuff) => {
      if (stuff.status === 200) {
        return stuff.json();
      } else {
        throw new Error("Something went wrong on API server!");
      }
    })
    .then((things) => {
      console.log(things);
    });
}

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