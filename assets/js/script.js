// // VARIABLES

// var formSubmitSpi = document.getElementById("form-submit-spi");
// var formSubmitCat = document.getElementById("form-submit-cat");
// var cocktailContainer = document.querySelector(".cocktail-container");
// var cocktailList = document.querySelector(".cocktailList");

// // // FUNCTIONS
// // function drinkSearch() {}
// //   // get user input from submit form.
// //   // request data from api that matches user input

// $(formSubmitSpi).on("click", function (event) {
//   event.preventDefault();
//   var formSpiEl = $("#formSpi").val();
//   // console.log("User Input: ", formSpiEl);
//   var spiRequestUrl = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${formSpiEl}`;
//   fetch(spiRequestUrl)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       // console.log(data);
//       var drinks = data.drinks;
//       // console.log(drinks);
//       for (i = 0; i < drinks.length; i++) {
//         // console.log(`line 23: ${drinks[i].strDrink}`);
//         var liEl = document.createElement("li");
//         liEl.textContent = drinks[i].strDrink;
//         cocktailList.append(liEl);
//         liEl.classList.add("liClass");
//         liEl.style.cursor = "pointer";
//       }
//       test();
//     });
// });

// $(formSubmitCat).on("click", function (event) {
//   event.preventDefault();
//   var formCatEl = $("#formCat").val();
//   // console.log("User Input: ", formCatEl);
//   var catRequestUrl = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${formCatEl}`;
//   fetch(catRequestUrl)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       // console.log(data);
//       var categories = data.drinks;
//       // console.log(categories);
//       for (i = 0; i < categories.length; i++) {
//         // console.log(`line 23: ${categories[i].strDrink}`);
//         var liEl = document.createElement("li");
//         liEl.textContent = categories[i].strDrink;
//         cocktailList.append(liEl);
//         liEl.classList.add("liClass");
//         liEl.style.cursor = "pointer";
//       }
//       test();
//     });
// });

// // function cocktailDetails() {
// //   console.log("clicked")

// function test() {
//   console.log("test");

//   for (i = 0; i < cocktailList.children.length; i++) {
//     var textEl = cocktailList.children[i].textContent;
//     // console.log(textEl);
//     function clickTextEl() {
//       console.log("clicked");
//     }
//     cocktailList.children[i].textContent.addEventListener("click", clickTextEl);
//   }
// }
// // add data to local storage
// // print data to application to show API output to user

// // EVENTLISTENERS

// VARIABLES
const formSubmitSpi = document.getElementById("form-submit-spi");
const formSubmitCat = document.getElementById("form-submit-cat");
const cocktailContainer = document.querySelector(".cocktail-container");
const cocktailList = document.querySelector(".cocktailList");

// FUNCTIONS
function fetchDrinks(requestUrl) {
  return fetch(requestUrl)
    .then((response) => response.json())
    .then((data) => data.drinks);
}

function createDrinkElement(drinkName) {
  const liEl = document.createElement("li");
  liEl.textContent = drinkName;
  liEl.classList.add("liClass");
  liEl.style.cursor = "pointer";
  cocktailList.append(liEl);
}

function handleFormSubmit(event, formEl, queryParam) {
  event.preventDefault();
  const userInput = formEl.val();
  const requestUrl = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?${queryParam}=${userInput}`;

  fetchDrinks(requestUrl)
    .then((drinks) => {
      drinks.forEach((drink) => {
        createDrinkElement(drink.strDrink);
      });
    })
    .catch((error) => {
      console.error("Error fetching drinks:", error);
    });
}

function handleDrinkClick() {
  console.log("Clicked");
}

// EVENT LISTENERS
$(formSubmitSpi).on("click", function (event) {
  handleFormSubmit(event, $("#formSpi"), "i");
});

$(formSubmitCat).on("click", function (event) {
  handleFormSubmit(event, $("#formCat"), "c");
});

cocktailList.addEventListener("click", function (event) {
  if (event.target.matches("li")) {
    handleDrinkClick();
  }
});
