// VARIABLES

var formSubmitSpi = document.getElementById("form-submit-spi");
var formSubmitCat = document.getElementById("form-submit-cat");
var cocktailContainer = document.querySelector(".cocktail-container");
var cocktailList = document.querySelector(".cocktailList");

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
      // console.log(data);
      var drinks = data.drinks;
      // console.log(drinks);
      for (i = 0; i < drinks.length; i++) {
        // console.log(`line 23: ${drinks[i].strDrink}`);
        var liEl = document.createElement("li");
        liEl.textContent = drinks[i].strDrink;
        cocktailList.append(liEl);
        liEl.classList.add("liClass");
        liEl.style.cursor = "pointer";
      }
      test();
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
      for (i = 0; i < categories.length; i++) {
        // console.log(`line 23: ${categories[i].strDrink}`);
        var liEl = document.createElement("li");
        liEl.textContent = categories[i].strDrink;
        cocktailList.append(liEl);
        liEl.classList.add("liClass");
        liEl.style.cursor = "pointer";
      }
      test();
    });
});

// function cocktailDetails() {
//   console.log("clicked")

function test() {
  console.log("test");

  for (i = 0; i < cocktailList.children.length; i++) {
    var textEl = cocktailList.children[i].textContent;
    // console.log(textEl);
    function clickTextEl() {
      console.log("clicked");
    }
    cocktailList.children[i].textContent.addEventListener("click", clickTextEl);
  }
}
// add data to local storage
// print data to application to show API output to user

// EVENTLISTENERS
