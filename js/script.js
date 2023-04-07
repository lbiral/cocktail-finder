const cocktailsList = document.getElementById('cocktails-list');

function createCocktailElement(cocktail) {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = `cocktail-${cocktail.id}.html`;
    a.textContent = cocktail.name;
    li.appendChild(a);
    return li;
}

function displayResults(results) {
    cocktailsList.innerHTML = '';
    results.forEach(cocktail => {
        const cocktailElement = createCocktailElement(cocktail);
        cocktailsList.appendChild(cocktailElement);
    });
}

function searchCocktails() {
    const searchInput = document.getElementById('search-input').value.toLowerCase().trim();
    const ingredients = searchInput.split(',').map(ingredient => ingredient.trim());

    const results = cocktailsData.filter(cocktail => {
        return ingredients.every(ingredient => cocktail.ingredients.includes(ingredient));
    });

    displayResults(results);
}

document.getElementById('search-button').addEventListener('click', searchCocktails);