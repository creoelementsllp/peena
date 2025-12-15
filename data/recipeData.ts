import { Recipe } from '../types';

export const RECIPES: Recipe[] = [
  {
    id: '1',
    title: 'Classic Earl Grey',
    description: 'Aromatic and refined, the timeless elegance of bergamot-infused black tea.',
    imageUrl: '/images/earl-grey-tea.jpg',
    category: 'Tea',
    prepTime: '5m',
    author: 'Elena R.',
    difficulty: 'Easy',
    servings: 1,
    ingredients: [
      '1 tbsp loose Earl Grey tea leaves',
      '250ml freshly boiled water',
      'Honey or sugar to taste',
      'Lemon slice (optional)',
      'Milk (optional)'
    ],
    instructions: [
      'Heat fresh water to 95°C (just below boiling).',
      'Warm your teacup or teapot with hot water.',
      'Add Earl Grey leaves to an infuser.',
      'Pour hot water over the leaves.',
      'Steep for 3-5 minutes depending on strength preference.',
      'Remove infuser and add honey, lemon, or milk as desired.'
    ]
  },
  {
    id: '2',
    title: 'Velvet Espresso',
    description: 'Rich, creamy, and sophisticated espresso-based delight with velvety microfoam.',
    imageUrl: '/images/velvet-espresso.jpg',
    category: 'Coffee',
    prepTime: '8m',
    author: 'Marco S.',
    difficulty: 'Medium',
    servings: 1,
    ingredients: [
      '18g freshly ground espresso beans',
      '200ml whole milk',
      '1 tsp vanilla syrup',
      'Cocoa powder for dusting',
      'Dark chocolate shavings'
    ],
    instructions: [
      'Pull a double espresso shot into a warmed mug.',
      'Add vanilla syrup and stir to combine.',
      'Steam milk until it reaches a velvety microfoam consistency.',
      'Pour steamed milk over espresso, creating latte art if desired.',
      'Dust with cocoa powder and garnish with chocolate shavings.'
    ]
  },
  {
    id: '3',
    title: 'Pinot Noir Tasting',
    description: 'Elegant notes of cherry, raspberry, and subtle earthy undertones.',
    imageUrl: '/images/pinot-noir-wine.jpg',
    category: 'Wine',
    prepTime: '2m',
    author: 'Sarah J.',
    difficulty: 'Easy',
    servings: 1,
    ingredients: [
      '1 bottle Pinot Noir (chilled to 14-16°C)',
      'Proper wine glasses',
      'Wine decanter (optional)'
    ],
    instructions: [
      'Open the bottle 30 minutes before serving to let it breathe.',
      'Pour into a large-bowled wine glass.',
      'Swirl gently to release aromas.',
      'Observe the color and legs of the wine.',
      'Take a moment to smell the bouquet before tasting.',
      'Sip slowly, letting the wine coat your palate.'
    ]
  },
  {
    id: '4',
    title: 'Japanese Matcha Ceremony',
    description: 'A meditative ritual featuring ceremonial-grade matcha whisked to perfection.',
    imageUrl: '/images/matcha-ceremony.jpg',
    category: 'Tea',
    prepTime: '10m',
    author: 'Yuki T.',
    difficulty: 'Medium',
    servings: 1,
    ingredients: [
      '2g ceremonial grade matcha powder',
      '70ml hot water (70-80°C)',
      'Chasen (bamboo whisk)',
      'Chawan (tea bowl)',
      'Tea scoop'
    ],
    instructions: [
      'Sift matcha powder into a warm chawan to remove clumps.',
      'Add a small amount of hot water (not boiling).',
      'Whisk vigorously in a W or M motion using the chasen.',
      'Continue until a fine layer of foam forms on top.',
      'The tea should have a smooth, creamy consistency.',
      'Drink directly from the bowl in three sips.'
    ]
  },
  {
    id: '5',
    title: 'Belgian Wheat Beer',
    description: 'Refreshing witbier with hints of orange peel and coriander.',
    imageUrl: '/images/belgian-wheat-beer.jpg',
    category: 'Beer',
    prepTime: '2m',
    author: 'James B.',
    difficulty: 'Easy',
    servings: 1,
    ingredients: [
      '1 bottle Belgian Witbier (chilled to 4-7°C)',
      'Proper wheat beer glass',
      'Orange slice for garnish'
    ],
    instructions: [
      'Chill the glass in the freezer for 5 minutes.',
      'Open the bottle and pour at a 45-degree angle.',
      'Straighten the glass as it fills to create a proper head.',
      'Leave some yeast at the bottom or swirl and add.',
      'Garnish with an orange slice on the rim.',
      'Enjoy the citrusy, refreshing taste.'
    ]
  },
  {
    id: '6',
    title: 'Iced Matcha Latte',
    description: 'Earthly delights with a cool finish – ceremonial grade matcha at its finest.',
    imageUrl: '/images/matcha-latte-iced.jpg',
    category: 'Tea',
    prepTime: '4m',
    author: 'Yuki T.',
    difficulty: 'Easy',
    servings: 1,
    ingredients: [
      '2 tsp Matcha powder',
      '2 oz Hot water',
      '1 oz Honey or agave',
      '8 oz Cold milk (dairy or plant-based)',
      'Ice cubes',
      'Matcha powder for dusting'
    ],
    instructions: [
      'Sift matcha powder into a bowl to remove clumps.',
      'Add hot water and whisk vigorously in a zig-zag motion until frothy.',
      'Add honey or agave and whisk to combine.',
      'Fill a tall glass with ice.',
      'Pour cold milk over ice.',
      'Pour matcha mixture over milk and stir gently.',
      'Dust with additional matcha powder.'
    ]
  },
  {
    id: '7',
    title: 'Cabernet Sauvignon Experience',
    description: 'Bold blackcurrant and cedar notes in this full-bodied classic.',
    imageUrl: '/images/cabernet-sauvignon.jpg',
    category: 'Wine',
    prepTime: '5m',
    author: 'Michael K.',
    difficulty: 'Easy',
    servings: 1,
    ingredients: [
      '1 bottle Cabernet Sauvignon',
      'Red wine decanter',
      'Large-bowled wine glasses',
      'Wine thermometer (optional)'
    ],
    instructions: [
      'Decant the wine 1-2 hours before serving for best results.',
      'Serve at 16-18°C (slightly below room temperature).',
      'Use large-bowled glasses to allow the wine to breathe.',
      'Swirl the wine gently to open up the flavors.',
      'Pair with red meat, aged cheeses, or dark chocolate.'
    ]
  },
  {
    id: '8',
    title: 'Cold Brew Concentrate',
    description: 'Smooth, low-acid coffee steeped overnight for maximum flavor.',
    imageUrl: '/images/cold-brew-coffee.jpg',
    category: 'Coffee',
    prepTime: '12h',
    author: 'Sofia M.',
    difficulty: 'Easy',
    servings: 4,
    ingredients: [
      '100g coarsely ground coffee beans',
      '700ml filtered cold water',
      'Large jar or cold brew maker',
      'Fine mesh strainer or filter'
    ],
    instructions: [
      'Add coarsely ground coffee to a large jar.',
      'Pour cold filtered water over the grounds.',
      'Stir gently to ensure all grounds are wet.',
      'Cover and refrigerate for 12-24 hours.',
      'Strain through a fine mesh filter or cheesecloth.',
      'Dilute concentrate with water or milk when serving.',
      'Store concentrate in fridge for up to 2 weeks.'
    ]
  },
  {
    id: '9',
    title: 'English Breakfast Tea',
    description: 'A robust morning blend with malty Assam character.',
    imageUrl: '/images/english-breakfast-tea.jpg',
    category: 'Tea',
    prepTime: '5m',
    author: 'Charlotte B.',
    difficulty: 'Easy',
    servings: 1,
    ingredients: [
      '1 tbsp English Breakfast tea leaves',
      '250ml boiling water',
      'Splash of whole milk',
      'Sugar to taste'
    ],
    instructions: [
      'Warm your teapot with hot water.',
      'Add English Breakfast leaves to the pot.',
      'Pour freshly boiled water directly over leaves.',
      'Steep for 4-5 minutes for full flavor.',
      'Pour through a strainer into your cup.',
      'Add a splash of milk and sugar if desired.'
    ]
  },
  {
    id: '10',
    title: 'IPA Craft Beer Flight',
    description: 'Explore hoppy citrus notes and bitter complexity.',
    imageUrl: '/images/ipa-craft-beer.jpg',
    category: 'Beer',
    prepTime: '5m',
    author: 'Amanda P.',
    difficulty: 'Easy',
    servings: 1,
    ingredients: [
      '4 different IPA varieties (4oz each)',
      'Flight paddle or tray',
      'Tasting glasses',
      'Palate cleansers (crackers, water)'
    ],
    instructions: [
      'Arrange IPAs from lightest to most bitter.',
      'Pour each into a clean tasting glass.',
      'Start with the lightest colored/flavored IPA.',
      'Note the hop aromas before each sip.',
      'Cleanse your palate between tastings.',
      'Compare citrus, pine, and tropical notes across varieties.'
    ]
  },
  {
    id: '11',
    title: 'Chamomile Honey Tea',
    description: 'Soothing floral notes with natural honey sweetness.',
    imageUrl: '/images/chamomile-tea.jpg',
    category: 'Tea',
    prepTime: '6m',
    author: 'Lucas T.',
    difficulty: 'Easy',
    servings: 1,
    ingredients: [
      '2 tbsp dried chamomile flowers',
      '250ml hot water (90°C)',
      '1 tbsp raw honey',
      'Lemon wedge (optional)',
      'Fresh chamomile flowers for garnish'
    ],
    instructions: [
      'Place chamomile flowers in a tea infuser.',
      'Pour hot water over the flowers.',
      'Cover and steep for 5 minutes.',
      'Remove infuser and let cool slightly.',
      'Stir in honey while still warm.',
      'Add a squeeze of lemon if desired.',
      'Garnish with fresh chamomile flowers.'
    ]
  },
  {
    id: '12',
    title: 'Chai Spiced Latte',
    description: 'Warming spices and bold tea create comfort in a cup.',
    imageUrl: '/images/chai-spiced-latte.jpg',
    category: 'Tea',
    prepTime: '10m',
    author: 'Priya K.',
    difficulty: 'Medium',
    servings: 2,
    ingredients: [
      '2 cups Water',
      '4 Black tea bags',
      '2 Cinnamon sticks',
      '6 Cardamom pods',
      '4 Whole cloves',
      '1 inch Fresh ginger, sliced',
      '2 cups Milk',
      '3 tbsp Honey or sugar',
      'Ground cinnamon for topping'
    ],
    instructions: [
      'In a pot, bring water to boil with cinnamon, cardamom, cloves, and ginger.',
      'Simmer for 5 minutes to release spice flavors.',
      'Add tea bags and steep for 3-4 minutes.',
      'Add milk and honey, heat until hot but not boiling.',
      'Strain into mugs.',
      'Dust with ground cinnamon and serve hot.'
    ]
  },
  {
    id: '13',
    title: 'Rosé Wine Spritzer',
    description: 'Light and refreshing, perfect for warm afternoons.',
    imageUrl: '/images/rose-wine-spritzer.jpg',
    category: 'Wine',
    prepTime: '3m',
    author: 'Diego R.',
    difficulty: 'Easy',
    servings: 1,
    ingredients: [
      '4 oz chilled Rosé wine',
      '2 oz sparkling water',
      'Fresh strawberries',
      'Fresh mint leaves',
      'Ice cubes'
    ],
    instructions: [
      'Fill a wine glass with ice cubes.',
      'Pour chilled Rosé over the ice.',
      'Top with sparkling water.',
      'Add sliced strawberries.',
      'Garnish with fresh mint.',
      'Stir gently and serve immediately.'
    ]
  },
  {
    id: '14',
    title: 'Pour-Over Coffee',
    description: 'Precision brewing for the cleanest, most nuanced cup.',
    imageUrl: '/images/pour-over-coffee.jpg',
    category: 'Coffee',
    prepTime: '6m',
    author: 'Emma L.',
    difficulty: 'Medium',
    servings: 1,
    ingredients: [
      '22g medium-fine ground coffee',
      '350ml filtered water (92-96°C)',
      'V60 or Chemex dripper',
      'Paper filter',
      'Gooseneck kettle',
      'Scale and timer'
    ],
    instructions: [
      'Rinse paper filter with hot water and discard water.',
      'Add ground coffee to the filter and level the bed.',
      'Start timer and pour 50ml water to bloom for 30 seconds.',
      'Pour remaining water in slow circles from center outward.',
      'Total brew time should be 2:30-3:30.',
      'Serve immediately for best flavor.'
    ]
  },
  {
    id: '15',
    title: 'Stout Beer Float',
    description: 'Creamy vanilla ice cream meets rich, roasty stout.',
    imageUrl: '/images/stout-beer-float.jpg',
    category: 'Beer',
    prepTime: '3m',
    author: 'Natalie H.',
    difficulty: 'Easy',
    servings: 1,
    ingredients: [
      '1 bottle milk stout or porter',
      '2 scoops vanilla ice cream',
      'Chocolate shavings',
      'Tall glass, chilled'
    ],
    instructions: [
      'Chill your serving glass.',
      'Add scoops of vanilla ice cream to the glass.',
      'Slowly pour stout over the ice cream.',
      'Let the foam settle, then add more stout.',
      'Top with chocolate shavings.',
      'Serve with a long spoon and straw.'
    ]
  },
  {
    id: '16',
    title: 'Affogato',
    description: 'Italian simplicity – hot espresso meets cold gelato.',
    imageUrl: '/images/affogato.jpg',
    category: 'Coffee',
    prepTime: '3m',
    author: 'Isabella F.',
    difficulty: 'Easy',
    servings: 1,
    ingredients: [
      '1 scoop vanilla gelato or ice cream',
      '1 shot fresh hot espresso',
      'Biscotti for serving',
      'Chocolate-covered espresso beans (optional)'
    ],
    instructions: [
      'Place a scoop of cold gelato in a small bowl or glass.',
      'Pull a fresh shot of hot espresso.',
      'Pour the espresso directly over the gelato.',
      'Serve immediately with biscotti.',
      'Garnish with chocolate-covered espresso beans if desired.'
    ]
  },
  {
    id: 'featured-daily',
    title: 'Golden Oolong Sunrise',
    description: 'A masterfully crafted oolong tea with honey undertones and floral complexity. The perfect balance of tradition and refinement.',
    imageUrl: '/images/golden-oolong-sunrise.jpg',
    category: 'Tea',
    prepTime: '8m',
    author: 'Peena Staff',
    difficulty: 'Medium',
    servings: 1,
    ingredients: [
      '5g premium Oolong tea leaves',
      '200ml spring water (90°C)',
      '1 tsp raw honey',
      'Gaiwan or small teapot',
      'Aroma cup and tasting cup'
    ],
    instructions: [
      'Warm your gaiwan or teapot with hot water.',
      'Add oolong leaves and pour 90°C water.',
      'First infusion: steep for 30 seconds and discard (awakening the leaves).',
      'Second infusion: steep for 45 seconds.',
      'Pour into aroma cup first, then into tasting cup.',
      'Add honey to taste after the third infusion.',
      'Re-steep leaves up to 6 times, increasing time with each infusion.'
    ]
  }
];

export const CATEGORIES = ['All', 'Tea', 'Coffee', 'Wine', 'Beer', 'Specialty'] as const;
