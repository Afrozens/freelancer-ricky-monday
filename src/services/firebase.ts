import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyA3GhEvFsPu_G-CTtb5Mm4dE8NCEolkaTs',
  authDomain: 'freelancer-sport.firebaseapp.com',
  projectId: 'freelancer-sport',
  storageBucket: 'freelancer-sport.appspot.com',
  messagingSenderId: '340742198048',
  appId: '1:340742198048:web:435128c323188799f0fd45',
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
