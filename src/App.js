import React, { useState } from 'react';
import './App.css';
import Home from './components/Home/Home';
import teacherImage from './assets/broonie_teacher.png';
import studentImage from './assets/broonie_student.png';

function App() {
  const [isLandingPageVisible, setIsLandingPageVisible] = useState(true);

  const navigateToHome = () => {
    setIsLandingPageVisible(false);
  };

  return (
    <div className="App">
      {isLandingPageVisible ? (
        <div className="landing-page">
          <h1>broonie.ai</h1> {/* Updated text */}
          <div className="image-panel">
            <div onClick={navigateToHome} className="image-container teacher">
              <img src={teacherImage} alt="Teacher" />
              <p>Teacher</p>
            </div>
            <div onClick={navigateToHome} className="image-container student">
              <img src={studentImage} alt="Student" />
              <p>Student</p>
            </div>
          </div>
        </div>
      ) : (
        <Home />
      )}
    </div>
  );
}

export default App;
