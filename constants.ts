import { Cocktail } from './types';

export const COCKTAILS: Cocktail[] = [
  {
    id: 'paloma-supreme',
    name: 'Paloma Supreme',
    description: 'El cóctel mexicano por excelencia. Una explosión de frescura cítrica con el carácter del tequila y burbujas rosadas.',
    image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tags: ['Trending', 'Refrescante', 'Tequila', 'Mexicano'],
    difficulty: 'Fácil',
    time: '5 min',
    rating: 4.9,
    likes: 1240,
    pairing: {
      name: 'Guacamole & Totopos',
      description: 'La cremosidad del aguacate equilibra la acidez de la toronja.',
      image: 'https://images.unsplash.com/photo-1615887023516-9b6c50cf2c1c?auto=format&fit=crop&w=600&q=80'
    },
    ingredients: [
      { name: 'Tequila Blanco', amount: '60 ml', icon: 'local_drink', color: 'bg-blue-100' },
      { name: 'Jugo de Lima', amount: '15 ml', icon: 'eco', color: 'bg-green-100' },
      { name: 'Refresco Toronja', amount: 'Top', icon: 'bubble_chart', color: 'bg-pink-100' },
      { name: 'Sal Volcánica', amount: 'Pizca', icon: 'grain', color: 'bg-gray-100' },
      { name: 'Rodaja Toronja', amount: '1 u', icon: 'circle', color: 'bg-orange-100' }
    ],
    steps: [
      {
        id: 1,
        title: 'Escarchado',
        description: 'Pasa una rodaja de lima por el borde del vaso y sumérgelo en sal.',
        image: 'https://images.unsplash.com/photo-1599021456807-25db0f974333?auto=format&fit=crop&w=600&q=80',
        bgColor: 'bg-blue-200'
      },
      {
        id: 2,
        title: 'Hielo & Base',
        description: 'Llena el vaso con hielo hasta arriba. Vierte el Tequila y el jugo de lima.',
        image: 'https://images.unsplash.com/photo-1582260655272-4c22737f5cae?auto=format&fit=crop&w=600&q=80',
        bgColor: 'bg-green-200'
      },
      {
        id: 3,
        title: 'Burbujas',
        description: 'Completa con refresco de toronja hasta el tope. ¡Mira esa espuma!',
        image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=600&q=80',
        bgColor: 'bg-pink-200'
      },
      {
        id: 4,
        title: 'El Toque Final',
        description: 'Decora con una media luna de toronja fresca. ¡Salud!',
        image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=600&q=80',
        bgColor: 'bg-yellow-200'
      }
    ]
  },
  {
    id: 'blue-lagoon',
    name: 'Blue Lagoon',
    description: 'Un viaje directo a los años 80. Azul eléctrico, dulce y perfecto para la piscina. Una limonada para adultos con estilo.',
    image: 'https://images.unsplash.com/photo-1582106245687-cbb466a9f07f?w=800',
    tags: ['Verano', 'Dulce', 'Vodka'],
    difficulty: 'Fácil',
    time: '3 min',
    rating: 4.5,
    likes: 850,
    pairing: {
      name: 'Aros de Cebolla',
      description: 'El crujiente salado perfecto para cortar el dulzor del Curaçao.',
      image: 'https://images.unsplash.com/photo-1639024471283-03518883512d?auto=format&fit=crop&w=600&q=80'
    },
    ingredients: [
      { name: 'Vodka', amount: '45 ml', icon: 'local_drink', color: 'bg-gray-100' },
      { name: 'Blue Curaçao', amount: '30 ml', icon: 'water_drop', color: 'bg-blue-100' },
      { name: 'Limonada', amount: 'Top', icon: 'lemonade', color: 'bg-yellow-100' },
      { name: 'Hielo Picado', amount: 'Mucho', icon: 'ac_unit', color: 'bg-cyan-100' },
      { name: 'Cereza', amount: '1 u', icon: 'circle', color: 'bg-red-100' }
    ],
    steps: [
      {
        id: 1,
        title: 'Base Helada',
        description: 'Llena un vaso alto con mucho hielo picado. ¡Que esté bien frío!',
        image: 'https://images.unsplash.com/photo-1595981267035-7b04ca84a82d?auto=format&fit=crop&w=600&q=80',
        bgColor: 'bg-cyan-200'
      },
      {
        id: 2,
        title: 'La Mezcla',
        description: 'Vierte el Vodka y el Blue Curaçao sobre el hielo. Mira ese color azul.',
        image: 'https://images.unsplash.com/photo-1589669677025-a1c22501a4df?auto=format&fit=crop&w=600&q=80',
        bgColor: 'bg-blue-200'
      },
      {
        id: 3,
        title: 'Top Cítrico',
        description: 'Rellena con limonada hasta el borde y remueve suavemente.',
        image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=600&q=80',
        bgColor: 'bg-yellow-200'
      }
    ]
  },
  {
    id: 'spicy-margarita',
    name: 'Spicy Margarita',
    description: 'El clásico reinventado con un toque de jalapeño que despierta los sentidos. Picante, ácido y adictivo.',
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=800',
    tags: ['Picante', 'Clásico', 'Tequila', 'Mexicano'],
    difficulty: 'Medio',
    time: '7 min',
    rating: 4.8,
    likes: 920,
    pairing: {
      name: 'Tacos al Pastor',
      description: 'El picante del cóctel realza las especias de la carne.',
      image: 'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?auto=format&fit=crop&w=600&q=80'
    },
    ingredients: [
      { name: 'Tequila Reposado', amount: '60 ml', icon: 'local_drink', color: 'bg-orange-100' },
      { name: 'Triple Sec', amount: '30 ml', icon: 'liquor', color: 'bg-yellow-100' },
      { name: 'Jugo de Lima', amount: '30 ml', icon: 'eco', color: 'bg-green-100' },
      { name: 'Rodajas Jalapeño', amount: '2 u', icon: 'whatshot', color: 'bg-red-100' },
      { name: 'Tajín', amount: 'Borde', icon: 'grain', color: 'bg-red-200' }
    ],
    steps: [
      {
        id: 1,
        title: 'Borde Picante',
        description: 'Frota lima en el borde y escarcha con Tajín para ese toque picoso.',
        image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=600&q=80',
        bgColor: 'bg-red-200'
      },
      {
        id: 2,
        title: 'Macerado',
        description: 'En el shaker, machaca suavemente las rodajas de jalapeño con el jugo de lima.',
        image: 'https://images.unsplash.com/photo-1599021456807-25db0f974333?auto=format&fit=crop&w=600&q=80',
        bgColor: 'bg-green-200'
      },
      {
        id: 3,
        title: 'Shake It!',
        description: 'Añade hielo, tequila y triple sec. ¡Agita con mucha fuerza por 15 segundos!',
        image: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=600&q=80',
        bgColor: 'bg-yellow-200'
      },
      {
        id: 4,
        title: 'Servido',
        description: 'Cuela sobre un vaso con hielo fresco. ¡Disfruta el fuego!',
        image: 'https://images.unsplash.com/photo-1572911226784-0802c6326d9e?auto=format&fit=crop&w=600&q=80',
        bgColor: 'bg-orange-200'
      }
    ]
  },
  {
    id: 'mojito-cubano',
    name: 'Mojito Clásico',
    description: 'Directo desde La Habana. Menta fresca, azúcar y ron en perfecta armonía. El rey del verano.',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80',
    tags: ['Clásico', 'Refrescante', 'Ron'],
    difficulty: 'Medio',
    time: '8 min',
    rating: 4.7,
    likes: 1500,
    pairing: {
      name: 'Tostones Cubanos',
      description: 'Plátano frito crujiente para acompañar la frescura de la menta.',
      image: 'https://images.unsplash.com/photo-1627376629924-d232537b018e?auto=format&fit=crop&w=600&q=80'
    },
    ingredients: [
      { name: 'Ron Blanco', amount: '60 ml', icon: 'local_drink', color: 'bg-gray-100' },
      { name: 'Hojas de Menta', amount: '10 u', icon: 'grass', color: 'bg-green-100' },
      { name: 'Azúcar Blanca', amount: '2 cdtas', icon: 'view_comfy', color: 'bg-white' },
      { name: 'Lima', amount: 'Media', icon: 'eco', color: 'bg-green-200' },
      { name: 'Soda', amount: 'Top', icon: 'bubble_chart', color: 'bg-blue-100' }
    ],
    steps: [
      {
        id: 1,
        title: 'Activa la Menta',
        description: 'Coloca menta, azúcar y lima en el vaso. Presiona suavemente sin romper las hojas.',
        image: 'https://images.unsplash.com/photo-1563223842-83c31b0df2cb?auto=format&fit=crop&w=600&q=80',
        bgColor: 'bg-green-100'
      },
      {
        id: 2,
        title: 'El Espíritu',
        description: 'Añade el Ron Blanco y llena el vaso hasta la mitad con hielo picado.',
        image: 'https://images.unsplash.com/photo-1568284687572-c07a9b0c74be?auto=format&fit=crop&w=600&q=80',
        bgColor: 'bg-gray-200'
      },
      {
        id: 3,
        title: 'Remover',
        description: 'Mezcla bien para disolver el azúcar y levantar la menta del fondo.',
        image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=600&q=80',
        bgColor: 'bg-green-200'
      },
      {
        id: 4,
        title: 'Final Fizz',
        description: 'Tope de soda y decora con un cogollo de menta sano. ¡Golpéalo para liberar aroma!',
        image: 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?auto=format&fit=crop&w=600&q=80',
        bgColor: 'bg-blue-100'
      }
    ]
  },
  {
    id: 'espresso-martini',
    name: 'Espresso Martini',
    description: 'Para despertarse y celebrar. Sofisticado, cremoso y con el punch de cafeína que necesitas.',
    image: 'https://images.unsplash.com/photo-1545438102-799c3991ffb2?w=800',
    tags: ['Energético', 'Elegante', 'Vodka'],
    difficulty: 'Difícil',
    time: '6 min',
    rating: 5.0,
    likes: 2100,
    pairing: {
      name: 'Trufas de Chocolate',
      description: 'El chocolate amargo complementa perfectamente las notas de café.',
      image: 'https://images.unsplash.com/photo-1548685123-6b3a2412b184?auto=format&fit=crop&w=600&q=80'
    },
    ingredients: [
      { name: 'Vodka', amount: '50 ml', icon: 'local_drink', color: 'bg-gray-100' },
      { name: 'Licor de Café', amount: '30 ml', icon: 'coffee', color: 'bg-yellow-800 text-white' },
      { name: 'Espresso', amount: '30 ml', icon: 'coffee_maker', color: 'bg-yellow-900 text-white' },
      { name: 'Granos Café', amount: '3 u', icon: 'grain', color: 'bg-brown-500' },
      { name: 'Jarabe Simple', amount: 'Opcional', icon: 'water_drop', color: 'bg-gray-200' }
    ],
    steps: [
      {
        id: 1,
        title: 'Prepara el Café',
        description: 'Prepara un espresso fuerte y déjalo enfriar un poco. ¡La calidad importa!',
        image: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&w=600&q=80',
        bgColor: 'bg-yellow-200'
      },
      {
        id: 2,
        title: 'Carga el Shaker',
        description: 'Hielo abundante, vodka, licor de café y el espresso.',
        image: 'https://images.unsplash.com/photo-1629247656360-63c200540d58?auto=format&fit=crop&w=600&q=80',
        bgColor: 'bg-gray-300'
      },
      {
        id: 3,
        title: 'Shake Hard!',
        description: 'Agita muy fuerte para crear la espuma característica. ¡Dale con energía!',
        image: 'https://images.unsplash.com/photo-1594145000571-085e6dd35432?auto=format&fit=crop&w=600&q=80',
        bgColor: 'bg-orange-200'
      },
      {
        id: 4,
        title: 'La Trinidad',
        description: 'Sirve en copa coupé y decora con 3 granos de café formando un trébol.',
        image: 'https://images.unsplash.com/photo-1623908862973-772c918eb988?auto=format&fit=crop&w=600&q=80',
        bgColor: 'bg-gray-200'
      }
    ]
  },
  {
    id: 'aperol-spritz',
    name: 'Aperol Spritz',
    description: 'El atardecer italiano en una copa. Naranja brillante, burbujas y "dolce far niente".',
    image: 'https://images.unsplash.com/photo-1560512823-8db965dfc5d4?auto=format&fit=crop&w=800&q=80',
    tags: ['Aperitivo', 'Burbujas', 'Vino'],
    difficulty: 'Fácil',
    time: '3 min',
    rating: 4.6,
    likes: 1800,
    pairing: {
      name: 'Bruschetta de Tomate',
      description: 'Sabores mediterráneos frescos para un aperitivo ligero.',
      image: 'https://images.unsplash.com/photo-1572695157369-a14acdc74618?auto=format&fit=crop&w=600&q=80'
    },
    ingredients: [
      { name: 'Prosecco', amount: '90 ml', icon: 'celebration', color: 'bg-yellow-100' },
      { name: 'Aperol', amount: '60 ml', icon: 'local_bar', color: 'bg-orange-500 text-white' },
      { name: 'Soda', amount: '30 ml', icon: 'water', color: 'bg-blue-50' },
      { name: 'Rodaja Naranja', amount: '1 u', icon: 'circle', color: 'bg-orange-200' },
      { name: 'Hielo', amount: 'Copa Llen', icon: 'ac_unit', color: 'bg-gray-100' }
    ],
    steps: [
      {
        id: 1,
        title: 'Copa Grande',
        description: 'Usa una copa de vino grande y llénala de hielo hasta arriba.',
        image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=600&q=80',
        bgColor: 'bg-blue-100'
      },
      {
        id: 2,
        title: '3-2-1',
        description: 'La regla de oro: 3 partes de Prosecco, 2 de Aperol, 1 de Soda.',
        image: 'https://images.unsplash.com/photo-1560512823-8db965dfc5d4?auto=format&fit=crop&w=600&q=80',
        bgColor: 'bg-orange-200'
      },
      {
        id: 3,
        title: 'Toque Final',
        description: 'Añade la rodaja de naranja. No hace falta remover mucho.',
        image: 'https://images.unsplash.com/photo-1588645068809-7756778f7739?auto=format&fit=crop&w=600&q=80',
        bgColor: 'bg-yellow-100'
      }
    ]
  },
  {
    id: 'pina-colada',
    name: 'Piña Colada',
    description: 'La reina del trópico. Cremosa, dulce y llena de sabor a vacaciones.',
    image: 'https://images.unsplash.com/photo-1597075687490-8f673c6c17f6?auto=format&fit=crop&w=800&q=80',
    tags: ['Verano', 'Tropical', 'Ron'],
    difficulty: 'Fácil',
    time: '5 min',
    rating: 4.9,
    likes: 2300,
    pairing: {
      name: 'Camarones al Coco',
      description: 'El sabor tropical del coco une el plato con la bebida.',
      image: 'https://images.unsplash.com/photo-1625938145744-e38051541d1c?auto=format&fit=crop&w=600&q=80'
    },
    ingredients: [
      { name: 'Ron Blanco', amount: '60 ml', icon: 'local_drink', color: 'bg-gray-100' },
      { name: 'Crema de Coco', amount: '60 ml', icon: 'egg', color: 'bg-white' },
      { name: 'Jugo de Piña', amount: '120 ml', icon: 'local_bar', color: 'bg-yellow-200' },
      { name: 'Hielo', amount: '1 Taza', icon: 'ac_unit', color: 'bg-cyan-50' },
      { name: 'Triángulo Piña', amount: '1 u', icon: 'change_history', color: 'bg-yellow-400' }
    ],
    steps: [
      {
        id: 1,
        title: 'A la Licuadora',
        description: 'Añade el hielo, el ron, la crema de coco y el jugo de piña en la licuadora.',
        image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=600&q=80',
        bgColor: 'bg-blue-100'
      },
      {
        id: 2,
        title: 'Frosty Mix',
        description: 'Licúa a alta velocidad hasta obtener una textura suave y granizada.',
        image: 'https://images.unsplash.com/photo-1605218427339-a937a092fb25?auto=format&fit=crop&w=600&q=80',
        bgColor: 'bg-yellow-100'
      },
      {
        id: 3,
        title: 'Servir',
        description: 'Sirve en una copa huracán o una piña ahuecada para más estilo.',
        image: 'https://images.unsplash.com/photo-1597075687490-8f673c6c17f6?auto=format&fit=crop&w=600&q=80',
        bgColor: 'bg-orange-100'
      }
    ]
  },
  {
    id: 'old-fashioned',
    name: 'Old Fashioned',
    description: 'El padre de todos los cócteles. Whiskey, azúcar y bitters. Nada más, nada menos.',
    image: 'https://images.unsplash.com/photo-1598155523122-38423bb4d6c1?auto=format&fit=crop&w=800&q=80',
    tags: ['Clásico', 'Fuerte', 'Whiskey'],
    difficulty: 'Difícil',
    time: '6 min',
    rating: 4.8,
    likes: 1950,
    pairing: {
      name: 'Chocolate Amargo',
      description: 'El cacao puro resalta las notas de roble del whiskey.',
      image: 'https://images.unsplash.com/photo-1606312619070-d48b4c652a52?auto=format&fit=crop&w=600&q=80'
    },
    ingredients: [
      { name: 'Bourbon Whiskey', amount: '60 ml', icon: 'local_bar', color: 'bg-orange-200' },
      { name: 'Terrón Azúcar', amount: '1 u', icon: 'crop_square', color: 'bg-white' },
      { name: 'Angostura Bitters', amount: '3 dash', icon: 'opacity', color: 'bg-red-800 text-white' },
      { name: 'Agua', amount: 'Splash', icon: 'water_drop', color: 'bg-blue-50' },
      { name: 'Piel Naranja', amount: '1 u', icon: 'gesture', color: 'bg-orange-500 text-white' }
    ],
    steps: [
      {
        id: 1,
        title: 'La Base',
        description: 'Coloca el terrón de azúcar en el vaso y empápalo con los bitters y el agua.',
        image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=600&q=80',
        bgColor: 'bg-gray-200'
      },
      {
        id: 2,
        title: 'Disolver',
        description: 'Machaca el azúcar hasta que esté casi disuelto formando una pasta.',
        image: 'https://images.unsplash.com/photo-1619427961268-c13f6494119e?auto=format&fit=crop&w=600&q=80',
        bgColor: 'bg-orange-100'
      },
      {
        id: 3,
        title: 'Construir',
        description: 'Añade un hielo grande y el whiskey. Remueve suavemente por 30 segundos.',
        image: 'https://images.unsplash.com/photo-1598155523122-38423bb4d6c1?auto=format&fit=crop&w=600&q=80',
        bgColor: 'bg-orange-200'
      },
      {
        id: 4,
        title: 'Perfumar',
        description: 'Exprime los aceites de la piel de naranja sobre el vaso y déjala caer dentro.',
        image: 'https://images.unsplash.com/photo-1629247372207-6b07c2343209?auto=format&fit=crop&w=600&q=80',
        bgColor: 'bg-gray-100'
      }
    ]
  },
  {
    id: 'moscow-mule',
    name: 'Moscow Mule',
    description: 'Servido en su icónica taza de cobre. Picante por el jengibre y muy refrescante.',
    image: 'https://images.unsplash.com/photo-1530991037531-51f5568d3881?auto=format&fit=crop&w=800&q=80',
    tags: ['Populares', 'Picante', 'Vodka'],
    difficulty: 'Fácil',
    time: '4 min',
    rating: 4.7,
    likes: 1600,
    pairing: {
      name: 'Mini Sliders',
      description: 'Hamburguesas pequeñas van genial con el frescor del jengibre.',
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80'
    },
    ingredients: [
      { name: 'Vodka', amount: '60 ml', icon: 'local_drink', color: 'bg-gray-100' },
      { name: 'Ginger Beer', amount: '120 ml', icon: 'sports_bar', color: 'bg-yellow-100' },
      { name: 'Jugo de Lima', amount: '15 ml', icon: 'eco', color: 'bg-green-100' },
      { name: 'Hielo', amount: 'Picado', icon: 'ac_unit', color: 'bg-cyan-50' },
      { name: 'Lima', amount: 'Rodaja', icon: 'circle', color: 'bg-green-200' }
    ],
    steps: [
      {
        id: 1,
        title: 'Taza de Cobre',
        description: 'Usa una taza de cobre para mantener el frío. Llénala de hielo.',
        image: 'https://images.unsplash.com/photo-1530991037531-51f5568d3881?auto=format&fit=crop&w=600&q=80',
        bgColor: 'bg-orange-200'
      },
      {
        id: 2,
        title: 'Ácido & Fuerte',
        description: 'Vierte el vodka y el jugo de lima fresco sobre el hielo.',
        image: 'https://images.unsplash.com/photo-1629247926958-3932b785d033?auto=format&fit=crop&w=600&q=80',
        bgColor: 'bg-green-100'
      },
      {
        id: 3,
        title: 'El Jengibre',
        description: 'Completa con Ginger Beer. Deja espacio para decorar.',
        image: 'https://images.unsplash.com/photo-1625866164282-3d8819543df5?auto=format&fit=crop&w=600&q=80',
        bgColor: 'bg-yellow-100'
      }
    ]
  },
  {
    id: 'gin-tonic-botanico',
    name: 'Gin Tonic Botánico',
    description: 'Limpio, crujiente y aromático. La mejor forma de apreciar una buena ginebra.',
    image: 'https://images.unsplash.com/photo-1560526860-f33503c35b54?auto=format&fit=crop&w=800&q=80',
    tags: ['Clásico', 'Refrescante', 'Gin'],
    difficulty: 'Fácil',
    time: '3 min',
    rating: 4.6,
    likes: 1450,
    pairing: {
      name: 'Tabla de Quesos',
      description: 'Quesos suaves y uvas complementan los botánicos de la ginebra.',
      image: 'https://images.unsplash.com/photo-1608649102431-7e828d844109?auto=format&fit=crop&w=600&q=80'
    },
    ingredients: [
      { name: 'Gin', amount: '60 ml', icon: 'local_drink', color: 'bg-blue-50' },
      { name: 'Agua Tónica', amount: '120 ml', icon: 'bubble_chart', color: 'bg-gray-50' },
      { name: 'Pepino', amount: 'Tira', icon: 'horizontal_rule', color: 'bg-green-100' },
      { name: 'Pimienta Rosa', amount: 'Granos', icon: 'grain', color: 'bg-pink-100' },
      { name: 'Hielo', amount: 'Cubos', icon: 'stop', color: 'bg-cyan-100' }
    ],
    steps: [
      {
        id: 1,
        title: 'Copa Balón',
        description: 'Usa una copa ancha y enfríala moviendo el hielo dentro.',
        image: 'https://images.unsplash.com/photo-1594451631405-b778465d3a01?auto=format&fit=crop&w=600&q=80',
        bgColor: 'bg-blue-100'
      },
      {
        id: 2,
        title: 'Gin First',
        description: 'Escurre el agua sobrante del hielo y sirve la ginebra.',
        image: 'https://images.unsplash.com/photo-1579540417242-4f368f56693a?auto=format&fit=crop&w=600&q=80',
        bgColor: 'bg-blue-50'
      },
      {
        id: 3,
        title: 'Burbuja Fina',
        description: 'Sirve la tónica suavemente (usa una cuchara trenzada si tienes) para no romper la burbuja.',
        image: 'https://images.unsplash.com/photo-1560526860-f33503c35b54?auto=format&fit=crop&w=600&q=80',
        bgColor: 'bg-gray-100'
      },
      {
        id: 4,
        title: 'Botánicos',
        description: 'Decora con una tira larga de pepino y unos granos de pimienta.',
        image: 'https://images.unsplash.com/photo-1550989460-0adf9ea622e2?auto=format&fit=crop&w=600&q=80',
        bgColor: 'bg-green-50'
      }
    ]
  },
  {
    id: 'negroni',
    name: 'Negroni',
    description: 'El aperitivo italiano por excelencia. Un equilibrio perfecto entre lo amargo, lo dulce y lo botánico. Inconfundible color rojo rubí.',
    image: 'https://images.unsplash.com/photo-1551754655-427029071e65?auto=format&fit=crop&w=800&q=80',
    tags: ['Clásico', 'Aperitivo', 'Gin'],
    difficulty: 'Fácil',
    time: '4 min',
    rating: 4.8,
    likes: 1800,
    pairing: {
      name: 'Tabla de Quesos Curados',
      description: 'La grasa del queso y la sal de las aceitunas contrastan con el amargor del Campari.',
      image: 'https://images.unsplash.com/photo-1626202022874-56c9d0312d8a?auto=format&fit=crop&w=600&q=80'
    },
    ingredients: [
      { name: 'Ginebra', amount: '30 ml', icon: 'local_drink', color: 'bg-blue-50' },
      { name: 'Vermut Rojo', amount: '30 ml', icon: 'wine_bar', color: 'bg-red-900 text-white' },
      { name: 'Campari', amount: '30 ml', icon: 'local_bar', color: 'bg-red-500 text-white' },
      { name: 'Naranja', amount: 'Rodaja', icon: 'circle', color: 'bg-orange-400 text-white' }
    ],
    steps: [
      {
        id: 1,
        title: 'Vaso Old Fashioned',
        description: 'Llena un vaso corto y robusto con cubos de hielo grandes y sólidos.',
        image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=600&q=80',
        bgColor: 'bg-red-100'
      },
      {
        id: 2,
        title: 'Partes Iguales',
        description: 'Vierte la ginebra, el vermut rojo y el Campari directamente sobre el hielo.',
        image: 'https://images.unsplash.com/photo-1536935338788-843bb52d3d08?auto=format&fit=crop&w=600&q=80',
        bgColor: 'bg-red-200'
      },
      {
        id: 3,
        title: 'Remover',
        description: 'Remueve suavemente con una cuchara de bar para enfriar y diluir ligeramente.',
        image: 'https://images.unsplash.com/photo-1551754655-427029071e65?auto=format&fit=crop&w=600&q=80',
        bgColor: 'bg-orange-100'
      },
      {
        id: 4,
        title: 'Decoración',
        description: 'Añade una rodaja o piel de naranja para aromatizar con aceites cítricos.',
        image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=600&q=80',
        bgColor: 'bg-orange-50'
      }
    ]
  },
  {
    id: 'daiquiri',
    name: 'Daiquiri',
    description: 'La trinidad sagrada del ron: ron, lima y azúcar. Fresco, ácido y dulce en perfecta armonía. Un clásico cubano.',
    image: 'https://images.unsplash.com/photo-1618852305546-e762a45d045c?auto=format&fit=crop&w=800&q=80',
    tags: ['Clásico', 'Refrescante', 'Ron'],
    difficulty: 'Fácil',
    time: '5 min',
    rating: 4.7,
    likes: 1650,
    pairing: {
      name: 'Ceviche de Camarón',
      description: 'La acidez del ceviche y la frescura del marisco bailan con el ron.',
      image: 'https://images.unsplash.com/photo-1535400255456-984241443b29?auto=format&fit=crop&w=600&q=80'
    },
    ingredients: [
      { name: 'Ron Blanco', amount: '60 ml', icon: 'local_drink', color: 'bg-gray-100' },
      { name: 'Jugo de Lima', amount: '30 ml', icon: 'eco', color: 'bg-green-100' },
      { name: 'Jarabe Simple', amount: '15 ml', icon: 'water_drop', color: 'bg-gray-50' },
      { name: 'Lima', amount: 'Rodaja', icon: 'circle', color: 'bg-green-200' }
    ],
    steps: [
      {
        id: 1,
        title: 'Hielo y Shaker',
        description: 'Agrega todos los ingredientes líquidos a una coctelera con mucho hielo.',
        image: 'https://images.unsplash.com/photo-1597075687490-8f673c6c17f6?auto=format&fit=crop&w=600&q=80',
        bgColor: 'bg-gray-100'
      },
      {
        id: 2,
        title: 'Shake It!',
        description: 'Agita vigorosamente por 15 segundos hasta que la coctelera esté helada al tacto.',
        image: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=600&q=80',
        bgColor: 'bg-green-100'
      },
      {
        id: 3,
        title: 'Colado Fino',
        description: 'Cuela la mezcla en una copa coupette o martini previamente enfriada.',
        image: 'https://images.unsplash.com/photo-1618852305546-e762a45d045c?auto=format&fit=crop&w=600&q=80',
        bgColor: 'bg-green-50'
      },
      {
        id: 4,
        title: 'Toque Verde',
        description: 'Decora con una rodaja fina de lima en el borde.',
        image: 'https://images.unsplash.com/photo-1550989460-0adf9ea622e2?auto=format&fit=crop&w=600&q=80',
        bgColor: 'bg-green-200'
      }
    ]
  },
  {
    id: 'cosmopolitan',
    name: 'Cosmopolitan',
    description: 'Icono de los 90s. Sofisticado, color rosa vibrante y con un toque frutal irresistible. La definición de elegancia moderna.',
    image: 'https://images.unsplash.com/photo-1560963689-02e82e7a9e26?w=800',
    tags: ['Elegante', 'Frutal', 'Vodka'],
    difficulty: 'Medio',
    time: '5 min',
    rating: 4.6,
    likes: 1900,
    pairing: {
      name: 'Brochetas de Fruta',
      description: 'Frutas frescas con un toque de chocolate para un postre ligero.',
      image: 'https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?auto=format&fit=crop&w=600&q=80'
    },
    ingredients: [
      { name: 'Vodka', amount: '45 ml', icon: 'local_drink', color: 'bg-gray-100' },
      { name: 'Triple Sec', amount: '15 ml', icon: 'liquor', color: 'bg-orange-100' },
      { name: 'Jugo Arándano', amount: '30 ml', icon: 'water_drop', color: 'bg-red-800 text-white' },
      { name: 'Jugo Lima', amount: '10 ml', icon: 'eco', color: 'bg-green-100' },
      { name: 'Piel Naranja', amount: 'Twist', icon: 'gesture', color: 'bg-orange-400' }
    ],
    steps: [
      {
        id: 1,
        title: 'Copa Fría',
        description: 'Enfría una copa martini con hielo mientras preparas la mezcla.',
        image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=600&q=80',
        bgColor: 'bg-pink-100'
      },
      {
        id: 2,
        title: 'Agitar',
        description: 'Combina vodka, triple sec, jugos y hielo en el shaker. Agita fuerte.',
        image: 'https://images.unsplash.com/photo-1597075687490-8f673c6c17f6?auto=format&fit=crop&w=600&q=80',
        bgColor: 'bg-red-100'
      },
      {
        id: 3,
        title: 'Servir',
        description: 'Descarta el hielo de la copa y cuela la mezcla rosa brillante.',
        image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=600&q=80',
        bgColor: 'bg-pink-200'
      },
      {
        id: 4,
        title: 'Twist',
        description: 'Exprime los aceites de un twist de naranja sobre la copa y decora.',
        image: 'https://images.unsplash.com/photo-1550989460-0adf9ea622e2?auto=format&fit=crop&w=600&q=80',
        bgColor: 'bg-orange-100'
      }
    ]
  },
  {
    id: 'michelada',
    name: 'Michelada',
    description: 'El remedio infalible. Cerveza helada transformada con salsas, limón y un borde picante. Sabor a México en cada trago.',
    image: 'https://images.unsplash.com/photo-1587223962930-cb7f31384c19?w=800',
    tags: ['Mexicano', 'Picante', 'Cerveza'],
    difficulty: 'Fácil',
    time: '3 min',
    rating: 4.9,
    likes: 2100,
    pairing: {
      name: 'Tacos al Pastor',
      description: 'La grasa del cerdo adobado y la piña piden a gritos una cerveza preparada.',
      image: 'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?auto=format&fit=crop&w=600&q=80'
    },
    ingredients: [
      { name: 'Cerveza Clara', amount: '1 Botella', icon: 'sports_bar', color: 'bg-yellow-200' },
      { name: 'Jugo Limón', amount: '30 ml', icon: 'eco', color: 'bg-green-100' },
      { name: 'Salsas', amount: 'Mix', icon: 'science', color: 'bg-black text-white' },
      { name: 'Chile Polvo', amount: 'Borde', icon: 'grain', color: 'bg-red-600 text-white' },
      { name: 'Hielo', amount: 'Cubos', icon: 'ac_unit', color: 'bg-gray-100' }
    ],
    steps: [
      {
        id: 1,
        title: 'Escarchado',
        description: 'Pasa limón por el borde del vaso y cúbrelo generosamente con sal y chile en polvo.',
        image: 'https://images.unsplash.com/photo-1536935338788-843bb52d3d08?auto=format&fit=crop&w=600&q=80',
        bgColor: 'bg-red-200'
      },
      {
        id: 2,
        title: 'El Petróleo',
        description: 'Agrega hielo, jugo de limón, salsa inglesa y salsa picante al fondo.',
        image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80',
        bgColor: 'bg-gray-200'
      },
      {
        id: 3,
        title: 'Integrar',
        description: 'Mezcla bien las salsas con el limón para crear la base de sabor.',
        image: 'https://images.unsplash.com/photo-1599021456807-25db0f974333?auto=format&fit=crop&w=600&q=80',
        bgColor: 'bg-yellow-100'
      },
      {
        id: 4,
        title: 'La Cheve',
        description: 'Vierte la cerveza bien fría lentamente para no perder el gas. ¡Salud!',
        image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80',
        bgColor: 'bg-yellow-200'
      }
    ]
  },
  {
    id: 'charro-negro',
    name: 'Charro Negro',
    description: 'La versión mexicana de la Cuba Libre. Tequila, refresco de cola, limón y sal. Simple, directo y muy peligroso.',
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=800',
    tags: ['Mexicano', 'Refrescante', 'Tequila'],
    difficulty: 'Fácil',
    time: '2 min',
    rating: 4.5,
    likes: 1300,
    pairing: {
      name: 'Nachos con Queso',
      description: 'Botana clásica de bar que acompaña perfectamente el dulzor de la cola.',
      image: 'https://images.unsplash.com/photo-1582169296194-e90dd58bd961?auto=format&fit=crop&w=600&q=80'
    },
    ingredients: [
      { name: 'Tequila', amount: '60 ml', icon: 'local_drink', color: 'bg-yellow-100' },
      { name: 'Refresco Cola', amount: 'Top', icon: 'local_bar', color: 'bg-black text-white' },
      { name: 'Limón', amount: 'Medio', icon: 'eco', color: 'bg-green-100' },
      { name: 'Sal', amount: 'Pizca', icon: 'grain', color: 'bg-white' }
    ],
    steps: [
      {
        id: 1,
        title: 'Limón Base',
        description: 'Exprime medio limón en un vaso alto (highball) y añade una pizca de sal.',
        image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=600&q=80',
        bgColor: 'bg-green-100'
      },
      {
        id: 2,
        title: 'Tequila y Hielo',
        description: 'Llena el vaso con cubos de hielo y vierte el tequila reposado o blanco.',
        image: 'https://images.unsplash.com/photo-1582260655272-4c22737f5cae?auto=format&fit=crop&w=600&q=80',
        bgColor: 'bg-yellow-100'
      },
      {
        id: 3,
        title: 'El Refresco',
        description: 'Completa con refresco de cola bien frío hasta el borde.',
        image: 'https://images.unsplash.com/photo-1625866164282-3d8819543df5?auto=format&fit=crop&w=600&q=80',
        bgColor: 'bg-gray-800'
      },
      {
        id: 4,
        title: 'Decorar',
        description: 'Revuelve suavemente una vez y decora con una rodaja de limón.',
        image: 'https://images.unsplash.com/photo-1629247926958-3932b785d033?auto=format&fit=crop&w=600&q=80',
        bgColor: 'bg-green-50'
      }
    ]
  },
  {
    id: 'whiskey-sour',
    name: 'Whiskey Sour',
    description: 'Un clásico atemporal. La mezcla perfecta de fuerza, dulzor y acidez con una textura sedosa increíble.',
    image: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=800',
    tags: ['Clásico', 'Cítrico', 'Whiskey'],
    difficulty: 'Medio',
    time: '5 min',
    rating: 4.7,
    likes: 1850,
    pairing: {
      name: 'Tabla de Carnes Frías',
      description: 'El sabor ahumado de los embutidos complementa el whiskey.',
      image: 'https://images.unsplash.com/photo-1592394532725-3b98754b5dfd?auto=format&fit=crop&w=600&q=80'
    },
    ingredients: [
      { name: 'Bourbon', amount: '60 ml', icon: 'local_bar', color: 'bg-orange-200' },
      { name: 'Jugo Limón', amount: '30 ml', icon: 'eco', color: 'bg-yellow-100' },
      { name: 'Jarabe Simple', amount: '15 ml', icon: 'water_drop', color: 'bg-gray-100' },
      { name: 'Clara de Huevo', amount: 'Opcional', icon: 'egg', color: 'bg-white' },
      { name: 'Cereza', amount: '1 u', icon: 'circle', color: 'bg-red-500 text-white' }
    ],
    steps: [
      {
        id: 1,
        title: 'Dry Shake',
        description: 'Si usas clara de huevo, agita todos los ingredientes SIN hielo primero para crear espuma.',
        image: 'https://images.unsplash.com/photo-1597075687490-8f673c6c17f6?auto=format&fit=crop&w=600&q=80',
        bgColor: 'bg-gray-100'
      },
      {
        id: 2,
        title: 'Agitar con Hielo',
        description: 'Añade hielo y agita vigorosamente durante 15 segundos para enfriar.',
        image: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=600&q=80',
        bgColor: 'bg-yellow-100'
      },
      {
        id: 3,
        title: 'Colado',
        description: 'Cuela la mezcla en un vaso Old Fashioned o copa fría.',
        image: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=600&q=80',
        bgColor: 'bg-orange-100'
      },
      {
        id: 4,
        title: 'Decorar',
        description: 'Añade una cereza al marrasquino y una rodaja de naranja.',
        image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=600&q=80',
        bgColor: 'bg-red-50'
      }
    ]
  },
  {
    id: 'mai-tai',
    name: 'Mai Tai',
    description: 'El rey de los cócteles Tiki. Una compleja mezcla de rones y almendras que sabe a paraíso tropical.',
    image: 'https://images.unsplash.com/photo-1536935338788-846bb9981813?w=800',
    tags: ['Tropical', 'Verano', 'Ron'],
    difficulty: 'Medio',
    time: '6 min',
    rating: 4.6,
    likes: 1400,
    pairing: {
      name: 'Poke Bowl de Atún',
      description: 'Frescura oceánica que combina con la complejidad del ron.',
      image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80'
    },
    ingredients: [
      { name: 'Ron Blanco', amount: '30 ml', icon: 'local_drink', color: 'bg-gray-100' },
      { name: 'Ron Oscuro', amount: '30 ml', icon: 'liquor', color: 'bg-orange-900 text-white' },
      { name: 'Curaçao Naranja', amount: '15 ml', icon: 'local_bar', color: 'bg-orange-400 text-white' },
      { name: 'Orgeat', amount: '15 ml', icon: 'grain', color: 'bg-yellow-50' },
      { name: 'Jugo Lima', amount: '30 ml', icon: 'eco', color: 'bg-green-100' }
    ],
    steps: [
      {
        id: 1,
        title: 'Shaker',
        description: 'Añade los rones, el curaçao, el orgeat (jarabe de almendra) y el jugo de lima a la coctelera.',
        image: 'https://images.unsplash.com/photo-1597075687490-8f673c6c17f6?auto=format&fit=crop&w=600&q=80',
        bgColor: 'bg-orange-100'
      },
      {
        id: 2,
        title: 'Agitar',
        description: 'Agita brevemente con hielo. No queremos diluirlo demasiado.',
        image: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=600&q=80',
        bgColor: 'bg-orange-200'
      },
      {
        id: 3,
        title: 'Hielo Picado',
        description: 'Cuela en un vaso Tiki o bajo lleno de hielo picado fresco.',
        image: 'https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&w=600&q=80',
        bgColor: 'bg-yellow-100'
      },
      {
        id: 4,
        title: 'Isla Tropical',
        description: 'Decora con una rama grande de menta y media lima vacía invertida (la isla).',
        image: 'https://images.unsplash.com/photo-1550989460-0adf9ea622e2?auto=format&fit=crop&w=600&q=80',
        bgColor: 'bg-green-100'
      }
    ]
  },
  {
    id: 'tom-collins',
    name: 'Tom Collins',
    description: 'Como una limonada, pero mejor. Ginebra y cítricos en un vaso alto. Refrescante hasta la última gota.',
    image: 'https://images.unsplash.com/photo-1587888637140-849b13f3e1a3?w=800',
    tags: ['Clásico', 'Refrescante', 'Gin'],
    difficulty: 'Fácil',
    time: '3 min',
    rating: 4.5,
    likes: 1250,
    pairing: {
      name: 'Ensalada Mediterránea',
      description: 'Sabores ligeros y frescos que no compiten con la bebida.',
      image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=600&q=80'
    },
    ingredients: [
      { name: 'Gin', amount: '60 ml', icon: 'local_drink', color: 'bg-blue-50' },
      { name: 'Jugo Limón', amount: '30 ml', icon: 'eco', color: 'bg-yellow-100' },
      { name: 'Jarabe Simple', amount: '15 ml', icon: 'water_drop', color: 'bg-gray-100' },
      { name: 'Agua Mineral', amount: 'Top', icon: 'bubble_chart', color: 'bg-blue-100' },
      { name: 'Cereza', amount: '1 u', icon: 'circle', color: 'bg-red-500 text-white' }
    ],
    steps: [
      {
        id: 1,
        title: 'Vaso Alto',
        description: 'Llena un vaso Collins o alto con cubos de hielo hasta el borde.',
        image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=600&q=80',
        bgColor: 'bg-blue-50'
      },
      {
        id: 2,
        title: 'Construir',
        description: 'Vierte la ginebra, el jugo de limón y el jarabe directamente en el vaso.',
        image: 'https://images.unsplash.com/photo-1587888637140-849b13f3e1a3?auto=format&fit=crop&w=600&q=80',
        bgColor: 'bg-yellow-50'
      },
      {
        id: 3,
        title: 'Burbujas',
        description: 'Completa con agua mineral con gas. Deja espacio para decorar.',
        image: 'https://images.unsplash.com/photo-1560526860-f33503c35b54?auto=format&fit=crop&w=600&q=80',
        bgColor: 'bg-blue-100'
      },
      {
        id: 4,
        title: 'Remover',
        description: 'Remueve suavemente una vez para mezclar y decora con limón y cereza.',
        image: 'https://images.unsplash.com/photo-1550989460-0adf9ea622e2?auto=format&fit=crop&w=600&q=80',
        bgColor: 'bg-yellow-100'
      }
    ]
  }
];