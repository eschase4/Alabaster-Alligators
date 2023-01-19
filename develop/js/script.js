// Declared Global Variables for use throughout page
var posterArr = [];
const selectedGenre = [];
var currentQuestion = 0;
// added function containing quiz questions stored in an array of Objects
function quiz() {
  const Quiz = [
    {
      id: 0,
      q: "Are you in the mood for something scary?",
      a: [
        { text: "Yes", addGenre: "11," },
        { text: "No", addGenre: "" },
      ],
    },
    {
      id: 1,
      q: "Do you want a little excitement?",
      a: [
        { text: "Yes", addGenre: "1,39,2,19,18,41," },
        { text: "No", addGenre: "" },
      ],
    },
    {
      id: 2,
      q: "Do you want to explore the past?",
      a: [
        { text: "Yes", addGenre: "31,10," },
        { text: "No", addGenre: "" },
      ],
    },
    {
      id: 3,
      q: "Do you want to laugh?",
      a: [
        { text: "Yes", addGenre: "4," },
        { text: "No", addGenre: "" },
      ],
    },
    {
      id: 4,
      q: "Are you in the mood to learn?",
      a: [
        { text: "Yes", addGenre: "6,36," },
        { text: "No", addGenre: "" },
      ],
    },
    {
      id: 5,
      q: "Do you want to see the world a little bit closer?",
      a: [
        { text: "Yes", addGenre: "34,28,22,23,26,35," },
        { text: "No", addGenre: "" },
      ],
    },
    {
      id: 6,
      q: "Do you need inspiration?",
      a: [
        { text: "Yes", addGenre: "29," },
        { text: "No", addGenre: "" },
      ],
    },
    {
      id: 7,
      q: "Do you want/need something family friendly?",
      a: [
        { text: "Yes", addGenre: "8,21," },
        { text: "No", addGenre: "" },
      ],
    },
    {
      id: 8,
      q: "Elves?",
      a: [
        { text: "Yes", addGenre: "9," },
        { text: "No", addGenre: "" },
      ],
    },
    {
      id: 9,
      q: "Are you ready to be on the edge of your seat?",
      a: [
        { text: "Yes", addGenre: "17,13,5," },
        { text: "No", addGenre: "" },
      ],
    },
    {
      id: 10,
      q: "Are you ready for a roller-coaster of emotions?",
      a: [
        { text: "Yes", addGenre: "7," },
        { text: "No", addGenre: "" },
      ],
    },
    {
      id: 11,
      q: "Do you want something animated (japenese style)?",
      a: [
        { text: "Yes", addGenre: "33," },
        { text: "No", addGenre: "" },
      ],
    },
    {
      id: 12,
      q: "Do you want to have your heart strings tugged?",
      a: [
        { text: "Yes", addGenre: "14," },
        { text: "No", addGenre: "" },
      ],
    },
    {
      id: 13,
      q: "Are you ready to get spooked by spoopy ghosts?",
      a: [
        { text: "Yes", addGenre: "37," },
        { text: "No", addGenre: "" },
      ],
    },
    {
      id: 14,
      q: "Wanna sing and dance",
      a: [
        { text: "Yes", addGenre: "12,32," },
        { text: "No", addGenre: "" },
      ],
    },
    {
      id: 15,
      q: "Want to watch a cheesy TV show?",
      a: [
        { text: "Yes", addGenre: "25," },
        { text: "No", addGenre: "" },
      ],
    },
    {
      id: 16,
      q: "Do you want to step outside of reality?",
      a: [
        { text: "Yes", addGenre: "40,15," },
        { text: "No", addGenre: "" },
      ],
    },
    {
      id: 17,
      q: "Do you prefer drawings over people?",
      a: [
        { text: "Yes", addGenre: "3," },
        { text: "No", addGenre: "" },
      ],
    },
    {
      id: 18,
      q: "",
      a: [
        { text: "", addGenre: "" },
        { text: "", addGenre: "" },
      ],
    },
  ];
  askQuestion(Quiz);
}
// Added function to deploy the quiz survey and take the users input in order to figure which genre to select for them
function askQuestion(Quiz) {
  if (currentQuestion < 18) {
    $("#tv-screen").text(Quiz[currentQuestion].q);
    $("#yes").text("Yes");
    $("#no").text("No");
    $("#yes").on("click", function () {
      checkGenre(Quiz[currentQuestion].a[0]);

      $("#tv-screen").text(Quiz[currentQuestion].q);
    });
    $("#no").on("click", function () {
      checkGenre(Quiz[currentQuestion].a[1]);
      $("#tv-screen").text(Quiz[currentQuestion].q);
    });
  } else {
    $("#tv-screen").text("");
    $("#yes").text("");
    $("#yes").prop("disabled", true);
    $("#no").text("");
    $("#no").prop("disabled", true);
    getMovie();
  }
}
// check genre function checks the users response and passes it to the local storage to be used elsewhere on page
function checkGenre(selectedOption) {
  $("#yes")
    .off("click")
    .one("click", function () {});
  $("#no")
    .off("click")
    .one("click", function () {});

  $("#yes")
    .off("click")
    .one("click", function () {
      $("#tv-screen").text("");
    });
  $("#no")
    .off("click")
    .one("click", function () {
      $("#tv-screen").text("");
    });

  if (selectedOption.text === "Yes") {
    selectedGenre.push(selectedOption.addGenre);

    localStorage.setItem("selectedGenre", JSON.stringify(selectedGenre));
  } else {
  }
  currentQuestion++;
  quiz();
}

