export type ExploreState = {
  activities: Array <Activity>;
  foodItems: Array <FoodItem>;
}

export type ProductState = {
  products: Array <Products>;
}

export type Products = {
  name: String
}


export type Activity = {
  name: string;
  distance: string;
  image: string;
}

export type FoodItem = {
  name: string;
  image: string;
}