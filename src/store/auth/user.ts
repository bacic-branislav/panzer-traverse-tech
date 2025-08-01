import { defineStore } from 'pinia';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { AuthState, LoadingState } from "@/utilities/interfaces";
import { doc, getDoc, getFirestore, setDoc } from "firebase/firestore";

export const useAuthStore = defineStore('useAuthStore', {
  state: ():AuthState => {
    return {
      user: null,
      loading: {
        login: false,
        register: false,
        logout: false,
        check: false,
      } as LoadingState
    }
  },

  actions: {
    checkUser():void {
      this.toggleLoading('check', true);
      const auth = getAuth();
      auth.onAuthStateChanged(async (user:any) => {
        if (user) {
          const details = await this.fetchUserDetails(user.uid);
          this.user = { ...user, ...details };
        } else {
          this.user = user;
        }
        this.toggleLoading('check', false);
      });
    },

    async register(data: { username: string, password: string, email: string }) {
      try {
        this.toggleLoading('register', true);
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
        this.toggleLoading('register', false);
      }
    },

    async fetchUserDetails(uid: string):Promise<any> {
      const db = getFirestore();
      const userDocRef = doc(db, "users", uid);
      const userDocSnap = await getDoc(userDocRef);

      if (userDocSnap.exists()) {
        return userDocSnap.data();
      } else {
        console.warn("No such user found in Firestore.");
        return null;
      }
    },

    async login(data: { email: string, password: string }):Promise<boolean> {
      try {
        const auth = getAuth();
        this.toggleLoading('login', true);
        const response = await signInWithEmailAndPassword(auth, data.email, data.password);
        const details = await this.fetchUserDetails(response.user.uid);
        this.user = { ...response.user, ...details };
        return true;
      } catch (error) {
        return false;
      } finally {
        this.toggleLoading('login', false);
      }
    },

    async logout() {
      try {
        this.toggleLoading('logout', true);
        const auth = getAuth();
        await signOut(auth);
        this.user = null;
      } catch (e) {
        console.error(e)
      } finally {
        this.toggleLoading('logout', false);
      }
    },

    toggleLoading(type: keyof LoadingState, loading: boolean):void {
      this.loading[type] = loading;
    }
  }
})