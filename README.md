#Title
MOVIE SELECTOR

#Description

Allabaster Alligator's movie selector offers randomized assortment of movies and television shows. The user will take a brief quiz to call on data from The Movie DB and Watchmode and assess which movie or show may be best fitted for the user's mood. Upon opening the application, the user will be faced with a vintage tv set displaying a question and a button prompting the user to start the quiz. Once the quiz is set in motion, the user will be asked a series of questions used to determine their interests and mood. When the user responds "no" to any question, any movies within the genre associated with that question will be eliminated from the selection process. When the user responds "yes" to any question, The Movie DB API will be utilized to source out a variety of titles associated those movie genres. Following the last question, a single movie title will be generated via the Watchmode API. The Watchmode API offers instant access to movies and tv shows and returns the streaming sources available to watch selected titles on. The user can then choose to click on the link associated with the available streaming service or can retake the quiz if they are dissatisfied with the result by clicking the button below the streaming service link.
Throughout the process of creating this project, our team overcame a series of difficulties. For example, we needed to ensure the application could adjust to various screen sizes and remain as consistent as possible across a variety of browsers. Utilizing the Bulma CSS framework, Brenn designed an interactive vintage tv from which the user could click on buttons in the shape of tv "knobs." Additionally, the user can view the questions and results on the "screen" of the tv. Below the tv, we implemented a previously suggested watchlist with a scroll bar via the Bulma CSS framework collected from the local storage.
In the future, developers could offer users more specific results as well as links to the previously recommended watchlist options so that if the user clicks on the images of the previously suggested items, they will be directed to the associated streaming or buying options.

#Contributors
Our Team:
Daniel Gardner, Brenn Voyles, Eli Chase, Dana Welsh

APIs Used to bring you this Project:

https://api.watchmode.com/
https://www.themoviedb.org/documentation/api

#Installation

Code for this project can be found: https://github.com/eschase4/Alabaster-Alligators

The deployed Website for this page can be found: https://eschase4.github.io/Alabaster-Alligators/

#Screenshots

#License

MIT License

Copyright (c) 2023

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