function getMovie() {
  // Watch Mode list titles api call to filter out movies from list Watch Mode

  var movie = "movie";

  var urGenre = localStorage.getItem("selectedGenre");
  var result = JSON.parse(urGenre);
  var addGenre = result.toString();
  var movie = "movie";

  var watchKey = "tJempqsMTEXF2tuB1W3BTsyvau00m1fqLSSEAOZR";
  var watchMode = `https://api.watchmode.com/v1/list-titles/?apiKey=${watchKey}&source_ids=&genres=${addGenre}&types=${movie}}`;

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

      var total = data.titles.length;

      var aNumber = Math.floor(Math.random() * total);

      var selection = data.titles[aNumber].tmdb_id;
      var type = data.titles[aNumber].tmdb_type;
      var watch = data.titles[aNumber].id;

      localStorage.setItem("watchmodeId", watch);
      localStorage.setItem("movie", selection);
      localStorage.setItem("showType", type);
      yourChoice();
    });
  //  TMDB api Call, uses IMDB id input to search for and find a move. Returns an Object with movie info inside
  function yourChoice() {
    var urPick = localStorage.getItem("movie");

    var urType = localStorage.getItem("showType");

    var tmdbKey = "fbfbebf073359e7780f0e8d9441107ff";

    var tmdb = `https://api.themoviedb.org/3/${urType}/${urPick}?api_key=${tmdbKey}&language=en-US`;

    details();

    fetch(tmdb)
      .then((info) => {
        if (info.status === 200) {
          return info.json();
        } else {
          throw new Error("Something went wrong on API server!");
        }
      })
      .then((result) => {
        var pick = result.title;
        var pick1 = result.original_name;
        var img = result.poster_path;
        var synop = result.overview;

        posterArr.push(
          `https://www.themoviedb.org/t/p/w600_and_h900_bestv2${img}`
        );
        localStorage.setItem("posterArr", JSON.stringify(posterArr));

        if (pick1 === undefined) {
          $("#tv-screen")
            .prepend(`<h2 class="has-text-weight-bold has-text-primary-light" id="urPick"> Here's your Movie choice: ${pick} </h2> \
            <div class="media-container"><img id="media-image" src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2${img}"/> \
            <div class="middle"><div class="synopsis">${synop}</div></div>`);
        } else if (pick === undefined) {
          $("#tv-screen")
            .prepend(`<h2 class="has-text-weight-bold has-text-primary-light" id="urPick"> Here's your TV choice: ${pick1} </h2> \
          <div class="media-container"><img id="media-image" src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2${img}"/> \
          <div class="middle"><div class="synopsis">${synop}</div></div>`);
        }
      });
  }
}

function details() {
  // added function to make a callback and retrieve the details of the original movie
  var source = localStorage.getItem("watchmodeId");

  var secondCallKey = "tJempqsMTEXF2tuB1W3BTsyvau00m1fqLSSEAOZR";
  var callDetail = `https://api.watchmode.com/v1/title/${source}/sources/?apiKey=${secondCallKey}&append_to_response=sources'`;

  fetch(callDetail)
    .then((stuff) => {
      if (stuff.status === 200) {
        return stuff.json();
      } else {
        throw new Error("Something went wrong on API server!");
      }
    })
    .then((things) => {
      var link = things[0].web_url;
      var name = things[0].name;

      $("#tv-screen").append(`<a href="${link}">${name} </a>`);

      $("#tv-screen").append(
        '<button id="check" class="button is-medium mt-3">Not in the mood for this title? Get another suggestion!</button>'
      );
      $("#check").click(function (event) {
        event.preventDefault();
        $("#tv-screen").text("");
        $("#yes").text("");
        $("#no").text("");
        getMovie();
      });
    });
}
// added a function to grab the previous results of the survey and dynamically display the box art in a scrolling box
$(document).ready(function () {
  var getPosters = JSON.parse(localStorage.getItem("posterArr"));
  if (getPosters) {
    posterArr = getPosters;
    $("#previous-rec").attr("style", "visibility: visible");
    for (var i = 0; i < getPosters.length; i++) {
      $("#posters").after(`<img id= "moviePosters" src ="${getPosters[i]}">`);
    }
  }
});
// added click listener to listen for clicks to start the test
$("#start").click(function (event) {
  event.preventDefault();
  $("#tv-screen").text("");
  $("#start").hide();
  quiz();
});
