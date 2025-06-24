import auth from "@react-native-firebase/auth"
import firestore from '@react-native-firebase/firestore'

export async function signInWithEmailAndPassword(email: string, password: string) {
    try {
        const userCredential = await auth().signInWithEmailAndPassword(email, password);
        // userCredential.user contains the signed-in user info
        console.log('User signed in:', userCredential.user.email);
        return userCredential;
    } catch (error) {
        // Handle Errors here.
        console.error('Login error:', error);
        throw error;
    }
}

export async function createUserWithEmailAndPassword(email: string, password: string) {
    try {
        const userCredential = await auth().createUserWithEmailAndPassword(email, password);

        const uid = userCredential.user.uid;

        await firestore().collection("users").doc(uid).set({
            email,
            plan: "basic",
            createdAt: Date.now(),
            updatedAt: Date.now(),
        });

        // userCredential.user contains the created user
        return userCredential;
    } catch (error) {
        // Handle errors (e.g., email already in use, invalid email, weak password)
        throw error;
    }
}

export async function signIn(email: string, password: string) {
    try {
        const userCredential = await auth().signInWithEmailAndPassword(email, password);
        // userCredential.user contains the signed-in user info
        console.log('User signed in:', userCredential.user.email);
        return userCredential;
    } catch (error) {
        console.error('Sign-in failed:', error);
        throw error;
    }
}

export async function signOut() {
    try {
        await auth().signOut();
        console.log('User signed out!');
    } catch (error) {
        console.error('Sign out error:', error);
    }
}