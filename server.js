const express = require("express");
const app = express();

const PORT = 3000;

let movies = [
  { movie: "Superbad", year: 2007 },
  { movie: "Pineapple Express", year: 2008 },
  { movie: "The Interview", year: 2014 },
];

app.get("/movies", (_req, res) => {
  res.send(movies);
});

let actors = [
    { actor: 'Michael Cera', age: 32},
    { actor: 'Jonah Hill', age: 37},
    { actor: 'Seth Rogen', age: 39},
    { actor: 'James Franco', age: 43}
]

app.get('/actors', (_req, res) => {
    res.send(actors)
});

let futureprojects = [
    { actor: 'Michael Cera', upcomingProject: 'Blazzing Samurai'},
    { actor: 'Jonah Hill', upcomingProject: 'The Best Thing About Pam Mooney'},
    { actor: 'Seth Rogen', upcomingProject: 'Townies'},
    { actor: 'James Franco', upcomingProject: 'As I Lay Dying'}
]

app.get('/futureprojects', (_req, res) => {
    res.send(futureprojects)
});

app.listen(PORT, () => {
    console.log("App started on port: ${PORT}");
  });