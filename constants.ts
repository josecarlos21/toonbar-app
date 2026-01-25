
import { Cocktail } from './types';

const optimize = (url: string) => {
  if (!url) return '';
  if (!url.includes('unsplash.com')) return url;
  
  // Limpiamos parámetros previos de Unsplash si existen para tener control total
  const baseUrl = url.split('?')[0];
  return `${baseUrl}?auto=format&fit=crop&w=600&q=75`;
};

export const COCKTAILS: Cocktail[] = [
  {
    id: 'paloma-supreme',
    family: 'Paloma Variations',
    name: 'Paloma Supreme',
    description: 'El cóctel mexicano por excelencia. Una explosión de frescura cítrica con el carácter del tequila y burbujas rosadas.',
    image: optimize('https://images.unsplash.com/photo-1582260655272-4c22737f5cae'),
    tags: ['Trending', 'Refrescante', 'Tequila', 'Mexicano'],
    difficulty: 'Fácil',
    time: '5 min',
    rating: 4.9,
    likes: 1240,
    pairing: {
      name: 'Guacamole',
      description: 'La grasa saludable del aguacate corta la acidez.',
      image: optimize('https://images.unsplash.com/photo-1594910620614-c3e66041a943')
    },
    ingredients: [
      { name: 'Tequila Blanco', amount: '60 ml', icon: 'local_drink', color: 'bg-blue-100' },
      { name: 'Jugo de Lima', amount: '15 ml', icon: 'eco', color: 'bg-green-100' },
      { name: 'Refresco Toronja', amount: 'Top', icon: 'bubble_chart', color: 'bg-pink-100' },
      { name: 'Sal Volcánica', amount: 'Pizca', icon: 'grain', color: 'bg-gray-100' }
    ],
    steps: [
      { id: 1, title: 'Escarchado', description: 'Pasa lima por el borde y sumerge en sal.', image: optimize('https://images.unsplash.com/photo-1599021456807-25db0f974333'), bgColor: 'bg-blue-200' },
      { id: 2, title: 'Hielo & Base', description: 'Vaso lleno de hielo. Vierte tequila y lima.', image: optimize('https://images.unsplash.com/photo-1582260655272-4c22737f5cae'), bgColor: 'bg-green-200' },
      { id: 3, title: 'Burbujas', description: 'Top de refresco de toronja.', image: optimize('https://images.unsplash.com/photo-1629249622387-a2267b2cb20f'), bgColor: 'bg-pink-200' }
    ]
  },
  {
    id: 'paloma-spicy',
    family: 'Paloma Variations',
    name: 'Spicy Paloma',
    description: 'La hermana atrevida de la Paloma. Toronja asada y un toque de chile serrano.',
    image: optimize('https://images.unsplash.com/photo-1556679343-c7306c1976bc'), 
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
       { id: 1, title: 'Muddle', description: 'Machaca el chile con agave.', image: optimize('https://images.unsplash.com/photo-1563223842-83c31b0df2cb'), bgColor: 'bg-red-100' },
       { id: 2, title: 'Mix', description: 'Agrega mezcal y jugo. Agita.', image: optimize('https://images.unsplash.com/photo-1544145945-f90425340c7e'), bgColor: 'bg-orange-100' }
    ]
  },
  {
    id: 'spicy-margarita',
    family: 'Margarita World',
    name: 'Spicy Margarita',
    description: 'El clásico reinventado con un toque de jalapeño que despierta los sentidos.',
    image: optimize('https://images.unsplash.com/photo-1551024709-8f23befc6f87'),
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
      { id: 1, title: 'Borde', description: 'Escarcha con Tajín.', image: optimize('https://images.unsplash.com/photo-1629249622387-a2267b2cb20f'), bgColor: 'bg-red-200' },
      { id: 2, title: 'Shake', description: 'Agita con hielo y jalapeño.', image: optimize('https://images.unsplash.com/photo-1594145000571-085e6dd35432'), bgColor: 'bg-yellow-200' }
    ]
  },
  {
    id: 'margarita-clasica',
    family: 'Margarita World',
    name: 'Margarita Clásica',
    description: 'La receta original de 1948. Equilibrio perfecto entre dulce, ácido y salado.',
    image: optimize('https://images.unsplash.com/photo-1566737236500-c8ac43014a67'),
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
       { id: 1, title: 'Shake', description: 'Agita vigorosamente.', image: optimize('https://images.unsplash.com/photo-1544145945-f90425340c7e'), bgColor: 'bg-green-100' },
       { id: 2, title: 'Serve', description: 'Sirve en copa escarchada.', image: optimize('https://images.unsplash.com/photo-1572911226784-0802c6326d9e'), bgColor: 'bg-white' }
    ]
  },
  {
    id: 'negroni',
    family: 'Gin Bar',
    name: 'Negroni',
    description: 'El rey de los aperitivos. Amargo, dulce y fuerte.',
    image: optimize('https://images.unsplash.com/photo-1551754655-427029071e65'),
    tags: ['Clásico', 'Aperitivo', 'Gin'],
    difficulty: 'Fácil',
    time: '4 min',
    rating: 4.8,
    likes: 1800,
    pairing: {
      name: 'Tabla de Quesos',
      description: 'Quesos curados y aceitunas.',
      image: optimize('https://images.unsplash.com/photo-1631379578550-7038263db699')
    },
    ingredients: [
      { name: 'Ginebra', amount: '30 ml', icon: 'local_drink', color: 'bg-blue-50' },
      { name: 'Vermut Rojo', amount: '30 ml', icon: 'wine_bar', color: 'bg-red-900 text-white' },
      { name: 'Campari', amount: '30 ml', icon: 'local_bar', color: 'bg-red-500 text-white' }
    ],
    steps: [
      { id: 1, title: 'Build', description: 'Llena un vaso Old Fashioned con hielo.', image: optimize('https://images.unsplash.com/photo-1536935338788-843bb52d3d08'), bgColor: 'bg-blue-100' },
      { id: 2, title: 'Mix', description: 'Vierte ginebra, vermut y Campari. Remueve.', image: optimize('https://images.unsplash.com/photo-1551754655-427029071e65'), bgColor: 'bg-red-200' },
      { id: 3, title: 'Garnish', description: 'Decora con rodaja de naranja.', image: optimize('https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b'), bgColor: 'bg-orange-100' }
    ]
  },
  {
    id: 'mojito-cubano',
    family: 'Tropical Vibes',
    name: 'Mojito Clásico',
    description: 'Menta fresca, azúcar y ron en perfecta armonía.',
    image: optimize('https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd'),
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
      { id: 1, title: 'Muddle', description: 'Machaca menta y lima.', image: optimize('https://images.unsplash.com/photo-1563223842-83c31b0df2cb'), bgColor: 'bg-green-100' },
      { id: 2, title: 'Mix', description: 'Añade ron y hielo picado.', image: optimize('https://images.unsplash.com/photo-1568284687572-c07a9b0c74be'), bgColor: 'bg-gray-200' }
    ]
  },
  {
    id: 'espresso-martini',
    family: 'Vodka Lounge',
    name: 'Espresso Martini',
    description: 'Despiértate y celebra.',
    image: optimize('https://images.unsplash.com/photo-1545438102-799c3991ffb2'),
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
       { id: 1, title: 'Shake Hard', description: 'Agita muy fuerte para espuma.', image: optimize('https://images.unsplash.com/photo-1594145000571-085e6dd35432'), bgColor: 'bg-orange-200' }
    ]
  },
  {
    id: 'michelada',
    family: 'Mexicanas',
    name: 'Michelada',
    description: 'Cerveza preparada con todo. La cura para todo mal.',
    image: optimize('https://images.unsplash.com/photo-1587223962930-cb7f31384c19'),
    tags: ['Mexicano', 'Picante', 'Cerveza'],
    difficulty: 'Fácil',
    time: '3 min',
    rating: 4.9,
    likes: 2100,
    pairing: {
      name: 'Tacos al Pastor',
      description: 'Tacos al pastor con piña.',
      image: optimize('https://images.unsplash.com/photo-1564767667233-d9551c960322')
    },
    ingredients: [
      { name: 'Cerveza', amount: '1', icon: 'sports_bar', color: 'bg-yellow-200' },
      { name: 'Limón', amount: '30 ml', icon: 'eco', color: 'bg-green-100' },
      { name: 'Salsas', amount: 'Mix', icon: 'science', color: 'bg-black text-white' },
      { name: 'Chile', amount: 'Polvo', icon: 'whatshot', color: 'bg-red-500 text-white' }
    ],
    steps: [
       { id: 1, title: 'Rim', description: 'Escarcha el vaso con sal y chile.', image: optimize('https://images.unsplash.com/photo-1536935338788-843bb52d3d08'), bgColor: 'bg-red-200' },
       { id: 2, title: 'Season', description: 'Agrega hielo, limón, salsas y especias.', image: optimize('https://images.unsplash.com/photo-1587223962930-cb7f31384c19'), bgColor: 'bg-yellow-100' },
       { id: 3, title: 'Pour', description: 'Vierte la cerveza fría lentamente.', image: optimize('https://images.unsplash.com/photo-1620916566398-39f1143ab7be'), bgColor: 'bg-yellow-50' }
    ]
  }
];
