const search = document.getElementById('search');
const cocktailList = document.getElementById('cocktail-list');

search.addEventListener('input', () => {
    const searchTerm = search.value.trim().toLowerCase();
    const matchingCocktails = cocktails.filter(cocktail => cocktail.ingredients.some(ingredient => ingredient.toLowerCase().includes(searchTerm)));

    cocktailList.innerHTML = '';
    for (const cocktail of matchingCocktails) {
        const listItem = document.createElement('li');
        listItem.textContent = cocktail.name;
        listItem.addEventListener('click', () => {
            window.location.href = `cocktail-${cocktail.id}.html`;
        });
        cocktailList.appendChild(listItem);
    }
});
