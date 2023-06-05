import React from 'react';
import { useState } from "react";
import Header from './containers/header/Header';
import Chat from './containers/chat/chat';
import { Navbar } from 'react-bootstrap';
import Projects from './containers/projects/projects';
import Courses from './containers/courses/Courses';
import Experience from './containers/experience/experience';
import AuthPage from "./authPage";
import ChatsPage from "./chatsPage";
import App2 from './containers/chat/app';

import './App.css';

const App = () => (

  <div className="App">
    <div className="gradient__bg">
      <Navbar />
      <Header />
    </div>
    
    <Experience />
    <Courses />
    
    <Projects/>
    
    

  
  
  </div>
); 

/* function App3() {
  const [user, setUser] = useState();

  if (!user) {
    return <AuthPage onAuth={(user) => setUser(user)} />;
  } else {
    return <ChatsPage user={user} />;
  }
} */

export default App;
