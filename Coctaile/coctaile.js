function searchCocktailByName() {
    var cocktailName = document.getElementById('cocktailName').value;
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktailName}`)
        .then(response => response.json())
        .then(data => displayCocktails(data.drinks))
        .catch(error => console.log(error));
}

function displayCocktails(cocktails) {
    var cocktailResult = document.getElementById('cocktailResult');
    cocktailResult.innerHTML = '';

    if (cocktails === null) {
        cocktailResult.innerHTML = 'No cocktails found.';
    } else {
        cocktails.forEach(cocktail => {
            var cocktailDiv = document.createElement('div');
            cocktailDiv.innerHTML = `<h2>${cocktail.strDrink}</h2>
                                     <img src="${cocktail.strDrinkThumb}" alt="${cocktail.strDrink}">
                                     <p>${cocktail.strInstructions}</p>`;
            cocktailResult.appendChild(cocktailDiv);
        });
    }
}
