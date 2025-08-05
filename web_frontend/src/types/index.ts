export interface Recipe {
  id: string;
  title: string;
  description: string;
  ingredients: string[];
  instructions: string[];
  image: string;
  category: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  favorites: string[];
}
