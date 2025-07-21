import React from 'react';

// This component should render a section of the form
// Props:
// - title: The title of the section
// - children: The form fields to render inside the section

const FormSection = ({ title, children }) => {
  // TODO: Implement the FormSection component
  // 1. Create a styled container for a form section
  // 2. Display the section title
  // 3. Render the children (form fields) inside the section
  
  return (
    <div className="form-section">
      <h3 className="section-title">{title}</h3>
      <div className="section-content">
        {children}
      </div>
    </div>
  );
};

export default FormSection;
