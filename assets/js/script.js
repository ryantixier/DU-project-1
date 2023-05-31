// VARIABLES

var catRequestUrl =
  "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=" + userCategory;
var ingRequestUrl =
  "https://www.thecocktaildb.com/api/json/v1/1/list.php?i=" + userIngredient;

fetch(catRequestUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });

fetch(ingRequestUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });

// FUNCTIONS
$("myForm").submit(function (event) {
  event.preventDefault();

  var formIngEl = $("#formIng").val();
  var formCatEl = $("#formCat").val();

  console.log("User Input: ", formIngEl, formCatEl);
});
// get user input from submit form.
// request data from api that matches user input
// add data to local storage
// print data to application to show API output to user

// EVENTLISTENERS
