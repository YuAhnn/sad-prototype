import { db } from "./firebase"
import { collection, getDocs, doc, getDoc, addDoc} from "firebase/firestore"

export const fetchTests = async () => {
  const snapshot = await getDocs(collection(db, "tests"));
  return snapshot.docs.map(doc => ({toolId: doc.id, ...doc.data()}));
}

export const fetchToolByToolId = async (toolId) => {
  const docRef = doc(db, "tools", toolId); 
  const docSnap = await getDoc(docRef);

  if (!docSnap.exists()) 
    throw new Error("Tool not found");

  return { toolId: docSnap.id, ...docSnap.data() };
};