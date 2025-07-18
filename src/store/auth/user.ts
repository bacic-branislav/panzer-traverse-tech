import { defineStore } from 'pinia';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { AuthState, LoadingState } from "@/utilities/interfaces";
import { getFirestore, doc, setDoc } from "firebase/firestore";

export const useAuthStore = defineStore('useAuthStore', {
  state: ():AuthState => {
    return {
      user: {},
      loading: {
        login: false
      } as LoadingState
    }
  },

  actions: {
    checkUser():void {
      const auth = getAuth();
      auth.onAuthStateChanged((user:any):void => {
        this.user = user;
      });
    },

    async register(data: { username: string, password: string, email: string }) {
      try {
        const auth = getAuth();
        const db = getFirestore();

        const userCredential = await createUserWithEmailAndPassword(auth, data.email, data.password);
        const user = userCredential.user;

        await setDoc(doc(db, "users", user.uid), {
          username: data.username,
          email: data.email,
          createdAt: new Date()
        });
        return true;
      } catch (error) {
        return false;
      } finally {
        //
      }
    },

    async login(data: { email: string, password: string }):Promise<boolean> {
      try {
        const auth = getAuth();
        this.toggleLoading('login', true);
        const response = await signInWithEmailAndPassword(auth, data.email, data.password);
        this.user = response.user;
        return true;
      } catch (error) {
        return false;
      } finally {
        this.toggleLoading('login', false);
      }
    },

    async logout() {
      try {
        const auth = getAuth();
        await signOut(auth);
      } catch (e) {
        console.error(e)
      }
    },

    toggleLoading(type: keyof LoadingState, loading: boolean):void {
      this.loading[type] = loading;
    }
  }
})