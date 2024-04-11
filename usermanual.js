import React, { useState } from 'react';

// Define a component for each section of the user manual
const Section = ({ title, content }) => (
  <div>
    <h2>{title}</h2>
    <p>{content}</p>
  </div>
);

const UserManual = () => {
  // Define state to keep track of the current section being displayed
  const [currentSection, setCurrentSection] = useState(0);

  // Define the sections of the user manual
  const sections = [
    { title: "Getting Started", content: "Welcome to our application! Follow these instructions to get started..." },
    { title: "Features", content: "Here are the main features of our application..." },
    { title: "FAQ", content: "Frequently Asked Questions..." },
    // Add more sections as needed
  ];

  // Function to navigate to the next section
  const nextSection = () => {
    setCurrentSection(currentSection + 1);
  };

  // Function to navigate to the previous section
  const prevSection = () => {
    setCurrentSection(currentSection - 1);
  };

  return (
    <div>
      <h1>User Manual</h1>
      {/* Display the current section */}
      <Section title={sections[currentSection].title} content={sections[currentSection].content} />
      {/* Navigation buttons */}
      <button onClick={prevSection} disabled={currentSection === 0}>Previous</button>
      <button onClick={nextSection} disabled={currentSection === sections.length - 1}>Next</button>
    </div>
  );
};

export default UserManual;
