import { defineStore } from 'pinia';
import { ProductState } from '@/utilities/interfaces';
import { collection, getDocs, getDoc, doc } from 'firebase/firestore';
import { db } from '@/plugins/firebase';



export const useProductsStore = defineStore('useProductsStore', {
  state: (): ProductState => {
    return {
      products: [],
      details: {},
    }
  },

  getters: {
    getProducts: (state: any) => state.products,
    getDetails: (state: any) => state.details,
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
    },

    async fetchDetails(slug: string) {
      const docRef = doc(db, "products", slug);
      const docSnap = await getDoc(docRef);
      this.details = docSnap.data();
    }
  }
})