// const addMovieButton = document.getElementById("add-movie-btn");
// const searchButton = document.getElementById("search-btn");
// const errorMessageUI = document.querySelectorAll(".error-message-el");
// const movies = [];

// //
// const addMovieHandler = () => {
//   const title = document.getElementById("title").value;
//   const extraName = document.getElementById("extra-name").value;
//   const extraValue = document.getElementById("extra-value").value;
//   // Check User Inputs
//   if (
//     title.trim() === "" ||
//     extraName.trim() === "" ||
//     extraValue.trim() === ""
//   ) {
//     return;
//   }
//   const newMovie = {
//     info: {
//       title: title,
//       [extraName]: extraValue,
//     },

//     id: Math.random(),
//   };

//   movies.push(newMovie);
//   console.log(newMovie);
//   renderMovies();
// };

// // Render Movies
// const renderMovies = () => {
//   const movieList = document.getElementById("movie-list");

//   if (movies.length === 0) {
//     movieList.classList.remove("visible");
//   } else {
//     movieList.classList.add("visible");
//   }
//   movieList.innerHTML = "";

//   movies.forEach((movie) => {
//     const movieEl = document.createElement("li");
//     movieEl.textContent = movie.info.title;
//     movieList.append(movieEl);
//   });
// };
// addMovieButton.addEventListener("click", addMovieHandler);
// searchButton.addEventListener("click", () => {});

// let userInputs = "Machine learning";

// let person = {
//   name: "mahmoud",
//   [userInputs]: "It is a course for a subject in computer science",
//   age: 21,
//   "question answer": "What is the name of yout favourite book ?",
//   10: "Number ten",
// };

// person["height"] = 18;
// console.log(person);

// console.log(person["10"]);
// console.log(person["question answer"]);

// person = {
//   name: "mahmoud",
//   age: 21,
//   college: "FCI",
// };

// person.hobbies = ["football", "chess", "basketball"];
// console.log(person);

// person.name = null;
// console.log(person);

// person.name = undefined;
// console.log(person);

// delete person.name;
// console.log(person);
// console.log(person["Machine learning"]);

let person = {
  name: "mahmoud",
  age: 30,

  formattedName: function () {
    return this.name.toUpperCase();
  },
};

console.log(person.formattedName());

let person3 = {
  school: "Fci",
};

let person2 = Object.assign({}, person, person3);
console.log("person2 is = ", person2);

let { name, ...otherInformation } = person;

console.log(name, otherInformation);
