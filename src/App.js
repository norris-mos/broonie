import React, { useState } from 'react';
import './App.css';
import Home from './components/Home/Home';
import TeacherComponent from './components/TeacherComponent/TeacherComponent'; // Assuming you have this component
import teacherImage from './assets/broonie_teacher.png';
import studentImage from './assets/broonie_student.png';

function App() {
  const [isLandingPageVisible, setIsLandingPageVisible] = useState(true);
  const [teacherSelected, setTeacherSelected] = useState(false);

  const navigateToTeacherSetting = () => {
    setIsLandingPageVisible(false); // Hide the landing page
    setTeacherSelected(true); // Show the TeacherComponent
  };

  const navigateToHome = () => {
    setIsLandingPageVisible(false); // Ensure landing page is hidden
    setTeacherSelected(false); // Ensure teacher selection is reset when navigating to Home
  };

  return (
    <div className="App">
      {isLandingPageVisible ? (
        <div className="landing-page">
          <h1>broonie.ai</h1> {/* Updated text */}
          <div className="image-panel">
            <div
              onClick={navigateToTeacherSetting}
              className="image-container teacher"
            >
              <img src={teacherImage} alt="Teacher" />
              <p>Teacher</p>
            </div>
            <div onClick={navigateToHome} className="image-container student">
              <img src={studentImage} alt="Student" />
              <p>Student</p>
            </div>
          </div>
        </div>
      ) : teacherSelected ? (
        <TeacherComponent onCompleted={navigateToHome} /> // Pass navigateToHome to TeacherComponent for the 'next' button
      ) : (
        <Home />
      )}
    </div>
  );
}

export default App;
