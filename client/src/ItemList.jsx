// // src/ItemList.jsx
// import { useState, useEffect } from 'react';
// import { db } from './firebase/firebase'; // Import the initialized db object
// import { collection, getDocs } from 'firebase/firestore';

// function ItemList() {
//   const [items, setItems] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchItems = async () => {
//       try {
//         // 1. Create a reference to the 'items' collection
//         const itemsCollectionRef = collection(db, 'items');
        
//         // 2. Fetch all documents from the collection
//         const querySnapshot = await getDocs(itemsCollectionRef);
        
//         // 3. Map the documents to an array of objects
//         const itemsData = querySnapshot.docs.map(doc => ({
//           id: doc.id, // The unique document ID
//           ...doc.data() // All fields in the document (name, color)
//         }));

//         setItems(itemsData);
//       } catch (err) {
//         console.error("Error fetching data: ", err);
//         setError("Failed to load items.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchItems();
//   }, []); // Empty dependency array means this runs once on component mount

//   // --- Render Logic (JSX) ---
//   if (loading) {
//     return <h2>Loading items... ⏳</h2>;
//   }

//   if (error) {
//     return <h2 style={{ color: 'red' }}>Error: {error} 🚨</h2>;
//   }

//   return (
//     <div>
//       <h1>Firestore Items Collection 🥭</h1>
//       {/* 4. Map the 'items' state and display the data */}
//       {items.length > 0 ? (
//         <ul>
//           {items.map(item => (
//             <li key={item.id}>
//               **Name:** {item.name}, **Color:** {item.color}
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p>No items found in the collection.</p>
//       )}
//     </div>
//   );
// }

// export default ItemList;