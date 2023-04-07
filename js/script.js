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

const autocompleteList = document.getElementById('autocomplete-list');

function createAutocompleteElement(ingredient) {
    const li = document.createElement('li');
    li.textContent = ingredient;
    li.onclick = function () {
        const ingredients = searchInput.value.split(',').map(ingredient => ingredient.trim());
        ingredients[ingredients.length - 1] = li.textContent;
        searchInput.value = ingredients.join(', ');
        autocompleteList.innerHTML = '';
    };
    return li;
}

function updateAutocomplete(ingredient) {
    autocompleteList.innerHTML = '';

    if (ingredient.length === 0) {
        return;
    }

    const suggestions = cocktailsData
        .flatMap(cocktail => cocktail.ingredients)
        .filter(
            (ing, index, self) =>
                ing.toLowerCase().startsWith(ingredient.toLowerCase()) &&
                self.indexOf(ing) === index
        );

    suggestions.forEach(suggestion => {
        const autocompleteElement = createAutocompleteElement(suggestion);
        autocompleteList.appendChild(autocompleteElement);
    });
}

searchInput.addEventListener('input', () => {
    const lastIngredient = searchInput.value
        .split(',')
        .map(ingredient => ingredient.trim())
        .pop();

    updateAutocomplete(lastIngredient);
    searchCocktails();
});