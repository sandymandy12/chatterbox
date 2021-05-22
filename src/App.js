import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home, Navigation, Chat, Contact, Footer } from './pages/index';
//import './App.css'
//import Home from "./pages/Home";
//import Chat from './pages/Chat';

import { auth } from './firebase';




function App() {


  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          
          <Route path="/chat" exact component={() => <Chat />} />
          <Route path="/contact" exact component={() => <Contact />} />
        </Switch>
        <Footer />

      </div>
    </Router>
  );
}

function SignOut() {
  return auth.currentUser && (
    <button className="sign-out" onClick={() => auth.signOut()}>Sign Out</button>
  )
}

export default App;