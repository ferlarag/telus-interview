import React, { useState } from "react";
import FormSection from "./FormSection";
import FormField from "./FormField";
import SubmissionStatus from "./SubmissionStatus";

// This is the main container component for the form
// It should handle:
// - Form state management
// - Form validation
// - Form submission
// - Conditional rendering

const DEFAULT_STATE = {
  personalInfo: {
    name: "",
    email: "",
    phone: "",
  },
};

const FormContainer = () => {
  // TODO: Implement state management for the form
  // 1. Create state for form data
  // 2. Create state for form errors
  // 3. Create state for submission status
  // 4. Create state for loading state during submission

  // Example initial state structure
  const [formData, setFormData] = useState(DEFAULT_STATE);

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  // INFO: idle | null , submiting, submitted
  const [submissionStatus, setSubmissionStatus] = useState(null);

  // TODO: Implement form validation
  // Create a function to validate the form fields

  // TODO: Implement form submission
  // Create a function to handle form submission
  // This should include:
  // - Preventing default form behavior
  // - Validating the form
  // - Setting loading state
  // - Simulating an API call
  // - Handling success/error states

  const requiredField = ["personalInfo.name"];
  // Example handleSubmit function
  const handleSubmit = (e) => {
    e.preventDefault();

    // TODO: Add validation logic
    if (!formData.personalInfo.name) {
      setErrors({
        ...errors,
        name: "This field is required!",
      });
      return;
    }
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      // Simulate successful submission
      setSubmissionStatus({
        success: true,
        message: "Form submitted successfully!",
      });

      setIsSubmitting(false);
    }, 2000);
  };

  // TODO: Implement form reset
  // Create a function to reset the form after submission

  const handleReset = () => {
    // TOD: Reset form state and submission status
    setFormData(DEFAULT_STATE);
    setSubmissionStatus(null);
  };

  // TOD: Implement change handlers
  // Create functions to handle changes to form fields

  const handleChange = (e) => {
    // TOD: Update form data based on input changes
    setFormData((prev) => ({
      ...prev,
      personalInfo: {
        name: e.target.value,
      },
    }));
  };

  // If we have a submission status, show only that
  if (submissionStatus) {
    return <SubmissionStatus status={submissionStatus} onReset={handleReset} />;
  }

  return (
    <div className="form-container">
      <h2>Form Application</h2>
      <p className="form-description">
        Please fill out the form below. Fields marked with an asterisk (*) are
        required.
      </p>

      <form onSubmit={handleSubmit} noValidate>
        {/* TODO: Add form sections and fields */}
        <FormSection title="Personal Information">
          {/* Example form field */}
          <FormField
            label="Name"
            name="name"
            value={formData.personalInfo.name}
            onChange={handleChange}
            required
            error={errors.name}
            placeholder="John Doe"
          />

          {/* TODO: Add more form fields */}
        </FormSection>

        {/* TODO: Add more form sections */}

        <div className="form-actions">
          <button type="submit" className="submit-btn" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit Form"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormContainer;
