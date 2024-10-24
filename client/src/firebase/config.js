// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJNwyuOEJwtaPjEpzUuyqR4FijNWufkNA",
  authDomain: "eco-vuejs.firebaseapp.com",
  projectId: "eco-vuejs",
  storageBucket: "eco-vuejs.appspot.com",
  messagingSenderId: "1077135779840",
  appId: "1:1077135779840:web:9ea938ba1febf63d3610e5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
export { storage };
