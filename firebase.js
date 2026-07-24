import { initializeApp } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-app.js";
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyCt2KKlKTpj_uDYjMQoly8ozYTVQeNo2y4",
  authDomain: "myproject-7b021.firebaseapp.com",
  databaseURL: "https://myproject-7b021-default-rtdb.firebaseio.com",
  projectId: "myproject-7b021",
  storageBucket: "myproject-7b021.firebasestorage.app",
  messagingSenderId: "668101963918",
  appId: "1:668101963918:web:4470ebba897249778f59df",
  measurementId: "G-MTT1V0GRCL"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

window.saveName = function(name) {
  push(ref(db, "names"), {
    name: name
  });
};
window.saveLocation = function(lat, lon, address) {
  push(ref(db, "locations"), {
    latitude: lat,
    longitude: lon,
    address: address,
    time: new Date().toISOString()
  });
};
