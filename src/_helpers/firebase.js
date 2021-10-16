import { initializeApp, auth } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// import '@firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBHem8oGB8C8md6HGECGOAjAUh3Kurnhpc',
  authDomain: 'instagram-clone-3862e.firebaseapp.com',
  projectId: 'instagram-clone-3862e',
  storageBucket: 'instagram-clone-3862e.appspot.com',
  messagingSenderId: '841300588622',
  appId: '1:841300588622:web:6dbb23a25712fbe1d02b1f',
  measurementId: 'G-8BWN1DZP8V',
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
// const auth = app.auth;

// const googleProvider = new auth.GoogleAuthProvider();

async function getCities(db) {
  const citiesCol = collection(db, 'cities');
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map((doc) => doc.data());
  console.log(cityList);
  return cityList;
}
async function displayCities() {
  return getCities(db);
}

// const signInWithGoogle = async () => {
//   try {
//     const res = await auth.signInWithPopup(googleProvider);
//     const user = res.user;
//     const query = await db
//       .collection('users')
//       .where('uid', '==', user.uid)
//       .get();
//     if (query.docs.length === 0) {
//       await db.collection('users').add({
//         uid: user.uid,
//         name: user.displayName,
//         authProvider: 'google',
//         email: user.email,
//       });
//     }
//   } catch (err) {
//     console.error(err);
//     alert(err.message);
//   }
// };

// const signInWithEmailAndPassword = async (email, password) => {
//   try {
//     await auth.signInWithEmailAndPassword(email, password);
//   } catch (err) {
//     console.error(err);
//     alert(err.message);
//   }
// };

// const registerWithEmailAndPassword = async (name, email, password) => {
//   try {
//     const res = await auth.createUserWithEmailAndPassword(email, password);
//     const user = res.user;
//     await db.collection('users').add({
//       uid: user.uid,
//       name,
//       authProvider: 'local',
//       email,
//     });
//   } catch (err) {
//     console.error(err);
//     alert(err.message);
//   }
// };

// const sendPasswordResetEmail = async (email) => {
//   try {
//     await auth.sendPasswordResetEmail(email);
//     alert('Password reset link sent!');
//   } catch (err) {
//     console.error(err);
//     alert(err.message);
//   }
// };

// const logout = () => {
//   auth.signOut();
// };

// export default {
//   auth,
//   db,
//   signInWithGoogle,
//   signInWithEmailAndPassword,
//   registerWithEmailAndPassword,
//   sendPasswordResetEmail,
//   logout,
// };
export default {
  auth,
  displayCities,
};
