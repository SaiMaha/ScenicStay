import React, { useState, useEffect } from "react";
import { doc, setDoc, collection, addDoc, updateDoc, deleteDoc, onSnapshot } from "firebase/firestore";
import { __DB } from "../Backend/Firebase"; // Import Firestore database

const TravelJournal = () => {
  const [entry, setEntry] = useState({
    destination: "",
    date: "",
    description: "",
    imageUrl: "",
  });

  const [entries, setEntries] = useState([]);
  const [editId, setEditId] = useState(null);

  // 🔹 Fetch Entries from Firebase (Real-time Listener)
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(__DB, "travel_journal"), (snapshot) => {
      const journalEntries = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      console.log("Updated Entries:", journalEntries); // Debug log
      setEntries(journalEntries);
    });

    return () => unsubscribe(); // Cleanup the listener on unmount
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEntry({ ...entry, [name]: value });
  };

  // 🔹 Submit (Add / Update) Entry
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (editId !== null) {
      // Update the existing entry in Firebase
      try {
        await updateDoc(doc(__DB, "travel_journal", editId), entry);
      } catch (error) {
        console.error("Error updating document:", error);
      }
      setEditId(null);
    } else {
      // Add a new entry to Firebase
      try {
        await addDoc(collection(__DB, "travel_journal"), entry);
        setEntry({ destination: "", date: "", description: "", imageUrl: "" }); // Reset form
      } catch (error) {
        console.error("Error adding document:", error);
      }
    }
  };

  // 🔹 Edit Entry
  const handleEdit = (id) => {
    const selectedEntry = entries.find((entry) => entry.id === id);
    setEntry(selectedEntry);
    setEditId(id);
  };

  // 🔹 Delete Entry (Fixed)
  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(__DB, "travel_journal", id)); // Delete from Firestore
    } catch (error) {
      console.error("Error deleting document:", error);
    }
  };

  return (
    <main className="flex flex-col md:flex-row min-h-screen bg-gradient-to-br from-blue-100 to-teal-200 p-8 mt-14">
      <section className="md:w-2/3 bg-white shadow-lg rounded-xl p-6">
        <h1 className="text-4xl font-extrabold text-teal-700">🌍 Travel Journal</h1>
        <p className="text-gray-600 mt-2">Capture your travel memories beautifully.</p>

        <form onSubmit={handleSubmit} className="mt-5 flex flex-col gap-4">
          <input type="text" name="destination" placeholder="Destination" value={entry.destination} onChange={handleChange} className="border-2 p-3 rounded-lg focus:border-teal-500" />
          <input type="date" name="date" value={entry.date} onChange={handleChange} className="border-2 p-3 rounded-lg focus:border-teal-500" />
          <textarea name="description" placeholder="Description" value={entry.description} onChange={handleChange} className="border-2 p-3 rounded-lg focus:border-teal-500"></textarea>
          <input type="text" name="imageUrl" placeholder="Image URL (optional)" value={entry.imageUrl} onChange={handleChange} className="border-2 p-3 rounded-lg focus:border-teal-500" />
          
          <button type="submit" className="bg-teal-500 text-white p-3 rounded-lg hover:bg-teal-600 transition duration-300">
            {editId !== null ? "Update Entry ✏️" : "Add Entry ➕"}
          </button>
        </form>
      </section>

      <aside className="md:w-1/3 mt-6 md:mt-0 md:ml-6 bg-white shadow-lg rounded-xl p-6">
        <h2 className="text-2xl font-bold text-teal-700">📌 Your Travel Entries</h2>
        {entries.length === 0 ? (
          <p className="text-gray-500 mt-3">No entries yet. Start adding your memories! ✨</p>
        ) : (
          <div className="mt-4 space-y-4">
            {entries.map((item) => (
              <div key={item.id} className="bg-gray-50 p-4 shadow-md rounded-lg">
                <h3 className="font-bold text-xl text-teal-600">{item.destination}</h3>
                <p className="text-gray-500">{item.date}</p>
                <p className="text-gray-700 mt-1">{item.description}</p>
                {item.imageUrl && (
                  <img 
                    src={item.imageUrl} 
                    alt="Travel" 
                    className="w-full h-40 object-cover rounded-lg mt-3"
                  />
                )}
                <div className="flex gap-2 mt-3">
                  <button
                    onClick={() => handleEdit(item.id)}
                    className="bg-yellow-400 text-white px-4 py-2 rounded-lg hover:bg-yellow-500 transition"
                  >
                    Edit ✏️
                  </button>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
                  >
                    Delete 🗑️
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </aside>
    </main>
  );
};

export default TravelJournal;
