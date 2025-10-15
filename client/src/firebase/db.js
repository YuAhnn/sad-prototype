import { db } from "./firebase"
import { collection, getDocs } from "firebase/firestore"


//function only in retrieving data for Card components-_- 
export const fetchTools = async () => {
    const snapshot = await getDocs(collection(db, "tests"))
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
}