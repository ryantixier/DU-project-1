// VARIABLES

var formSubmitSpi = document.getElementById("form-submit-spi");
var formSubmitCat = document.getElementById("form-submit-cat");
var cocktailContainer = document.querySelector(".cocktail-container");
// // FUNCTIONS
// function drinkSearch() {}
//   // get user input from submit form.
//   // request data from api that matches user input

$(formSubmitSpi).on("click", function (event) {
  event.preventDefault();
  var formSpiEl = $("#formSpi").val();
  // console.log("User Input: ", formSpiEl);
  var spiRequestUrl = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${formSpiEl}`;
  fetch(spiRequestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      var drinks = data.drinks;
      for (i = 0; i < drinks.length; i++) {
        console.log(`line 23: ${drinks[i].strDrink}`);
        var cocktailName = $("<h4>");
        cocktailName.text = drinks[i].strDrink;
        cocktailContainer.append(cocktailName);
      }
    });
});

$(formSubmitCat).on("click", function (event) {
  event.preventDefault();
  var formCatEl = $("#formCat").val();
  // console.log("User Input: ", formCatEl);
  var catRequestUrl = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${formCatEl}`;
  fetch(catRequestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    });
});
// add data to local storage
// print data to application to show API output to user

// EVENTLISTENERS
