import { Cocktail } from './types';

export const COCKTAILS: Cocktail[] = [
  // --- FAMILIA PALOMA ---
  {
    id: 'paloma-supreme',
    family: 'Paloma Variations',
    name: 'Paloma Supreme',
    description: 'El cóctel mexicano por excelencia. Una explosión de frescura cítrica con el carácter del tequila y burbujas rosadas.',
    image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=800&q=80',
    tags: ['Trending', 'Refrescante', 'Tequila', 'Mexicano'],
    difficulty: 'Fácil',
    time: '5 min',
    rating: 4.9,
    likes: 1240,
    pairing: {
      name: 'Guacamole',
      description: 'La grasa saludable del aguacate corta la acidez.',
      image: 'https://images.unsplash.com/photo-1615887023516-9b6c50cf2c1c?auto=format&fit=crop&w=600&q=80'
    },
    ingredients: [
      { name: 'Tequila Blanco', amount: '60 ml', icon: 'local_drink', color: 'bg-blue-100' },
      { name: 'Jugo de Lima', amount: '15 ml', icon: 'eco', color: 'bg-green-100' },
      { name: 'Refresco Toronja', amount: 'Top', icon: 'bubble_chart', color: 'bg-pink-100' },
      { name: 'Sal Volcánica', amount: 'Pizca', icon: 'grain', color: 'bg-gray-100' }
    ],
    steps: [
      { id: 1, title: 'Escarchado', description: 'Pasa lima por el borde y sumerge en sal.', image: 'https://images.unsplash.com/photo-1599021456807-25db0f974333?auto=format&fit=crop&w=400&q=80', bgColor: 'bg-blue-200' },
      { id: 2, title: 'Hielo & Base', description: 'Vaso lleno de hielo. Vierte tequila y lima.', image: 'https://images.unsplash.com/photo-1582260655272-4c22737f5cae?auto=format&fit=crop&w=400&q=80', bgColor: 'bg-green-200' },
      { id: 3, title: 'Burbujas', description: 'Top de refresco de toronja.', image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=400&q=80', bgColor: 'bg-pink-200' }
    ]
  },
  {
    id: 'paloma-spicy',
    family: 'Paloma Variations',
    name: 'Spicy Paloma',
    description: 'La hermana atrevida de la Paloma. Toronja asada y un toque de chile serrano.',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80', 
    tags: ['Picante', 'Tequila'],
    difficulty: 'Medio',
    time: '7 min',
    rating: 4.7,
    likes: 800,
    ingredients: [
      { name: 'Mezcal', amount: '45 ml', icon: 'local_fire_department', color: 'bg-orange-100' },
      { name: 'Jugo Toronja', amount: '60 ml', icon: 'water_drop', color: 'bg-pink-100' },
      { name: 'Rodaja Chile', amount: '2 u', icon: 'whatshot', color: 'bg-red-100' },
      { name: 'Soda', amount: 'Top', icon: 'bubble_chart', color: 'bg-blue-50' }
    ],
    steps: [
       { id: 1, title: 'Muddle', description: 'Machaca el chile con agave.', image: 'https://images.unsplash.com/photo-1615887023516-9b6c50cf2c1c?auto=format&fit=crop&w=400&q=80', bgColor: 'bg-red-100' },
       { id: 2, title: 'Mix', description: 'Agrega mezcal y jugo. Agita.', image: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=400&q=80', bgColor: 'bg-orange-100' }
    ]
  },

  // --- FAMILIA MARGARITA ---
  {
    id: 'spicy-margarita',
    family: 'Margarita World',
    name: 'Spicy Margarita',
    description: 'El clásico reinventado con un toque de jalapeño que despierta los sentidos.',
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80',
    tags: ['Picante', 'Clásico', 'Tequila', 'Mexicano'],
    difficulty: 'Medio',
    time: '7 min',
    rating: 4.8,
    likes: 920,
    ingredients: [
      { name: 'Tequila Reposado', amount: '60 ml', icon: 'local_drink', color: 'bg-orange-100' },
      { name: 'Triple Sec', amount: '30 ml', icon: 'liquor', color: 'bg-yellow-100' },
      { name: 'Jugo de Lima', amount: '30 ml', icon: 'eco', color: 'bg-green-100' },
      { name: 'Jalapeño', amount: '2 u', icon: 'whatshot', color: 'bg-red-100' }
    ],
    steps: [
      { id: 1, title: 'Borde', description: 'Escarcha con Tajín.', image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=400&q=80', bgColor: 'bg-red-200' },
      { id: 2, title: 'Shake', description: 'Agita con hielo y jalapeño.', image: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=400&q=80', bgColor: 'bg-yellow-200' }
    ]
  },
  {
    id: 'margarita-clasica',
    family: 'Margarita World',
    name: 'Margarita Clásica',
    description: 'La receta original de 1948. Equilibrio perfecto entre dulce, ácido y salado.',
    image: 'https://images.unsplash.com/photo-1566737236500-c8ac43014a67?auto=format&fit=crop&w=800&q=80',
    tags: ['Clásico', 'Tequila'],
    difficulty: 'Fácil',
    time: '5 min',
    rating: 4.9,
    likes: 2100,
    ingredients: [
      { name: 'Tequila Blanco', amount: '50 ml', icon: 'local_drink', color: 'bg-blue-50' },
      { name: 'Cointreau', amount: '25 ml', icon: 'liquor', color: 'bg-orange-100' },
      { name: 'Jugo Lima', amount: '25 ml', icon: 'eco', color: 'bg-green-100' }
    ],
    steps: [
       { id: 1, title: 'Shake', description: 'Agita vigorosamente.', image: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=400&q=80', bgColor: 'bg-green-100' },
       { id: 2, title: 'Serve', description: 'Sirve en copa escarchada.', image: 'https://images.unsplash.com/photo-1572911226784-0802c6326d9e?auto=format&fit=crop&w=400&q=80', bgColor: 'bg-white' }
    ]
  },
  {
    id: 'margarita-fresa',
    family: 'Margarita World',
    name: 'Frozen Fresa',
    description: 'Como un granizado para adultos. Dulce, helado y peligroso.',
    image: 'https://images.unsplash.com/photo-1623594611096-7f70b7495b46?auto=format&fit=crop&w=800&q=80',
    tags: ['Verano', 'Frutal', 'Tequila'],
    difficulty: 'Fácil',
    time: '5 min',
    rating: 4.6,
    likes: 1500,
    ingredients: [
      { name: 'Tequila', amount: '60 ml', icon: 'local_drink', color: 'bg-blue-50' },
      { name: 'Fresas Congeladas', amount: '1 taza', icon: 'ac_unit', color: 'bg-red-100' },
      { name: 'Jarabe', amount: '30 ml', icon: 'water_drop', color: 'bg-gray-100' }
    ],
    steps: [
       { id: 1, title: 'Blend', description: 'Licúa todo hasta punto de nieve.', image: 'https://images.unsplash.com/photo-1605218427339-a937a092fb25?auto=format&fit=crop&w=400&q=80', bgColor: 'bg-red-200' }
    ]
  },

  // --- FAMILIA GIN & TONIC ---
  {
    id: 'gin-tonic-botanico',
    family: 'Gin Bar',
    name: 'Gin Tonic Botánico',
    description: 'Limpio, crujiente y aromático.',
    image: 'https://images.unsplash.com/photo-1597075687490-8f673c6c17f6?auto=format&fit=crop&w=800&q=80',
    tags: ['Clásico', 'Refrescante', 'Gin'],
    difficulty: 'Fácil',
    time: '3 min',
    rating: 4.6,
    likes: 1450,
    ingredients: [
      { name: 'Gin', amount: '60 ml', icon: 'local_drink', color: 'bg-blue-50' },
      { name: 'Tónica', amount: '120 ml', icon: 'bubble_chart', color: 'bg-gray-50' },
      { name: 'Pepino', amount: 'Tira', icon: 'horizontal_rule', color: 'bg-green-100' }
    ],
    steps: [
      { id: 1, title: 'Hielo', description: 'Copa balón con mucho hielo.', image: 'https://images.unsplash.com/photo-1594451631405-b778465d3a01?auto=format&fit=crop&w=400&q=80', bgColor: 'bg-blue-100' },
      { id: 2, title: 'Servir', description: 'Gin y tónica suavemente.', image: 'https://images.unsplash.com/photo-1560526860-f33503c35b54?auto=format&fit=crop&w=400&q=80', bgColor: 'bg-gray-100' }
    ]
  },
  {
    id: 'negroni',
    family: 'Gin Bar',
    name: 'Negroni',
    description: 'El rey de los aperitivos. Amargo, dulce y fuerte.',
    image: 'https://images.unsplash.com/photo-1551754655-427029071e65?auto=format&fit=crop&w=800&q=80',
    tags: ['Clásico', 'Aperitivo', 'Gin'],
    difficulty: 'Fácil',
    time: '4 min',
    rating: 4.8,
    likes: 1800,
    ingredients: [
      { name: 'Gin', amount: '30 ml', icon: 'local_drink', color: 'bg-blue-50' },
      { name: 'Vermut Rojo', amount: '30 ml', icon: 'wine_bar', color: 'bg-red-900 text-white' },
      { name: 'Campari', amount: '30 ml', icon: 'local_bar', color: 'bg-red-500 text-white' }
    ],
    steps: [
      { id: 1, title: 'Build', description: 'Construye sobre hielo.', image: 'https://images.unsplash.com/photo-1536935338788-843bb52d3d08?auto=format&fit=crop&w=400&q=80', bgColor: 'bg-red-200' },
      { id: 2, title: 'Stir', description: 'Remueve para enfriar.', image: 'https://images.unsplash.com/photo-1551754655-427029071e65?auto=format&fit=crop&w=400&q=80', bgColor: 'bg-orange-100' }
    ]
  },
  {
    id: 'tom-collins',
    family: 'Gin Bar',
    name: 'Tom Collins',
    description: 'Limonada con esteroides.',
    image: 'https://images.unsplash.com/photo-1587888637140-849b13f3e1a3?auto=format&fit=crop&w=800&q=80',
    tags: ['Refrescante', 'Gin'],
    difficulty: 'Fácil',
    time: '3 min',
    rating: 4.5,
    likes: 1250,
    ingredients: [
      { name: 'Gin', amount: '60 ml', icon: 'local_drink', color: 'bg-blue-50' },
      { name: 'Limón', amount: '30 ml', icon: 'eco', color: 'bg-yellow-100' },
      { name: 'Soda', amount: 'Top', icon: 'bubble_chart', color: 'bg-blue-100' }
    ],
    steps: [
       { id: 1, title: 'Mix', description: 'Mezcla gin y limón.', image: 'https://images.unsplash.com/photo-1587888637140-849b13f3e1a3?auto=format&fit=crop&w=400&q=80', bgColor: 'bg-yellow-50' }
    ]
  },

  // --- FAMILIA TROPICAL ---
  {
    id: 'mojito-cubano',
    family: 'Tropical Vibes',
    name: 'Mojito Clásico',
    description: 'Menta fresca, azúcar y ron en perfecta armonía.',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80',
    tags: ['Clásico', 'Refrescante', 'Ron'],
    difficulty: 'Medio',
    time: '8 min',
    rating: 4.7,
    likes: 1500,
    ingredients: [
      { name: 'Ron Blanco', amount: '60 ml', icon: 'local_drink', color: 'bg-gray-100' },
      { name: 'Menta', amount: '10 u', icon: 'grass', color: 'bg-green-100' },
      { name: 'Lima', amount: 'Media', icon: 'eco', color: 'bg-green-200' }
    ],
    steps: [
      { id: 1, title: 'Muddle', description: 'Machaca menta y lima.', image: 'https://images.unsplash.com/photo-1563223842-83c31b0df2cb?auto=format&fit=crop&w=400&q=80', bgColor: 'bg-green-100' },
      { id: 2, title: 'Mix', description: 'Añade ron y hielo picado.', image: 'https://images.unsplash.com/photo-1568284687572-c07a9b0c74be?auto=format&fit=crop&w=400&q=80', bgColor: 'bg-gray-200' }
    ]
  },
  {
    id: 'pina-colada',
    family: 'Tropical Vibes',
    name: 'Piña Colada',
    description: 'Si te gusta que te pille la lluvia...',
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=80',
    tags: ['Verano', 'Ron'],
    difficulty: 'Fácil',
    time: '5 min',
    rating: 4.9,
    likes: 2300,
    ingredients: [
      { name: 'Ron Blanco', amount: '60 ml', icon: 'local_drink', color: 'bg-gray-100' },
      { name: 'Coco', amount: '60 ml', icon: 'egg', color: 'bg-white' },
      { name: 'Piña', amount: '120 ml', icon: 'local_bar', color: 'bg-yellow-200' }
    ],
    steps: [
       { id: 1, title: 'Blend', description: 'Todo a la licuadora.', image: 'https://images.unsplash.com/photo-1605218427339-a937a092fb25?auto=format&fit=crop&w=400&q=80', bgColor: 'bg-blue-100' }
    ]
  },
  {
    id: 'mai-tai',
    family: 'Tropical Vibes',
    name: 'Mai Tai',
    description: 'El rey de los cócteles Tiki.',
    image: 'https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&w=800&q=80',
    tags: ['Tropical', 'Ron'],
    difficulty: 'Medio',
    time: '6 min',
    rating: 4.6,
    likes: 1400,
    ingredients: [
      { name: 'Rones', amount: '60 ml', icon: 'local_drink', color: 'bg-orange-900 text-white' },
      { name: 'Orgeat', amount: '15 ml', icon: 'grain', color: 'bg-yellow-50' }
    ],
    steps: [
       { id: 1, title: 'Shake', description: 'Agita con hielo.', image: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=400&q=80', bgColor: 'bg-orange-200' }
    ]
  },
  {
    id: 'daiquiri',
    family: 'Tropical Vibes',
    name: 'Daiquiri',
    description: 'La trinidad del ron: ron, lima y azúcar.',
    image: 'https://images.unsplash.com/photo-1618852305546-e762a45d045c?auto=format&fit=crop&w=800&q=80',
    tags: ['Clásico', 'Ron'],
    difficulty: 'Fácil',
    time: '5 min',
    rating: 4.7,
    likes: 1650,
    ingredients: [
      { name: 'Ron Blanco', amount: '60 ml', icon: 'local_drink', color: 'bg-gray-100' },
      { name: 'Lima', amount: '30 ml', icon: 'eco', color: 'bg-green-100' }
    ],
    steps: [
       { id: 1, title: 'Shake', description: 'Agita hasta congelar.', image: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=400&q=80', bgColor: 'bg-green-100' }
    ]
  },

  // --- FAMILIA VODKA LOUNGE ---
  {
    id: 'espresso-martini',
    family: 'Vodka Lounge',
    name: 'Espresso Martini',
    description: 'Despiértate y celebra.',
    image: 'https://images.unsplash.com/photo-1545438102-799c3991ffb2?auto=format&fit=crop&w=800&q=80',
    tags: ['Energético', 'Elegante', 'Vodka'],
    difficulty: 'Difícil',
    time: '6 min',
    rating: 5.0,
    likes: 2100,
    ingredients: [
      { name: 'Vodka', amount: '50 ml', icon: 'local_drink', color: 'bg-gray-100' },
      { name: 'Espresso', amount: '30 ml', icon: 'coffee', color: 'bg-yellow-900 text-white' }
    ],
    steps: [
       { id: 1, title: 'Shake Hard', description: 'Agita muy fuerte para espuma.', image: 'https://images.unsplash.com/photo-1594145000571-085e6dd35432?auto=format&fit=crop&w=400&q=80', bgColor: 'bg-orange-200' }
    ]
  },
  {
    id: 'blue-lagoon',
    family: 'Vodka Lounge',
    name: 'Blue Lagoon',
    description: 'Azul eléctrico de los 80s.',
    image: 'https://images.unsplash.com/photo-1582106245687-cbb466a9f07f?auto=format&fit=crop&w=800&q=80',
    tags: ['Verano', 'Dulce', 'Vodka'],
    difficulty: 'Fácil',
    time: '3 min',
    rating: 4.5,
    likes: 850,
    ingredients: [
      { name: 'Vodka', amount: '45 ml', icon: 'local_drink', color: 'bg-gray-100' },
      { name: 'Blue Curaçao', amount: '30 ml', icon: 'water_drop', color: 'bg-blue-100' }
    ],
    steps: [
       { id: 1, title: 'Build', description: 'Directo al vaso con hielo.', image: 'https://images.unsplash.com/photo-1589669677025-a1c22501a4df?auto=format&fit=crop&w=400&q=80', bgColor: 'bg-blue-200' }
    ]
  },
  {
    id: 'moscow-mule',
    family: 'Vodka Lounge',
    name: 'Moscow Mule',
    description: 'Picante y refrescante en cobre.',
    image: 'https://images.unsplash.com/photo-1530991037531-51f5568d3881?auto=format&fit=crop&w=800&q=80',
    tags: ['Populares', 'Vodka'],
    difficulty: 'Fácil',
    time: '4 min',
    rating: 4.7,
    likes: 1600,
    ingredients: [
      { name: 'Vodka', amount: '60 ml', icon: 'local_drink', color: 'bg-gray-100' },
      { name: 'Ginger Beer', amount: '120 ml', icon: 'sports_bar', color: 'bg-yellow-100' }
    ],
    steps: [
       { id: 1, title: 'Build', description: 'En taza de cobre con hielo.', image: 'https://images.unsplash.com/photo-1530991037531-51f5568d3881?auto=format&fit=crop&w=400&q=80', bgColor: 'bg-orange-200' }
    ]
  },
  {
    id: 'cosmopolitan',
    family: 'Vodka Lounge',
    name: 'Cosmopolitan',
    description: 'Icono de estilo rosa.',
    image: 'https://images.unsplash.com/photo-1560963689-02e82e7a9e26?auto=format&fit=crop&w=800&q=80',
    tags: ['Elegante', 'Vodka'],
    difficulty: 'Medio',
    time: '5 min',
    rating: 4.6,
    likes: 1900,
    ingredients: [
      { name: 'Vodka', amount: '45 ml', icon: 'local_drink', color: 'bg-gray-100' },
      { name: 'Arándano', amount: '30 ml', icon: 'water_drop', color: 'bg-red-800 text-white' }
    ],
    steps: [
       { id: 1, title: 'Shake', description: 'Agita y cuela.', image: 'https://images.unsplash.com/photo-1597075687490-8f673c6c17f6?auto=format&fit=crop&w=400&q=80', bgColor: 'bg-red-100' }
    ]
  },

  // --- FAMILIA CLASSICS ---
  {
    id: 'old-fashioned',
    family: 'Old School',
    name: 'Old Fashioned',
    description: 'El padre de todos los cócteles.',
    image: 'https://images.unsplash.com/photo-1598155523122-38423bb4d6c1?auto=format&fit=crop&w=800&q=80',
    tags: ['Clásico', 'Fuerte', 'Whiskey'],
    difficulty: 'Difícil',
    time: '6 min',
    rating: 4.8,
    likes: 1950,
    ingredients: [
      { name: 'Bourbon', amount: '60 ml', icon: 'local_bar', color: 'bg-orange-200' },
      { name: 'Azúcar', amount: '1 u', icon: 'crop_square', color: 'bg-white' },
      { name: 'Bitters', amount: '3 dash', icon: 'opacity', color: 'bg-red-800 text-white' }
    ],
    steps: [
       { id: 1, title: 'Stir', description: 'Diluye lentamente.', image: 'https://images.unsplash.com/photo-1598155523122-38423bb4d6c1?auto=format&fit=crop&w=400&q=80', bgColor: 'bg-orange-200' }
    ]
  },
  {
    id: 'whiskey-sour',
    family: 'Old School',
    name: 'Whiskey Sour',
    description: 'Sedoso, ácido y dulce.',
    image: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=800&q=80',
    tags: ['Clásico', 'Whiskey'],
    difficulty: 'Medio',
    time: '5 min',
    rating: 4.7,
    likes: 1850,
    ingredients: [
      { name: 'Bourbon', amount: '60 ml', icon: 'local_bar', color: 'bg-orange-200' },
      { name: 'Limón', amount: '30 ml', icon: 'eco', color: 'bg-yellow-100' },
      { name: 'Clara', amount: '1 u', icon: 'egg', color: 'bg-white' }
    ],
    steps: [
       { id: 1, title: 'Dry Shake', description: 'Sin hielo primero.', image: 'https://images.unsplash.com/photo-1597075687490-8f673c6c17f6?auto=format&fit=crop&w=400&q=80', bgColor: 'bg-gray-100' }
    ]
  },
  // --- FAMILIA MEXICAN ---
  {
    id: 'michelada',
    family: 'Mexicanas',
    name: 'Michelada',
    description: 'Cerveza preparada con todo.',
    image: 'https://images.unsplash.com/photo-1587223962930-cb7f31384c19?auto=format&fit=crop&w=800&q=80',
    tags: ['Mexicano', 'Cerveza'],
    difficulty: 'Fácil',
    time: '3 min',
    rating: 4.9,
    likes: 2100,
    ingredients: [
      { name: 'Cerveza', amount: '1', icon: 'sports_bar', color: 'bg-yellow-200' },
      { name: 'Salsas', amount: 'Mix', icon: 'science', color: 'bg-black text-white' }
    ],
    steps: [
       { id: 1, title: 'Rim', description: 'Chile y limón.', image: 'https://images.unsplash.com/photo-1536935338788-843bb52d3d08?auto=format&fit=crop&w=400&q=80', bgColor: 'bg-red-200' }
    ]
  },
  {
    id: 'charro-negro',
    family: 'Mexicanas',
    name: 'Charro Negro',
    description: 'Cuba libre a la mexicana.',
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=80',
    tags: ['Mexicano', 'Tequila'],
    difficulty: 'Fácil',
    time: '2 min',
    rating: 4.5,
    likes: 1300,
    ingredients: [
      { name: 'Tequila', amount: '60 ml', icon: 'local_drink', color: 'bg-yellow-100' },
      { name: 'Cola', amount: 'Top', icon: 'local_bar', color: 'bg-black text-white' }
    ],
    steps: [
       { id: 1, title: 'Build', description: 'Vaso alto con hielo.', image: 'https://images.unsplash.com/photo-1625866164282-3d8819543df5?auto=format&fit=crop&w=400&q=80', bgColor: 'bg-yellow-100' }
    ]
  },
  {
    id: 'aperol-spritz',
    family: 'Summer Spritz',
    name: 'Aperol Spritz',
    description: 'Atardecer italiano.',
    image: 'https://images.unsplash.com/photo-1560512823-8db965dfc5d4?auto=format&fit=crop&w=800&q=80',
    tags: ['Aperitivo', 'Vino'],
    difficulty: 'Fácil',
    time: '3 min',
    rating: 4.6,
    likes: 1800,
    ingredients: [
       { name: 'Prosecco', amount: '90 ml', icon: 'celebration', color: 'bg-yellow-100' },
       { name: 'Aperol', amount: '60 ml', icon: 'local_bar', color: 'bg-orange-500 text-white' }
    ],
    steps: [
       { id: 1, title: '3-2-1', description: '3 Prosecco, 2 Aperol, 1 Soda.', image: 'https://images.unsplash.com/photo-1560512823-8db965dfc5d4?auto=format&fit=crop&w=400&q=80', bgColor: 'bg-orange-200' }
    ]
  }
];