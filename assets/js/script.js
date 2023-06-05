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

function formSubmit(event, formEl, queryParam) {
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

function fetchDrinkDetails(requestUrl) {
  return fetch(requestUrl)
    .then((response) => response.json())
    .then((data) => data.drinks[0]);
}

// function createDrinkDetail() {
// create your drink detail elements here
// }

function displayDrinkDetails(event) {
  const clickedDrink = event.target.textContent;
  // console.log(clickedDrink);
  const drinkSearch = clickedDrink.split(" ").join("_");
  console.log(drinkSearch);
  const requestUrl = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkSearch}`;

  fetchDrinkDetails(requestUrl)
    .then((drink) => {
      // createDrinkDetail(drink.strDrink);
      // createDrinkDetail(drink.strGlass);
      // createDrinkDetail(getDrinkIngredients(drink));
      // createDrinkDetail(drink.strInstructions);
      console.log(
        drink.strDrink,
        drink.strGlass,
        getDrinkIngredients(drink),
        drink.strInstructions
      );
    })
    .catch((error) => {
      console.error("Error fetching drink details:", error);
    });
}

function getDrinkIngredients(drink) {
  const ingredients = [];

  for (var i = 1; i <= 15; i++) {
    const ingredient = drink[`strIngredient${i}`];
    const measure = drink[`strMeasure${i}`];

    if (ingredient && measure) {
      ingredients.push(`${ingredient} (${measure})`);
    } else if (ingredient) {
      ingredients.push(ingredient);
    }
  }
  return ingredients;
}

// EVENT LISTENERS
$(formSubmitSpi).on("click", function (event) {
  formSubmit(event, $("#formSpi"), "i");
});

$(formSubmitCat).on("click", function (event) {
  formSubmit(event, $("#formCat"), "c");
});

cocktailList.addEventListener("click", displayDrinkDetails);
