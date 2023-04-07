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
const searchInput = document.getElementById('search-input');
function searchCocktails() {
    const inputValue = searchInput.value.toLowerCase().trim();
    const ingredients = inputValue.split(',').map(ingredient => ingredient.trim());

    const results = cocktailsData.filter(cocktail => {
        return ingredients.every(ingredient => cocktail.ingredients.includes(ingredient));
    });

    displayResults(results);
}

searchInput.addEventListener('input', searchCocktails);