import React from 'react';
import graduation from '../../images/graduation.jpg';
import './header.css';

const Header = () => (
  <div className="header section__padding" id="home">
    <div className="header-content">
      <h1 className="gradient__text">Caleb Wossen</h1>
      <p>As a recent Computer Science graduate from Towson University, I possess a broad skill set in software development, including proficiency in technologies such as Java, JavaScript, React, and Express.js. I am experienced in using tools like Git, Maven, and JIRA for efficient collaboration and project management. Additionally, I have a strong foundation in database management with MySQL and MongoDB. Eager to contribute to innovative solutions, I am committed to staying updated with emerging technologies. Overall, I am a driven and adaptable software developer ready to make a positive impact with my skills and passion.</p>
      <div className="header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Get Started</button>
      </div>
    </div>

    <div className="header-image">
      <img src={graduation} />
    </div>
  </div>
);

export default Header;
