import React from 'react';
import Feature from '../../components/feature/Feature';
import './courses.css';

const CoursesData = [
  {
    title: 'DATA STRUCTURES AND ALGORITHM ANALYSIS',
    text: 'Fundamental data structures used in programming and the basic techniques used to design and analyze algorithms.',
  },
  {
    title: 'DATA COMMUNICATIONS AND NETWORKING',
    text: 'Expertise certification training course via a comprehensive curriculum covering the concepts of DevOps.',
  },
  {
    title: 'SOFTWARE ENGINEERING',
    text: 'Methodology of designing and programming for a wide area of applications with a high degree of modifiability, efficiency, reliability, and understanding.',
  },
  {
    title: 'OPERATING SYSTEMS',
    text: 'Operating systems as resource managers with emphasis on file processor, memory and device management and processes. Design and implementation of a simulated multiprogramming operating system.',
  },
  {
    title: 'PROGRAMMING LANGUAGES: DESIGN & IMPLEMENTATION',
    text: 'Underlying concepts in high-level programming languages and techniques for their implementation, a survey of a selected group of such languages along with a discussion of the interrelationship between programming and programming languages.',
  },
  {
    title: 'DATABASE MANAGEMENT SYSTEMS',
    text: 'Data models and sublanguages; security and integrity problems; functions of the database administrator; implementation and use of a database management system; a comparison of widely used DBMS packages.',
  },
  {
    title: 'OBJECT-ORIENTED DESIGN & PROGRAMMING',
    text: 'Introduction to object-oriented design and programming technology (OOD/OOP). Main phases in object-oriented design and techniques in object-oriented programming. Programming language design and implementation issues for object-oriented languages. ',
  },
  {
    title: 'MOBILE APPLICATION DEVELOPMENT',
    text: 'Topics include mobile device architecture, event-handlers, location-based services, onboard mobile device sensors, programming languages, software engineering, user interface design, and mobile application distribution.',
  },
  {
    title: 'WEB-BASED PROGRAM',
    text: 'Technologies include HTTP protocol, dynamic HTML, server-side programming, and client-side JavaScript libraries & frameworks.',
  },
];

const Courses = () => (
  <div className="courses section__padding" id="courses">
    <div className="courses-heading">
      <h1 className="gradient__text">Towson University Relavant Courses</h1>
      <p>Request Early Access to Get Started</p>
    </div>
    <div className="courses-container">
      {CoursesData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Courses;
