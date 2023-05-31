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

fetch("https://thecocktaildb.com/api/json/v1/1/search.php").then((res) =>
  console.log(res)
);

// VARIABLES

// FUNCTIONS

// EVENTLISTENERS
