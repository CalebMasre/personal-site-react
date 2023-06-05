import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import './projects.css';



const Projects = () => (
  <div className="possibility section__padding" id="possibility">
    <div className="possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="possibility-content">
    <h4><a href="https://github.com/CalebMasre">My Github Page</a></h4>
      <h1 className="gradient__text">Projects</h1>

      {/* Uno Project */}
      <h3>Uno Android Application</h3>
      <p>Developed front-end through Composable classes and Viewmodels with Java and Kotlin. 
Incorporated a Room SQL database for player data and stats that makes queries to an online JSON server
</p>
      <h4><a href="https://github.com/CalebMasre">Click to go to Repository</a></h4>


      {/* Personal Webpagge */}
      <h3>Personal Webpage</h3>
      <p>Developed a personal website using React and React-Bootstrap for the front-end. 
Incorporated a MySQL database to store user login information
 Developed a Chatroom with Spring Boot, StompJS, and SockJS for the back-end.

</p>
      <h4><a href="https://github.com/CalebMasre">Click to go to Repository</a></h4>

      {/* Compiler */}
      <h3>Compiler</h3>
      <p>Developed a lexical analyzer and parser for a custom high-level programming language 
Identified errors and displayed them with corresponding line numbers and tokens
Implemented semantic analysis using Emacs Lisp and wrote parser and lexical analyzer in Java

</p>
      <h4><a href="https://github.com/CalebMasre">Click to go to Repository</a></h4>




    </div>
  </div>
);

export default Projects;
