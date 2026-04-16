
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.12.0/firebase-app.js";
  import { getDatabase, set, ref } from "https://www.gstatic.com/firebasejs/12.12.0/firebase-database.js"; 
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDj7aHVSo0R7Ya84zr7Vd0Ociyoe1mMhIs",
    authDomain: "mobileprogramming-741f2.firebaseapp.com",
    projectId: "mobileprogramming-741f2",
    storageBucket: "mobileprogramming-741f2.firebasestorage.app",
    messagingSenderId: "517527121287",
    appId: "1:517527121287:web:6f6c1ac2f3f84f4c663722"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
    const db = getDatabase(app);

console.log(db)

function writeUserData(userId, firstName, lastname) {
    set(ref(db, 'users/' + userId), {
        firstName: firstName,
      lastname: lastname, 

    });
  }

writeUserData(1, "John", "Doe");