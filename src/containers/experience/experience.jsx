import React from 'react';
import Feature from '../../components/feature/Feature';
import './experience.css';

const Experience = () => (
  <div className="about section__margin" id="about">
    <div className="about-heading">
      <h1 className="gradient__text">Experience</h1>
    </div>
    <div className="about-container">
      <Feature title="PC Part Picker" text="Developed and maintained components for a user interface (UI) through React
● Developed and maintained a login system that stores user information in an SQL database
● Developed and maintained a web scraper using Node.js frameworks to search common stores that
sell PC parts and retrieve important information about a PC part such as price, shipping price and
availability." />
      <Feature title="Tex N Spex" text="Spearheaded the development of a dynamic tutoring platform using React and JavaScript, leading
to a 40% increase in user sign-ups within the first two weeks.
● Implemented interactive features and seamless navigation, resulting in a 30% reduction in bounce
rate and improved user satisfaction.
● Optimized website performance by utilizing OOP techniques, achieving a 50% decrease in page
load time and enhancing the overall user experience." />
      <Feature title="Towson University Applied Mathematics Labs" text="Collaborated with Scrum team to develop a QGIS plugin using Python, resulting in a significant improvement in workflow efficiency for geospatial analysis and visualization.
● Actively participated in Scrum ceremonies, including daily stand-ups, sprint planning, sprint reviews, and retrospectives
● Worked closely with the Quality Assurance team to write automated unit tests and ensure 100 percent code coverage for the plugin, reducing the risk of potential bugs" />
    </div>
  </div>
);

export default Experience;
