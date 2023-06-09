const cocktails = [
    {
        id: 1,
        name: 'Mojito',
        ingredients: ['light rum', 'mint', 'lime', 'sugar', 'soda'],
        recipe: 'Muddle 10 mint leaves with 2 tsp sugar and the juice of half a lime. Add a splash of soda water and fill the glass with cracked ice. Pour 2 oz of light rum and top with soda water. Garnish with mint leaves and a lime wedge.',
        img: 'img/mojito.jpg'
    },
    {
        id: 2,
        name: 'Margarita',
        ingredients: ['tequila', 'triple sec', 'lime', 'salt'],
        recipe: 'In a shaker, combine 2 oz tequila, 1 oz triple sec, and 1 oz freshly squeezed lime juice. Shake well and strain into a salt-rimmed glass filled with ice. Garnish with a lime wheel.',
        img: 'img/margarita.jpg'
    },
    {
        id: 3,
        name: 'Cosmopolitan',
        ingredients: ['vodka', 'triple sec', 'cranberry', 'lime'],
        recipe: 'In a shaker, combine 1.5 oz vodka, 1 oz triple sec, 0.5 oz cranberry juice, and 0.5 oz freshly squeezed lime juice. Shake well and strain into a chilled martini glass. Garnish with an orange twist.',
        img: 'img/cosmopolitan.jpg'
    },
    {
        id: 4,
        name: 'Old Fashioned',
        ingredients: ['whiskey', 'sugar', 'bitters', 'orange', 'cherry'],
        recipe: 'In a glass, muddle 1 sugar cube with 2 dashes of bitters and a splash of water. Add 2 oz of whiskey and stir. Add ice and stir again. Garnish with an orange slice and a maraschino cherry.',
        img: 'img/old_fashioned.jpg'
    },
    {
        id: 5,
        name: 'Piña Colada',
        ingredients: ['light rum', 'coconut cream', 'pineapple'],
        recipe: 'In a blender, combine 2 oz light rum, 3 oz pineapple juice, and 1.5 oz coconut cream. Blend until smooth. Pour into a glass filled with ice. Garnish with a pineapple wedge and a cherry.',
        img: 'img/pina_colada.jpg'
    },
    {
        id: 6,
        name: 'Negroni',
        ingredients: ['gin', 'campari', 'sweet vermouth'],
        recipe: 'In a mixing glass, combine 1 oz gin, 1 oz Campari, and 1 oz sweet vermouth. Stir well and strain into a glass filled with ice. Garnish with an orange slice.',
        img: 'img/negroni.jpg'
    },
    {
        id: 7,
        name: 'Daiquiri',
        ingredients: ['light rum', 'lime', 'simple syrup'],
        recipe: 'In a shaker, combine 2 oz light rum, 1 oz freshly squeezed lime juice, and 0.75 oz simple syrup. Shake well and strain into a chilled coupe glass. Garnish with a lime wheel.',
        img: 'img/daiquiri.jpg'
    },
    {
        id: 8,
        name: 'Martini',
        ingredients: ['gin', 'dry vermouth', 'olive'],
        recipe: 'In a mixing glass, combine 2.5 oz gin and 0.5 oz dry vermouth. Stir well and strain into a chilled martini glass. Garnish with an olive or a lemon twist.',
        img: 'img/martini.jpg'
    },
    {
        id: 9,
        name: 'Vesper',
        ingredients: ['gin', 'vodka', 'lillet blanc'],
        recipe: 'In a mixing glass, combine 3 oz gin, 1 oz vodka, and 0.5 oz Lillet Blanc. Stir well and strain into a chilled martini glass. Garnish with a lemon twist.',
        img: 'img/vesper.jpg'
    },
    {
        id: 10,
        name: 'Gimlet',
        ingredients: ['gin', 'lime cordial'],
        recipe: 'In a shaker, combine 2 oz gin and 0.75 oz lime cordial. Shake well and strain into a chilled coupe glass. Garnish with a lime wheel.',
        img: 'img/gimlet.jpg'
    },
    {
        id: 11,
        name: 'Manhattan',
        ingredients: ['whiskey', 'sweet vermouth', 'bitters'],
        recipe: 'In a mixing glass, combine 2 oz whiskey, 1 oz sweet vermouth, and 2 dashes of bitters. Stir well and strain into a chilled coupe glass. Garnish with a maraschino cherry.',
        img: 'img/manhattan.jpg'
    },
    {
        id: 12,
        name: 'Bloody Mary',
        ingredients: ['vodka', 'tomato juice', 'lemon', 'tabasco', 'worcestershire', 'horseradish', 'celery salt', 'black pepper'],
        recipe: 'In a shaker, combine 1.5 oz vodka, 3 oz tomato juice, 0.5 oz lemon juice, 2 dashes Tabasco, 2 dashes Worcestershire sauce, 1 tsp horseradish, a pinch of celery salt, and a pinch of black pepper. Shake well and strain into a glass filled with ice. Garnish with a celery stalk and a lemon wheel.',
        img: 'img/bloody_mary.jpg'
    },
    {
        id: 13,
        name: 'Screwdriver',
        ingredients: ['vodka', 'orange juice'],
        recipe: 'Pour 1.5 oz vodka into a glass filled with ice. Top with 4 oz orange juice. Stir gently and garnish with an orange wheel.',
        img: 'img/screwdriver.jpg'
    },
    {
        id: 14,
        name: 'Sazerac',
        ingredients: ['rye whiskey', 'sugar', 'peychauds bitters', 'absinthe', 'lemon'],
        recipe: "In a glass, muddle 1 sugar cube with a few dashes of water and 3 dashes of Peychaud's bitters. In a separate glass, coat the inside with 0.25 oz absinthe and discard the excess. Add 2 oz rye whiskey to the sugar and bitters mixture, then stir well. Strain the mixture into the absinthe-coated glass. Garnish with a lemon twist.",
        img: 'img/sazerac.jpg'
    },
    {
        id: 15,
        name: 'Sidecar',
        ingredients: ['cognac', 'orange liqueur', 'lemon'],
        recipe: 'In a shaker, combine 2 oz cognac, 1 oz orange liqueur, and 0.75 oz freshly squeezed lemon juice. Shake well and strain into a sugar-rimmed glass. Garnish with an orange twist.',
        img: 'img/sidecar.jpg'
    },
    {
        id: 16,
        name: 'Whiskey Sour',
        ingredients: ['whiskey', 'lemon', 'simple syrup'],
        recipe: 'In a shaker, combine 2 oz whiskey, 0.75 oz freshly squeezed lemon juice, and 0.5 oz simple syrup. Shake well and strain into a glass filled with ice. Garnish with a lemon wheel and a maraschino cherry.',
        img: 'img/whiskey_sour.jpg'
        },
        {
        id: 17,
        name: 'Moscow Mule',
        ingredients: ['vodka', 'ginger beer', 'lime'],
        recipe: 'Pour 2 oz vodka into a copper mug filled with ice. Squeeze half a lime into the mug, then top with 4 oz ginger beer. Stir gently and garnish with a lime wheel.',
        img: 'img/moscow_mule.jpg'
        },
        {
        id: 18,
        name: 'Kentucky Mule',
        ingredients: ['bourbon', 'ginger beer', 'lime'],
        recipe: 'Pour 2 oz bourbon into a copper mug filled with ice. Squeeze half a lime into the mug, then top with 4 oz ginger beer. Stir gently and garnish with a lime wheel.',
        img: 'img/kentucky_mule.jpg'
        },
        {
        id: 19,
        name: "Dark n' Stormy",
        ingredients: ['dark rum', 'ginger beer', 'lime'],
        recipe: 'Pour 2 oz dark rum into a glass filled with ice. Top with 4 oz ginger beer. Stir gently and garnish with a lime wheel.',
        img: 'img/dark_n_stormy.jpg'
        },
        {
        id: 20,
        name: 'Aperol Spritz',
        ingredients: ['aperol', 'prosecco', 'soda', 'orange'],
        recipe: 'Pour 2 oz Aperol and 3 oz Prosecco into a glass filled with ice. Add a splash of soda water and stir gently. Garnish with an orange wheel.',
        img: 'img/aperol_spritz.jpg'
        },
        {
        id: 21,
        name: 'Campari Spritz',
        ingredients: ['campari', 'prosecco', 'soda', 'orange'],
        recipe: 'Pour 2 oz Campari and 3 oz Prosecco into a glass filled with ice. Add a splash of soda water and stir gently. Garnish with an orange wheel.',
        img: 'img/campari_spritz.jpg'
        },
        {
        id: 22,
        name: 'Americano',
        ingredients: ['campari', 'sweet vermouth', 'soda', 'orange'],
        recipe: 'Pour 1.5 oz Campari and 1.5 oz sweet vermouth into a glass filled with ice. Top with soda water and stir gently. Garnish with an orange wheel.',
        img: 'img/americano.jpg'
        },
{
id: 23,
name: 'Negroni Sbagliato',
ingredients: ['campari', 'sweet vermouth', 'prosecco'],
recipe: 'Pour 1 oz Campari and 1 oz sweet vermouth into a glass filled with ice. Top with 1 oz Prosecco and stir gently. Garnish with an orange wheel.',
img: 'img/negroni_sbagliato.jpg'
},
{
id: 24,
name: 'Gin & Tonic',
ingredients: ['gin', 'tonic', 'lime'],
recipe: 'Pour 2 oz gin into a glass filled with ice. Top with 4 oz tonic water. Stir gently and garnish with a lime wheel.',
img: 'img/gin_tonic.jpg'
},
{
id: 25,
name: 'Rum & Coke',
ingredients: ['light rum', 'coke', 'lime'],
recipe: 'Pour 2 oz light rum into a glass filled with ice. Top with 4 oz Coke. Stir gently and garnish with a lime wheel.',
img: 'img/rum_coke.jpg'
},
{
id: 26,
name: "Bee's Knees",
ingredients: ['gin', 'lemon', 'honey'],
recipe: 'In a shaker, combine 2 oz gin, 0.75 oz freshly squeezed lemon juice, and 0.5 oz honey syrup (equal parts honey and water). Shake well and strain into a chilled coupe glass. Garnish with a lemon twist.',
img: 'img/bees_knees.jpg'
},
{
id: 27,
name: 'French 75',
ingredients: ['gin', 'lemon', 'simple syrup', 'champagne'],
recipe: 'In a shaker, combine 1.5 oz gin, 0.5 oz freshly squeezed lemon juice, and 0.5 oz simple syrup. Shake well and strain into a chilled champagne flute. Top with 2 oz champagne and garnish with a lemon twist.',
img: 'img/french_75.jpg'
},
{
id: 28,
name: 'Caipirinha',
ingredients: ['cachaça', 'lime', 'sugar'],
recipe: 'Muddle half a lime cut into wedges with 2 tsp sugar in a glass. Fill the glass with crushed ice and pour 2 oz cachaça over the ice. Stir gently and garnish with a lime wheel.',
img: 'img/caipirinha.jpg'
},
{
id: 29,
name: "Planter's Punch",
ingredients: ['dark rum', 'orange juice', 'pineapple juice', 'grenadine', 'lime', 'bitters'],
recipe: 'In a shaker, combine 2 oz dark rum, 2 oz orange juice, 2 oz pineapple juice, 0.5 oz freshly squeezed lime juice, 0.5 oz grenadine, and 2 dashes of bitters. Shake well and strain into a glass filled with ice. Garnish with an orange wheel and a maraschino cherry.',
img: 'img/planters_punch.jpg'
},
{
    id: 30,
    name: 'Mai Tai',
    ingredients: ['light rum', 'dark rum', 'orange curacao', 'orgeat', 'lime'],
    recipe: 'In a shaker, combine 1 oz light rum, 1 oz dark rum, 0.5 oz orange curacao, 0.5 oz orgeat syrup, and 1 oz freshly squeezed lime juice. Shake well and strain into a glass filled with crushed ice. Garnish with a lime wheel, a sprig of mint, and a maraschino cherry.',
    img: 'img/mai_tai.jpg'
    },
    {
        id: 31,
        name: 'Long Island Iced Tea',
        ingredients: ['vodka', 'tequila', 'light rum', 'gin', 'orange liqueur', 'lemon', 'cola'],
        recipe: 'In a shaker, combine 0.5 oz vodka, 0.5 oz tequila, 0.5 oz light rum, 0.5 oz gin, 0.5 oz orange liqueur, and 0.75 oz freshly squeezed lemon juice. Shake well and strain into a glass filled with ice. Top with a splash of cola and garnish with a lemon wheel.',
        img: 'img/long_island_iced_tea.jpg'
    },
    {
        id: 32,
        name: 'Mimosa',
        ingredients: ['orange juice', 'champagne'],
        recipe: 'Pour 2 oz orange juice into a champagne flute. Top with 4 oz champagne and stir gently. Garnish with an orange wheel.',
        img: 'img/mimosa.jpg'
    },
    {
        id: 33,
        name: 'Espresso Martini',
        ingredients: ['vodka', 'coffee liqueur', 'espresso'],
        recipe: 'In a shaker, combine 1.5 oz vodka, 1 oz coffee liqueur, and 1 oz freshly brewed espresso. Shake well and strain into a chilled martini glass. Garnish with coffee beans.',
        img: 'img/espresso_martini.jpg'
    },
    {
        id: 34,
        name: 'Mint Julep',
        ingredients: ['bourbon', 'mint', 'sugar', 'water'],
        recipe: 'In a glass, muddle 6-8 mint leaves with 0.5 oz simple syrup. Fill the glass with crushed ice and pour 2 oz bourbon over the ice. Stir well and garnish with a sprig of mint.',
        img: 'img/mint_julep.jpg'
    },
    {
        id: 35,
        name: 'Tequila Soda',
        ingredients: ['tequila', 'soda', 'lime'],
        recipe: 'Pour 1.5 oz tequila into a glass filled with ice. Top with 4 oz soda water. Stir gently and garnish with a lime wheel.',
        img: 'img/tequila_soda.jpg'
    },
    {
        id: 36,
        name: 'Rusty Nail',
        ingredients: ['scotch', 'drambuie'],
        recipe: 'Pour 1.5 oz scotch and 0.75 oz Drambuie into a glass filled with ice. Stir well and garnish with a lemon twist.',
        img: 'img/rusty_nail.jpg'
    },
    {
        id: 37,
        name: 'Boulevardier',
        ingredients: ['bourbon', 'campari', 'sweet vermouth'],
        recipe: 'In a mixing glass, combine 1.5 oz bourbon, 1 oz Campari, and 1 oz sweet vermouth. Stir well and strain into a glass filled with ice. Garnish with an orange twist.',
        img: 'img/boulevardier.jpg'
    },
    {
        id: 38,
        name: 'Casino',
        ingredients: ['gin', 'maraschino liqueur', 'orange bitters', 'lemon'],
        recipe: 'In a shaker, combine 2 oz gin, 0.25 oz maraschino liqueur, 2 dashes of orange bitters, and 0.5 oz freshly squeezed lemon juice. Shake well and strain into a chilled coupe glass. Garnish with a lemon twist and a maraschino cherry.',
        img: 'img/casino.jpg'
        },
        {
        id: 39,
        name: 'Martinez',
        ingredients: ['gin', 'sweet vermouth', 'maraschino liqueur', 'orange bitters'],
        recipe: 'In a mixing glass, combine 1.5 oz gin, 1.5 oz sweet vermouth, 0.25 oz maraschino liqueur, and 2 dashes of orange bitters. Stir well and strain into a chilled coupe glass. Garnish with an orange twist.',
        img: 'img/martinez.jpg'
        },
        {
        id: 40,
        name: 'Bellini',
        ingredients: ['peach puree', 'prosecco'],
        recipe: 'Pour 2 oz peach puree into a champagne flute. Top with 4 oz Prosecco and stir gently. Garnish with a peach slice.',
        img: 'img/bellini.jpg'
        },
        {
        id: 41,
        name: 'White Russian',
        ingredients: ['vodka', 'coffee liqueur', 'cream'],
        recipe: 'Pour 1.5 oz vodka and 0.75 oz coffee liqueur into a glass filled with ice. Top with 1.5 oz cream or milk and stir gently.',
        img: 'img/white_russian.jpg'
        },
        {
        id: 42,
        name: 'Cuba Libre',
        ingredients: ['light rum', 'coke', 'lime'],
        recipe: 'Pour 2 oz light rum into a glass filled with ice. Squeeze half a lime into the glass, then top with 4 oz Coke. Stir gently and garnish with a lime wheel.',
        img: 'img/cuba_libre.jpg'
        },
        {
        id: 43,
        name: 'Irish Coffee',
        ingredients: ['irish whiskey', 'coffee', 'sugar', 'whipped cream'],
        recipe: 'Pour 1.5 oz Irish whiskey and 1 tsp sugar into a warm coffee mug. Fill the mug with hot coffee and stir well. Top with whipped cream and serve.',
        img: 'img/irish_coffee.jpg'
        },
        {
        id: 44,
        name: 'Sex on the Beach',
        ingredients: ['vodka', 'peach schnapps', 'orange juice', 'cranberry juice'],
        recipe: 'In a shaker, combine 1.5 oz vodka, 0.75 oz peach schnapps, 2 oz orange juice, and 2 oz cranberry juice. Shake well and strain into a glass filled with ice. Garnish with an orange wheel and a maraschino cherry.',
        img: 'img/sex_on_the_beach.jpg'
        },
        {
        id: 45,
        name: 'Zombie',
        ingredients: ['light rum', 'dark rum', 'apricot liqueur', 'lime', 'grapefruit', 'grenadine', 'bitters'],
        recipe: 'In a shaker, combine 1 oz light rum, 1 oz dark rum, 0.5 oz apricot liqueur, 0.5 oz freshly squeezed lime juice, 1 oz freshly squeezed grapefruit juice, 0.5 oz grenadine, and 2 dashes of bitters. Shake well and strain into a glass filled with ice. Garnish with a sprig of mint and a maraschino cherry.',
        img: 'img/zombie.jpg'
        },
        {
            id: 46,
            name: 'Lemon Drop Martini',
            ingredients: ['vodka', 'lemon', 'simple syrup', 'sugar'],
            recipe: 'In a shaker, combine 1.5 oz vodka, 0.75 oz freshly squeezed lemon juice, and 0.5 oz simple syrup. Shake well and strain into a chilled sugar-rimmed martini glass. Garnish with a lemon twist.',
            img: 'img/lemon_drop_martini.jpg'
            },
            {
            id: 47,
            name: 'Old Cuban',
            ingredients: ['dark rum', 'mint', 'lime', 'simple syrup', 'bitters', 'champagne'],
            recipe: 'In a shaker, muddle 6-8 mint leaves with 0.75 oz freshly squeezed lime juice and 0.5 oz simple syrup. Add 1.5 oz dark rum and 2 dashes of bitters. Shake well and strain into a chilled coupe glass. Top with 2 oz champagne and garnish with a mint sprig.',
            img: 'img/old_cuban.jpg'
            },
            {
            id: 48,
            name: 'Trinidad Sour',
            ingredients: ['angostura bitters', 'orgeat', 'lemon', 'rye whiskey'],
            recipe: 'In a shaker, combine 1 oz Angostura bitters, 1 oz orgeat syrup, 0.75 oz freshly squeezed lemon juice, and 0.5 oz rye whiskey. Shake well and strain into a chilled coupe glass. Garnish with a lemon twist.',
            img: 'img/trinidad_sour.jpg'
            },
            {
            id: 49,
            name: 'Penicillin',
            ingredients: ['scotch', 'honey', 'ginger', 'lemon', 'peaty scotch'],
            recipe: 'In a shaker, combine 2 oz scotch, 0.75 oz honey-ginger syrup (equal parts honey and ginger juice), and 0.75 oz freshly squeezed lemon juice. Shake well and strain into a glass filled with ice. Float 0.25 oz peaty scotch on top and garnish with a candied ginger.',
            img: 'img/penicillin.jpg'
            },
];
