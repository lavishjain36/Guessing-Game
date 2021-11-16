//* Get Value from input by button
document.getElementById("search-btn").addEventListener("click", function () {
  const searchInputBox = document.getElementById("search-input").value;
  clickToShow(searchInputBox);
});

//* Searches Data By fetch API
function clickToShow(inputValue) {
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => displayMealItem(data));

  const displayMealItem = (meals) => {
    const cardContainer = document.getElementById("card-container");
    const mealsArray = meals.meals;

    mealsArray.forEach((meal) => {
      const cardDiv = document.createElement("div");
      cardDiv.className = "card single-card";
      const cardInfo = `
            <img src='${meal.strMealThumb}' class='card-img-top'>
            <div class='card-body'>
                <h5 class='card-title text-center'>${meal.strMeal}</h5>
            </div>
            <button class='btn btn-success' onclick="singleCardDetail('${meal.idMeal}')">Show Details</button>
            `;
      cardDiv.innerHTML = cardInfo;
      cardContainer.appendChild(cardDiv);
    });
  };
  document.getElementById("search-input").value = "";
}

//* Search: Enter key trigger.
document.getElementById("search-input").addEventListener("keyup", (event) => {
  if (event.key === "Enter") document.getElementById("search-btn").click();
});

//* Individuals Card Details
const singleCardDetail = (id) => {
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => IndividualPage(data));
};
const IndividualPage = (singleData) => {
  const singleMeal = singleData.meals[0];

  const showSinglePage = document.getElementById("showSinglePage");
  showSinglePage.innerHTML = `
        <div class='singleFoodStyle'>
            <img src='${singleMeal.strMealThumb}'>
            <ul class='my-auto'>
                <li><strong>Food of Recipes</strong> : ${singleMeal.strArea}</li>
                <li><strong>Name of Item</strong> : ${singleMeal.strCategory}</li>
                <li><strong>Ingredients Item</strong> : ${singleMeal.strIngredient1},${singleMeal.strIngredient2},${singleMeal.strIngredient3},${singleMeal.strIngredient4},${singleMeal.strIngredient4},${singleMeal.strIngredient6},${singleMeal.strIngredient7},${singleMeal.strIngredient8} etc...</li>
            </ul>
        </div>
    `;
};
