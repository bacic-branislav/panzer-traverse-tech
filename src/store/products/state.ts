import { defineStore } from 'pinia';
import { LoadingAuthState, ProductState } from '@/utilities/interfaces';
import { collection, getDocs, getDoc, doc, query, limit } from 'firebase/firestore';
import { db } from '@/plugins/firebase';



export const useProductsStore = defineStore('useProductsStore', {
  state: (): ProductState => {
    return {
      products: [],
      preview: [],
      details: {},
      loading: {
        products: false,
        details: false
      } as LoadingAuthState
    }
  },

  getters: {
    getProducts: (state: any) => state.products,
    getDetails: (state: any) => state.details,
    getLoading: (state: any) => state.loading,
  },

  actions: {
    async fetchProductsPreview() {
      try {
        this.loading.products = true;
        const collectionRef = collection(db, "products");
        const q = query(collectionRef, limit(3));
        const querySnapshot = await getDocs(q);

        const response:any = [];
        querySnapshot.forEach(doc => {
          response.push(doc.data());
        });

        this.preview = response;
      } catch (error) {
        console.error(error);
      } finally {
        this.loading.products = false;
      }
    },

    async fetchProducts() {
      try {
        this.loading.products = true;
        const collectionRef = collection(db, "products");
        const querySnapshot = await getDocs(collectionRef);

        const response:any = [];
        querySnapshot.forEach(doc => {
          response.push(doc.data());
        });

        this.products = response;
      } catch (error) {
        console.error(error);
      } finally {
        this.loading.products = false;
      }
    },

    async fetchDetails(slug: string) {
      const docRef = doc(db, "products", slug);
      const docSnap = await getDoc(docRef);
      this.details = docSnap.data();
    },
  }
})