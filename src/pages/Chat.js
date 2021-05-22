import React, { useRef, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

import firebase from 'firebase/app';
import { auth, firestore, analytics } from '../firebase';

import './css/App.css';

function Chat() {
  const [user] = useAuthState(auth);

    return (
        <div>
            <section>
                {user ? <ChatRoom /> : <SignIn />}
            </section>
        </div>
    )
}

function SignIn() {

    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
    }

  return (
    <>
      <button className="sign-in" onClick={signInWithGoogle}>Sign in with Google</button>
      <p></p>
    </>
  )

}

function ChatRoom() {
    const dummy = useRef();
    const messagesRef = firestore.collection('messages');
    const query = messagesRef.orderBy('createdAt').limit(25);
  
    const [messages] = useCollectionData(query, { idField: 'id' });
  
    const [formValue, setFormValue] = useState('');
  
  
    const sendMessage = async (e) => {
      e.preventDefault();
  
      const { uid, photoURL } = auth.currentUser;
  
      await messagesRef.add({
        text: formValue,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        uid,
        photoURL
      })
  
      setFormValue('');
      dummy.current.scrollIntoView({ behavior: 'smooth' });
    }
  
    return (<>
      <main>
  
        {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
  
        <span ref={dummy}></span>
  
      </main>
  
      <form onSubmit={sendMessage}>
  
        <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="say something nice" />
  
        <button type="submit" disabled={!formValue}>🕊️</button>
  
      </form>
    </>)
  }
  
  
  function ChatMessage(props) {
    const { text, uid, photoURL } = props.message;
  
    const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';
  
    return (<>
      <div className={`message ${messageClass}`}>
        <img src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'} />
        <p>{text}</p>
      </div>
    </>)
  }

export default Chat
