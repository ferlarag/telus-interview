import React from 'react';

// This component should display the status of the form submission
// Props:
// - status: An object containing the submission status (success, message)
// - onReset: Function to reset the form and submission status

const SubmissionStatus = ({ status, onReset }) => {
  // TODO: Implement the SubmissionStatus component
  // 1. Display different UI based on success/error status
  // 2. Show the status message
  // 3. Add a button to reset the form if submission was successful
  
  if (!status) return null;
  
  const { success, message } = status;
  
  return (
    <div className={`submission-status ${success ? 'success' : 'error'}`}>
      <div className="status-icon">
        {success ? '✓' : '⚠'}
      </div>
      <div className="status-message">{message}</div>
      {success && (
        <button className="reset-button" onClick={onReset}>
          Submit Another Form
        </button>
      )}
    </div>
  );
};

export default SubmissionStatus;
