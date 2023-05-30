thecocktaildb.com / api / json / v1 / 1 / search.php;

$.ajax({
  url: "https://thecocktaildb.com/api/json/v1/1/search.php",
  method: "GET",
  dataType: "json",
  success: function (response) {
    // Handle the successful response here
    console.log(response);
  },
  error: function (xhr, status, error) {
    // Handle any errors that occur during the request
    console.log("Error:", status, error);
  },
});

// VARIABLES

// FUNCTIONS

// EVENTLISTENERS
