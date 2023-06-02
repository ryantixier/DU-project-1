// VARIABLES

var formSubmitSpi = document.getElementById("form-submit-spi");
var formSubmitCat = document.getElementById("form-submit-cat");
var cocktailContainer = document.querySelector(".cocktail-container");
var cocktailList = document.querySelector(".cocktailList");
console.log(cocktailList);
console.log(cocktailContainer);
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
      console.log(drinks);
      for (i = 0; i < drinks.length; i++) {
        console.log(`line 23: ${drinks[i].strDrink}`);

        var liEl = document.createElement("li");
        liEl.textContent = drinks[i].strDrink;
        cocktailList.append(liEl);
        liEl.classList.add("liClass");
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
      // console.log(data);
      var categories = data.drinks;
      // console.log(categories);
      for (i = 0; i < 25; i++) {
        // console.log(`line 23: ${categories[i].strDrink}`);

        var liEl = document.createElement("li");
        liEl.textContent = categories[i].strDrink;
        cocktailList.append(liEl);
        liEl.classList.add("liClass");
      }
    });
});

// add data to local storage
// print data to application to show API output to user

// EVENTLISTENERS
