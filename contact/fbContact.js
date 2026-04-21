import { initializeApp } from "https://www.gstatic.com/firebasejs/12.12.0/firebase-app.js";
import { getDatabase, set, get, ref, update, remove } 
from "https://www.gstatic.com/firebasejs/12.12.0/firebase-database.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC42H8-4RvYJkXpCdlBhUibz7iCcmzARiQ",
  authDomain: "contactform-c7243.firebaseapp.com",
  projectId: "contactform-c7243",
  storageBucket: "contactform-c7243.firebasestorage.app",
  messagingSenderId: "958142139403",
  appId: "1:958142139403:web:8ae4ef900e4b694db00b0e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

console.log("Firebase connected:", db);


function writeUserData(userId, firstName, lastName, phone, email, address, message, contactMethod) {

  if (!userId) {
    alert("Please enter a User ID");
    return;
  }

  set(ref(db, 'contacts/' + userId), {
    firstName,
    lastName,
    phone,
    email,
    address,
    message,
    contactMethod
  })
  .then(() => {
    alert("Message submitted successfully! Your ID is: " + userId);
  })
  .catch((error) => {
    console.error("Error writing data:", error);
  });
}

window.writeUserData = writeUserData;


// ===================== READ =====================
function readUserData() {
  const dataRef = ref(db, 'contacts');

  get(dataRef)
    .then((snapshot) => {
      if (snapshot.exists()) {
        snapshot.forEach((childSnapshot) => {
          console.log(childSnapshot.key, childSnapshot.val());
        });
      } else {
        console.log("No data available");
      }
    })
    .catch((error) => {
      console.error("Error reading data:", error);
    });
}

window.readUserData = readUserData;



// ===================== UPDATE =====================
function updateUserData(userId, updatedData) {

  const userRef = ref(db, 'contacts/' + userId);

  update(userRef, updatedData)
    .then(() => {
      alert("Contact updated successfully!");
    })
    .catch((error) => {
      console.error("Error updating data:", error);
    });
}

window.updateUserData = updateUserData;



// ===================== DELETE =====================
function deleteUserData(userId) {

  const userRef = ref(db, 'contacts/' + userId);

  remove(userRef)
    .then(() => {
      alert("Contact deleted successfully!");
    })
    .catch((error) => {
      console.error("Error deleting data:", error);
    });
}

window.deleteUserData = deleteUserData;