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

// function createDrinkDetailEl(drinkDetail, className) {
//   const liEl = document.createElement("li");
//   const className = " ";
//   const drinkDetailEl = document.querySelector(className);
//   liEl.textContent = drinkDetail;
//   liEl.classList.add("list-group-item");
//   drinkDetailEl.append(liEl);
// }

function createDrinkDetailName(drinkName) {
  const drinkNameEl = document.querySelector(".drinkName");
  drinkNameEl.innerHTML = "";
  const liEl = document.createElement("li");
  liEl.textContent = drinkName;
  liEl.classList.add("list-group-item");
  drinkNameEl.append(liEl);
  localStorage.setItem("savedDrinkName", drinkName);
  // console.log(drinkName);
}

function createDrinkDetailIng(drinkIng) {
  // console.log(drinkIng);
  const drinkIngEl = document.querySelector(".drinkIng");
  drinkIngEl.innerHTML = "";
  for (var i = 0; i < drinkIng.length; i++) {
    var ingredient = drinkIng[i];
    const liEl = document.createElement("li");
    liEl.textContent = ingredient;
    liEl.classList.add("list-group-item");
    drinkIngEl.append(liEl);
    localStorage.setItem("savedDrinkIng", drinkIng);
    // console.log(drinkIng);
  }
}

function createDrinkDetailGlass(drinkGlass) {
  const drinkGlassEl = document.querySelector(".drinkGlass");
  drinkGlassEl.innerHTML = "";
  const liEl = document.createElement("li");
  liEl.textContent = drinkGlass;
  liEl.classList.add("list-group-item");
  drinkGlassEl.append(liEl);
  localStorage.setItem("savedDrinkGlass", drinkGlass);
  // console.log(drinkGlass);
}

function createDrinkDetailInst(drinkInst) {
  const drinkInstEl = document.querySelector(".drinkInst");
  drinkInstEl.innerHTML = "";
  const liEl = document.createElement("li");
  liEl.textContent = drinkInst;
  liEl.classList.add("list-group-item");
  drinkInstEl.append(liEl);
  localStorage.setItem("savedDrinkInst", drinkInst);
}

function displayDrinkDetails(event) {
  const clickedDrink = event.target.textContent;
  // console.log(clickedDrink);
  const drinkSearch = clickedDrink.split(" ").join("_");
  // console.log(drinkSearch);
  const requestUrl = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkSearch}`;

  fetchDrinkDetails(requestUrl)
    .then((drink) => {
      createDrinkDetailName(drink.strDrink);
      createDrinkDetailIng(getDrinkIngredients(drink));
      createDrinkDetailGlass(drink.strGlass);
      createDrinkDetailInst(drink.strInstructions);
      // console.log(
      //   drink.strDrink,
      //   drink.strGlass,
      //   getDrinkIngredients(drink),
      //   drink.strInstructions
      // );
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
