function debounce(func, wait) {
    let timeout;

    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };

        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

const cocktailsList = document.getElementById('cocktails-list');

function createCocktailElement(cocktail) {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = `cocktail-${cocktail.id}.html`;
    a.textContent = cocktail.name;
    li.appendChild(a);
    return li;
}

const resultsHeader = document.getElementById('results-header');
const noResultsMessage = document.getElementById('no-results-message');

function displayResults(cocktails) {
    cocktailsList.innerHTML = '';
    resultsHeader.style.display = 'block';
    noResultsMessage.style.display = cocktails.length === 0 ? 'block' : 'none';

    cocktails.forEach((cocktail) => {
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
        searchCocktails(); 
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
                ing.toLowerCase().includes(ingredient.toLowerCase()) &&
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
});

// Debounce the searchCocktails function (adjust the wait time as needed, e.g., 300ms)
const debouncedSearchCocktails = debounce(searchCocktails, 300);

// Event listener for autocomplete input (listen for changes to the input value)
searchInput.addEventListener('input', debouncedSearchCocktails);