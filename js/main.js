const search = document.getElementById('search');
const cocktailList = document.getElementById('cocktail-list');

search.addEventListener('input', () => {
    const searchTerm = search.value.trim().toLowerCase();
    const ingredients = searchTerm.split(',').map(ingredient => ingredient.trim());

    const matchingCocktails = cocktails.filter(cocktail => {
        return ingredients.every(ingredient => cocktail.ingredients.includes(ingredient));
    });

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
