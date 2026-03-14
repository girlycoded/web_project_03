import { initializeApp } from "firebase/app";
import { 
  initializeFirestore,
  persistentLocalCache,
  persistentMultipleTabManager
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAde-Jh9p8qcgNANvLcuff0_JNJlBW2IDM",
  authDomain: "joosan-web.firebaseapp.com",
  projectId: "joosan-web",
  storageBucket: "joosan-web.firebasestorage.app",
  messagingSenderId: "899405488228",
  appId: "1:899405488228:web:a189d7916c1481aacf7f71"
};

const app = initializeApp(firebaseConfig);

// 🔥 Modern persistent cache setup
export const db = initializeFirestore(app, {
  localCache: persistentLocalCache({
    tabManager: persistentMultipleTabManager()
  })
});