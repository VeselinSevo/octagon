<template>
    <div class="w-full">
        Firebase view

    </div>
</template>

<script>
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";
export default {
    name: 'HomeView',
    created() {
        const firebaseConfig = {
            apiKey: "AIzaSyDo5CtsGj954niiRLFY9x6bmBMDia9Q4gE",
            authDomain: "hexagon-69216.firebaseapp.com",
            projectId: "hexagon-69216",
            storageBucket: "hexagon-69216.appspot.com",
            messagingSenderId: "464703559580",
            appId: "1:464703559580:web:09f4cc37aa83301bd91a59",
        };

        initializeApp(firebaseConfig);

        const db = getFirestore();

        const colRef = collection(db, "users");

        getDocs(colRef).then((snapshot) => {

            let users = []
            snapshot.docs.forEach(user => {
                users.push({ ...user.data(), id: user.id })
            })
        }).catch(err => {
            console.log(err)
        });

    }
}
</script>