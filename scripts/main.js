const cocktails = {
    "Margarita": {
        "ingredients": ["tequila", "lime juice", "triple sec"],
        "recipe": "2 oz tequila, 1 oz lime juice, 1 oz triple sec. Shake with ice and strain into a salt-rimmed glass filled with ice. Garnish with a lime wedge."
    },
    "Mojito": {
        "ingredients": ["white rum", "lime juice", "mint leaves", "club soda", "simple syrup"],
        "recipe": "2 oz white rum, 0.75 oz lime juice, 0.5 oz simple syrup, 5-6 mint leaves, club soda. Muddle the mint leaves with the lime juice and simple syrup in a glass. Add ice, then rum and top with club soda. Stir gently and garnish with a mint sprig."
    },
    "Daiquiri": {
        "ingredients": ["white rum", "lime juice", "simple syrup"],
        "recipe": "2 oz white rum, 0.75 oz lime juice, 0.5 oz simple syrup. Shake with ice and strain into a chilled glass. Garnish with a lime wheel."
    },
    "Old Fashioned": {
        "ingredients": ["whiskey", "sugar cube", "bitters", "orange peel"],
        "recipe": "2 oz whiskey, 1 sugar cube, 2 dashes bitters, orange peel. Muddle the sugar cube with a splash of water and the bitters in a glass. Add ice and whiskey, stir well, and garnish with an orange peel."
    },
    "Martini": {
        "ingredients": ["gin", "dry vermouth", "olive"],
        "recipe": "2.5 oz gin, 0.5 oz dry vermouth. Stir with ice and strain into a chilled glass. Garnish with an olive or a lemon twist."
    },
    "Cosmopolitan": {
   	    "ingredients": ["vodka", "triple sec", "lime juice", "cranberry juice"],
   	    "recipe": "1.5 oz vodka, 1 oz triple sec, 0.75 oz lime juice, 0.5 oz cranberry juice. Shake with ice and strain into a chilled glass. Garnish with a lime wheel."
    },
    "Gimlet": {
        "ingredients": ["gin", "lime juice", "simple syrup"],
        "recipe": "2 oz gin, 0.75 oz lime juice, 0.5 oz simple syrup. Shake with ice and strain into a chilled glass. Garnish with a lime wheel."
    },
    "Negroni": {
        "ingredients": ["gin", "sweet vermouth", "Campari", "orange peel"],
        "recipe": "1 oz gin, 1 oz sweet vermouth, 1 oz Campari. Stir with ice and strain into a chilled glass. Garnish with an orange peel."
    },
    "Manhattan": {
        "ingredients": ["whiskey", "sweet vermouth", "bitters", "cherry"],
        "recipe": "2 oz whiskey, 1 oz sweet vermouth, 2 dashes bitters. Stir with ice and strain into a chilled glass. Garnish with a cherry."
    },
    "Bloody Mary": {
        "ingredients": ["vodka", "tomato juice", "lemon juice", "Worcestershire sauce", "hot sauce", "celery salt", "black pepper"],
        "recipe": "2 oz vodka, 4 oz tomato juice, 0.75 oz lemon juice, 0.5 oz Worcestershire sauce, 3-4 dashes hot sauce, pinch of celery salt and black pepper. Build in a glass over ice and stir well. Garnish with a celery stalk and a lemon wedge."
    },
    "Screwdriver": {
        "ingredients": ["vodka", "orange juice"],
        "recipe": "2 oz vodka, 4-5 oz orange juice. Build in a glass over ice and stir well. Garnish with an orange slice."
    },
    "Sazerac": {
        "ingredients": ["rye whiskey", "absinthe", "sugar", "bitters", "lemon peel"],
        "recipe": "1 tsp absinthe, 1 tsp sugar, 2 dashes bitters, 2 oz rye whiskey. Rinse a chilled glass with absinthe and discard the excess. Muddle the sugar and bitters in a shaker, then add ice and whiskey. Stir and strain into the prepared glass. Garnish with a lemon peel."
        },
    "Sidecar": {
        "ingredients": ["brandy", "triple sec", "lemon juice", "sugar"],
        "recipe": "2 oz brandy, 0.75 oz triple sec, 0.5 oz lemon juice, 0.25 oz sugar. Shake with ice and strain into a chilled glass rimmed with sugar. Garnish with a lemon twist."
        },
    "Whiskey Sour": {
        "ingredients": ["whiskey", "lemon juice", "simple syrup"],
        "recipe": "2 oz whiskey, 0.75 oz lemon juice, 0.5 oz simple syrup. Shake with ice and strain into a chilled glass. Garnish with a cherry and an orange slice."
        },
    "Moscow Mule": {
        "ingredients": ["vodka", "lime juice", "ginger beer", "lime wedge"],
        "recipe": "2 oz vodka, 0.5 oz lime juice. Pour into a copper mug filled with ice, then top with ginger beer. Stir and garnish with a lime wedge."
        },
    "Pina Colada": {
        "ingredients": ["rum", "pineapple juice", "coconut cream", "pineapple wedge", "cherry"],
        "recipe": "2 oz rum, 4 oz pineapple juice, 2 oz coconut cream. Shake with ice and strain into a glass filled with ice. Garnish with a pineapple wedge and a cherry."
        },
    "Long Island Iced Tea": {
        "ingredients": ["vodka", "gin", "rum", "tequila", "triple sec", "lemon juice", "simple syrup", "cola", "lemon wedge"],
        "recipe": "0.5 oz vodka, 0.5 oz gin, 0.5 oz rum, 0.5 oz tequila, 0.5 oz triple sec, 0.75 oz lemon juice, 0.75 oz simple syrup. Shake with ice and strain into a glass filled with ice. Top with cola and garnish with a lemon wedge."
        },
    "Dark and Stormy": {
        "ingredients": ["dark rum", "ginger beer", "lime wedge"],
        "recipe": "2 oz dark rum. Pour into a glass filled with ice, then top with ginger beer. Stir and garnish with a lime wedge."
        },
    "Aperol Spritz": {
        "ingredients": ["Aperol", "prosecco", "club soda", "orange slice"],
        "recipe": "3 oz prosecco, 2 oz Aperol, 1 oz club soda. Pour into a glass filled with ice, then stir. Garnish with an orange slice."
        },
    "Campari Spritz": {
        "ingredients": ["Campari", "prosecco", "club soda", "orange slice"],
        "recipe": "3 oz prosecco, 2 oz Campari, 1 oz club soda. Pour into a glass filled with ice, then stir. Garnish with an orange slice."
        },
    "Gin and Tonic": {
        "ingredients": ["gin", "tonic water", "lime wedge"],
        "recipe": "2 oz gin. Pour into a glass filled with ice, then top with tonic water. Stir and garnish with a lime wedge."
        }
            
};
function getRecipes() {
    const ingredients = document.getElementById("ingredients").value.split(",");
    const recipes = [];
    for (let cocktail in cocktails) {
        if (checkIngredients(ingredients, cocktails[cocktail].ingredients)) {
            recipes.push(<p>${cocktails[cocktail].recipe}</p>);
        }
    }
    document.getElementById("recipes").innerHTML = recipes.join("");
}
    
function checkIngredients(searchIngredients, recipeIngredients) {
    for (let ingredient of searchIngredients) {
        if (!recipeIngredients.includes(ingredient.trim().toLowerCase())) {
            return false;
        }
    }
    return true;
}
