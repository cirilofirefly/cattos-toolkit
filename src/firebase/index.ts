import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore, collection } from 'firebase/firestore'
// ... other firebase imports

const firebaseConfig = {
    apiKey: "AIzaSyBNv6lgC5_dNAF32f90Qxj_4vLl1KMXQLo",
    projectId: "cattos-toolkit",
};


export const firebaseApp = initializeApp(firebaseConfig)
export const auth = getAuth();

// used for the firestore refs
const db = getFirestore(firebaseApp)

// here we can export reusable database references
export const todosRef = collection(db, 'todos')
export const calculatorHistoriesRef = collection(db, 'calculatorHistories')