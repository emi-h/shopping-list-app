// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { child, get, getDatabase, ref } from "firebase/database";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  // ...
  // The value of `databaseURL` depends on the location of the database
  databaseURL:
    "https://shopping-list-app-5a241-default-rtdb.asia-southeast1.firebasedatabase.app/",
};

// Initialize Firebase
if (initializeApp.length === 0) {
  const app = initializeApp(firebaseConfig);
  // Initialize Realtime Database and get a reference to the service
  // const database = getDatabase(app);

  // データを読み取る
  const dbRef = ref(getDatabase(app));
  const getData = () =>
    get(child(dbRef, ``))
      .then((snapshot) => {
        if (snapshot.exists()) {
          console.log(snapshot.val());
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  getData();
}
