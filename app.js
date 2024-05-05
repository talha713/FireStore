import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, doc, onSnapshot  } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyBd69UI9bAna_NVO9LnQUvg8ibOy93Yv28",
    authDomain: "fir-class1-424c0.firebaseapp.com",
    projectId: "fir-class1-424c0",
    storageBucket: "fir-class1-424c0.appspot.com",
    messagingSenderId: "643394619425",
    appId: "1:643394619425:web:8638ad5808bd39405bfb60",
    measurementId: "G-QE5RQX7YKW"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

let getBtn = document.querySelector("#btn")
getBtn.addEventListener('click', async () => {

    let name = document.querySelector("#name")
    let fname = document.querySelector("#fname")
    let phone = document.querySelector("#phone")

    try {
        const docRef = await addDoc(collection(db, "users"), {
            name: name.value,
            fname: fname.value,
            phone: parseInt(phone.value) 
        });
        console.log("Document written with ID: ", docRef.id);
        console.log("Document ==>", docRef);
    } catch (e) {
        console.error("Error adding document: ", e);
    }

})

// const querySnapshot = await getDocs(collection(db, "users"));
// querySnapshot.forEach((doc) => {
//   console.log(`${doc.id}`, JSON(doc.data));
// });


const unsub = onSnapshot(doc(db, "users"), (doc) => {
    console.log("Current data: ", doc.data());
});