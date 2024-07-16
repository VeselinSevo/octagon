import { db } from "./firebase.js";
import {
    collection,
    getDocs,
    addDoc,
    deleteDoc,
    doc,
    updateDoc,
} from "firebase/firestore";

export async function getAllUsers() {
    const colRef = collection(db, "users");
    const users = [];

    try {
        const snapshot = await getDocs(colRef);
        snapshot.forEach((doc) => {
            users.push({ ...doc.data(), id: doc.id });
        });
        return users;
    } catch (error) {
        console.error("Error fetching users:", error);
        throw error; // Optional: propagate the error for handling elsewhere
    }
}

export async function addUser(userData) {
    const colRef = collection(db, "users");
    await addDoc(colRef, {
        username: userData.username,
        email: userData.email,
        password: userData.password,
        role_id: 1,
    });
}

export async function addUserAdmin(userData) {
    const colRef = collection(db, "users");
    await addDoc(colRef, {
        username: userData.username,
        email: userData.email,
        password: userData.password,
        role_id: userData.role_id,
    });
}

export async function getUserById(id) {
    const colRef = collection(db, "users");
    let user;

    try {
        const snapshot = await getDocs(colRef);
        snapshot.forEach((doc) => {
            if (doc.id == id) {
                user = { ...doc.data(), id: doc.id };
            }
        });

        return user;
    } catch (error) {
        console.error("Error getting user by id:", error);
        throw error; // Optional: propagate the error for handling elsewhere
    }
}

export async function getUserRole(roleId) {
    const colRef = collection(db, "role");
    let roleName;

    try {
        const snapshot = await getDocs(colRef);
        snapshot.forEach((doc) => {
            if (doc.data().id == roleId) {
                roleName = doc.data().name;
            }
        });

        return roleName;
    } catch (error) {
        console.error("Error getting role name:", error);
        throw error; // Optional: propagate the error for handling elsewhere
    }
}

export async function getUserByEmail(email) {
    const colRef = collection(db, "users");
    let user;

    try {
        const snapshot = await getDocs(colRef);
        snapshot.forEach((doc) => {
            if (doc.data().email == email) {
                user = { ...doc.data(), id: doc.id };
            }
        });

        return user;
    } catch (error) {
        console.error("Error getting user by id:", error);
        throw error; // Optional: propagate the error for handling elsewhere
    }
}

export async function deleteUser(id) {
    try {
        const userDoc = doc(db, "users", id);
        await deleteDoc(userDoc);
    } catch (error) {
        console.error("Error deleting user:", error);
        throw error; // Optional: propagate the error for handling elsewhere
    }
}

export async function updateUser(id, userData) {
    const userDoc = doc(db, "users", id);
    try {
        await updateDoc(userDoc, userData);
    } catch (error) {
        console.error("Error updating user:", error);
        throw error; // Optional: propagate the error for handling elsewhere
    }
}

export async function getUserRoles() {
    const colRef = collection(db, "role"); // Assuming your collection is named 'roles'
    const roles = [];

    try {
        const snapshot = await getDocs(colRef);
        snapshot.forEach((doc) => {
            roles.push({
                id: doc.data().id,
                name: doc.data().name,
            });
        });
        return roles;
    } catch (error) {
        console.error("Error fetching user roles:", error);
        throw error; // Optional: propagate the error for handling elsewhere
    }
}
