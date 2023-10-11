async function searchCocktails() {
    const cocktailName = document.getElementById('cocktailName').value;
    const ingredient = document.getElementById('ingredient').value;
    const alcoholic = document.getElementById('alcoholic').value;

    const url = 'https://the-cocktail-db3.p.rapidapi.com/45';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '07404d2156mshe8b5f54307dc7e3p1ffbc6jsnff84701765e8',
            'X-RapidAPI-Host': 'the-cocktail-db3.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}

function displayCocktails(cocktails) {
    const cocktailList = document.getElementById('cocktailList');
    cocktailList.innerHTML = '';

    if (cocktails) {
        cocktails.forEach(cocktail => {
            const cocktailItem = document.createElement('div');
            cocktailItem.className = 'cocktail-item';
            cocktailItem.innerHTML = `
                <h2>${cocktail.strDrink}</h2>
                <img src="${cocktail.strDrinkThumb}" alt="${cocktail.strDrink}">
            `;
            cocktailList.appendChild(cocktailItem);
        });
    } else {
        cocktailList.innerHTML = 'Коктелі не знайдені.';
    }
}