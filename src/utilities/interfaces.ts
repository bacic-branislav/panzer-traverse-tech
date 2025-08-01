export type ProductState = {
  products: Array <Products>;
  preview: Array <Products>;
  details: any;
  loading: {
    products: boolean,
    details: boolean
  }
}

export interface DownloadState {
  items: any,
  loading: boolean,
}

export type AuthState = {
  user:null;
  loading: LoadingState
}

export type Products = {
  name: string,
  slug: string,
  parts: number
}

export type LoadingAuthState = {
  products: boolean,
  details: boolean
}

export type LoadingState = {
  login: boolean;
  register: boolean;
  logout: boolean,
  check: boolean,
}