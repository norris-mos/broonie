import React, { useState } from 'react';
import './TeacherComponent.css';

function TeacherComponent({ onCompleted }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    grade: '',
    subject: '',
    examBoard: '',
    // Add other Scottish education-specific parameters as needed
  });

  // Function to handle changing step
  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  // Function to handle form data change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Function to render the current step
  const renderStep = () => {
    switch (currentStep) {
      // Sample Step 1 with Dropdown
      case 1:
        return (
          <div className="onboarding-step">
            <label>
              Grade:
              <select
                name="grade"
                value={formData.grade}
                onChange={handleChange}
                className="onboarding-dropdown"
              >
                <option value="">Select Grade</option>
                {/* Populate with grades */}
              </select>
            </label>
            <div className="form-buttons">
              {Array.from({ length: 10 }, (_, i) => (
                <button
                  key={`form-${i + 1}`}
                  className="form-button"
                  onClick={() =>
                    setFormData({ ...formData, grade: `Form ${i + 1}` })
                  }
                >
                  {`Form ${i + 1}`}
                </button>
              ))}
            </div>
          </div>
        );

      case 2:
        return (
          <div className="onboarding-step">
            <label>Curriculum:</label>
            <div className="curriculum-buttons">
              {['SQA', 'National 5', 'GCSE'].map((curriculum, index) => (
                <button
                  key={index}
                  className="curriculum-button"
                  onClick={() =>
                    setFormData({ ...formData, curriculum: curriculum })
                  }
                >
                  {curriculum}
                </button>
              ))}
            </div>
          </div>
        );

      case 3:
        return (
          <div className="onboarding-step">
            <label>
              Subject:
              <select
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="onboarding-dropdown"
              >
                <option value="">Select Subject</option>
                <option value="Mathematics">Mathematics</option>
                <option value="English">English</option>
                <option value="History">History</option>
                <option value="Biology">Biology</option>
                <option value="Chemistry">Chemistry</option>
                {/* Add more subjects as needed */}
              </select>
            </label>
          </div>
        );

      case 4:
        return (
          <div className="onboarding-step">
            <div className="onboarding-header">Onboarding Complete!</div>
            <button className="onboarding-button" onClick={onCompleted}>
              Go to Dashboard
            </button>
          </div>
        );

      // Add more cases as per the number of steps you have
      default:
        return <div>Go to Dashboard</div>;
    }
  };

  return (
    <div className="onboarding-container">
      <h2 className="onboarding-header">Teacher Onboarding</h2>
      <div className="onboarding-text">Please fill in your details</div>
      <div className="onboarding-step-content">{renderStep()}</div>
      {currentStep < 4 && ( // Only show the "Next" button if it's not the final step
        <button className="onboarding-button" onClick={nextStep}>
          Next
        </button>
      )}
      <div className="progress-indicator">
        {/* Render the dots here based on the current step */}
      </div>
    </div>
  );
}

export default TeacherComponent;
