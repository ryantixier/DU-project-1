// VARIABLES

var formSubmitSpi = $("#form-submit-spi");
var formSubmitCat = $("#form-submit-cat");
var formSpiEl = $("#formSpi").val();
var formCatEl = $("#formCat").val();

// // FUNCTIONS
function drinkSearch() {
  // get user input from submit form.
  // request data from api that matches user input
  var catRequestUrl = `https://www.thecocktaildb.com/api/json/v1/1/list.php?c=${formCatEl}`;
  var spiRequestUrl = `https://www.thecocktaildb.com/api/json/v1/1/list.php?i=${formSpiEl}`;

  fetch(catRequestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    });

  fetch(spiRequestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    });
}
$(formSubmitSpi).on("click", function (event) {
  event.preventDefault();
  console.log("User Input: ", formSpiEl);
});
$(formSubmitCat).on("click", function (event) {
  event.preventDefault();
  console.log("User Input: ", formCatEl);
});
// add data to local storage
// print data to application to show API output to user

// EVENTLISTENERS
