# Form App Code Challenge

## Overview
This is a starter project for the Form App Code Challenge. Your task is to complete the implementation of a responsive form application in React that includes various form field types, validation, conditional rendering, and simulated API submission.

## Challenge Requirements

### Form Structure
- Create a multi-section form with at least 4 distinct sections (e.g., Personal Information, Professional Experience, etc.)
- Implement various form field types (text, email, select, checkbox, radio, textarea, etc.)
- Add proper validation for required fields and specific formats (email, phone, etc.)

### Responsive Design
- Ensure the form is fully responsive and works well on mobile devices
- Implement a clean, user-friendly layout that adapts to different screen sizes

### State Management
- Use React state management (useState, useContext, or Redux) to handle form data
- Implement controlled components for all form inputs
- Create a centralized state structure to manage all form values

### Performance Optimization
- Implement debouncing for input validation to prevent unnecessary re-renders
- Use React.memo or other optimization techniques where appropriate

### Conditional Rendering
- Add at least one section that only appears based on user selection
- Implement dynamic form fields that change based on user input

### API Submission Simulation
- Create a mock API submission function with loading states
- Implement success and error handling for form submission
- Display appropriate feedback to the user after submission

## Project Structure
- `src/components/FormContainer.js`: Main container component for the form
- `src/components/FormField.js`: Reusable component for form fields
- `src/components/FormSection.js`: Component for form sections
- `src/components/SubmissionStatus.js`: Component to display submission status

## Getting Started
1. Review the existing code to understand the structure
2. Complete the TODOs in each component file
3. Test your implementation to ensure it meets all requirements

## Running the Project
```bash
# Install dependencies
npm install

# Start the development server
npm start
```

## Evaluation Criteria
- Correct implementation of form fields and validation
- Effective state management and data handling
- Proper implementation of responsive design
- Successful implementation of conditional rendering
- Clean, readable, and well-organized code
- Proper handling of form submission and user feedback

## Time Constraint
This challenge is designed to be completed in 25 minutes by a novice to intermediate developer.
