// VARIABLES

var formSubmitSpi = document.getElementById("form-submit-spi");
var formSubmitCat = document.getElementById("form-submit-cat");

// var catRequestUrl =
//   "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=" + userCategory;
// var ingRequestUrl =
//   "https://www.thecocktaildb.com/api/json/v1/1/list.php?i=" + userIngredient;

// fetch(catRequestUrl)
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     console.log(data);
//   });

// fetch(ingRequestUrl)
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     console.log(data);
//   });

// // FUNCTIONS
// get user input from submit form.
$(formSubmitSpi).on("click", function (event) {
  event.preventDefault();
  var formSpiEl = $("#formSpi").val();
  console.log("User Input: ", formSpiEl);
});
$(formSubmitCat).on("click", function (event) {
  event.preventDefault();
  var formCatEl = $("#formCat").val();
  console.log("User Input: ", formCatEl);
});
// request data from api that matches user input
// add data to local storage
// print data to application to show API output to user

// EVENTLISTENERS
