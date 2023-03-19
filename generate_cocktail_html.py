import json
import os

template = """
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{name}</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <h1>{name}</h1>
    <img src="{img}" alt="{name}" width="300">
    <h2>Ingredients</h2>
    <ul>
        {ingredients}
    </ul>
    <h2>Recipe</h2>
    <p>{recipe}</p>
    <a href="index.html">Back to Cocktail Finder</a>
</body>
</html>
"""

def create_cocktail_html(cocktail):
    ingredients = '\n        '.join([f'<li>{ingredient}</li>' for ingredient in cocktail['ingredients']])
    html = template.format(name=cocktail['name'], img=cocktail['img'], ingredients=ingredients, recipe=cocktail['recipe'])
    
    filename = f'cocktail-{cocktail["id"]}.html'
    with open(filename, 'w') as f:
        f.write(html)
    print(f'Generated: {filename}')

def main():
    with open('cocktails.json', 'r') as f:
        cocktails = json.load(f)
    
    for cocktail in cocktails:
        create_cocktail_html(cocktail)

if __name__ == '__main__':
    main()
