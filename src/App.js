
import './App.css';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import app from './firebase.init';
import { useState } from 'react';
const auth = getAuth(app);
function App() {
  const [user, setUser] = useState({})
  const provider = new GoogleAuthProvider();
 const handleGoogleSignIn = () => {
   signInWithPopup(auth, provider)
   .then(result => {
     const user = result.user
     setUser(user);
     console.log(user);
   })
   .catch(error => {
     console.error(error)
   })
 }
 const handleGoogleSignOut = () => {
   signOut(auth)
   .then(() => {
     setUser({});
   })
   .catch(error => {
     setUser({});
   })
 }
  return (
    <div className="App">
      <button onClick={handleGoogleSignIn}>Google sign in</button>
      <button onClick={handleGoogleSignOut}>Sign out</button>
      <h2>name: {user.displayName}</h2>
      <p>your email: {user.email}</p>
      <img src={user.photoURL} alt="" />
    </div>
  );
}

export default App;
