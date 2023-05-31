// $.ajax({
//   url: "https://thecocktaildb.com/api/json/v1/1/search.php",
//   method: "GET",
//   dataType: "json",
//   success: function (response) {
//     // Handle the successful response here
//     console.log(response);
//   },
//   error: function (xhr, status, error) {
//     // Handle any errors that occur during the request
//     console.log("Error:", status, error);
//   },
// });
// www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita

var catRequestUrl =
    "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=" + userCategory;
var ingRequestUrl =
  "https://www.thecocktaildb.com/api/json/v1/1/list.php?i=" + userIngredient;

fetch(catRequestUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });

fetch(ingRequestUrl)
  .then(function (response) {
    return response.json();
    })
    .then(funtion(data){
        console.log(data);
  })

// VARIABLES

// FUNCTIONS

// EVENTLISTENERS
