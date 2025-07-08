import { defineStore } from 'pinia';
import { ProductState } from '@/utilities/interfaces';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/plugins/firebase';

export const useExploreStore = defineStore('useExploreStore', {
  state: (): ProductState => {
    return {
      products: [],
    }
  },

  getters: {
    getproducts: (state:any) => state.products,
  },

  actions: {
    async fetchProducts() {
      const collectionRef = collection(db, "products");
      const querySnapshot = await getDocs(collectionRef);
      
      const response:any = [];
      querySnapshot.forEach(doc => {
        response.push(doc.data());
      });

      this.products = response;
    }
  }
})