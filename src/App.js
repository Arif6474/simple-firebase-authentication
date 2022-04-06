
import './App.css';
import { getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import app from './firebase.init';
import { useState } from 'react';
const auth = getAuth(app);
function App() {
  const [user, setUser] = useState({})
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
 const handleGoogleSignIn = () => {
   signInWithPopup(auth, googleProvider)
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
 const handleGithubSignIn = () => {
   signInWithPopup(auth, githubProvider)
   .then((result) => {
     const user = result.user
    setUser(user)
   })
   .catch((error) => {
    console.error(error)
   })
 }
  return (
    <div className="App">
     { user.uid ? <button onClick={handleGoogleSignOut}>Sign out</button> :
      <div>
      <button onClick={handleGoogleSignIn}>Google sign in</button> 
      <button onClick={handleGithubSignIn}>Github sign in</button> 
      </div>
     }
      <h2>name: {user.displayName}</h2>
      <p>your email: {user.email}</p>
      <img src={user.photoURL} alt="" />
    </div>
  );
}

export default App;
