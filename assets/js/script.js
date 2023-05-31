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

fetch("www.thecocktaildb.com/api/json/v1/1/list.php?c=list")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });

// VARIABLES

// FUNCTIONS

// EVENTLISTENERS
