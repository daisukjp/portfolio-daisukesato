// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOftPO5hst6MJYORYNiFk6P6ZrUCO0RZ8",
  authDomain: "image-iploader-a08c8.firebaseapp.com",
  projectId: "image-iploader-a08c8",
  storageBucket: "image-iploader-a08c8.appspot.com",
  messagingSenderId: "173881306051",
  appId: "1:173881306051:web:319303f4de179a5fde2b76",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export default storage;
