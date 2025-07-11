export type ExploreState = {
  activities: Array <Activity>;
  foodItems: Array <FoodItem>;
}

export type ProductState = {
  products: Array <Products>;
  details: any;
}

export type Products = {
  name: string,
  slug: string,
  parts: number
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