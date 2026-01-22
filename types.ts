export interface Ingredient {
  name: string;
  amount: string;
  icon: string;
  color: string;
}

export interface PreparationStep {
  id: number;
  title: string;
  description: string;
  image: string;
  bgColor: string;
}

export interface Pairing {
  name: string;
  description: string;
  image: string;
}

export interface Cocktail {
  id: string;
  name: string;
  description: string;
  image: string;
  tags: string[];
  difficulty: 'Fácil' | 'Medio' | 'Difícil';
  time: string;
  ingredients: Ingredient[];
  steps: PreparationStep[];
  rating: number;
  likes: number;
  pairing?: Pairing;
}