// This script handles the form submission for guild applications.

// Ensure the DOM is fully loaded before running the script.
document.addEventListener('DOMContentLoaded', () => {

    // =========================================================================
    // 1. Data Structures and DOM Selection
    // =========================================================================

    // Select the form and the element for displaying status messages.
    const joinForm = document.getElementById('join-form');
    const formStatus = document.getElementById('form-status');

    // =========================================================================
    // 2. Form Handling Functions
    // =========================================================================

    /**
     * Gathers all data from the form and returns it as an object.
     * This function demonstrates creating an object from form data.
     * @param {FormData} formData - The FormData object from the form submission.
     * @returns {object} An object containing the application data.
     */
    function getFormData(formData) {
        const data = {};
        for (const [key, value] of formData.entries()) {
            data[key] = value;
        }
        return data;
    }

    /**
     * Displays a status message to the user after form submission.
     * This function demonstrates DOM modification and the use of template literals.
     * @param {string} message - The message to display.
     * @param {boolean} isSuccess - True if the message is for success, false for error.
     */
    function showStatusMessage(message, isSuccess) {
        // Remove existing status classes
        formStatus.classList.remove('success', 'error', 'hidden');

        // Use conditional branching to determine the class and message.
        if (isSuccess) {
            formStatus.classList.add('success');
        } else {
            formStatus.classList.add('error');
        }

        // Use a template literal to set the inner HTML.
        formStatus.innerHTML = `<p>${message}</p>`;
    }

    /**
     * Submits the form data and handles local storage.
     * This is the main function demonstrating conditional branching and localStorage.
     * @param {object} applicationData - The data object from the form.
     */
    function submitApplication(applicationData) {
        // Retrieve existing applications from localStorage, or initialize an empty array.
        let applications = JSON.parse(localStorage.getItem('guildApplications')) || [];

        // Check if all required fields are filled (conditional branching).
        // This is a simple validation check.
        if (applicationData['char-name'] && applicationData['char-class'] && applicationData['bnet-id']) {
            // Add a timestamp to the application data.
            applicationData.timestamp = new Date().toLocaleString();

            // Use an array method (push) to add the new application.
            applications.push(applicationData);

            // Save the updated array back to localStorage.
            localStorage.setItem('guildApplications', JSON.stringify(applications));

            // Show a success message.
            showStatusMessage('Application submitted successfully! We will contact you soon.', true);

            // Clear the form for the next application.
            joinForm.reset();
        } else {
            // If validation fails, show an error message.
            showStatusMessage('Please fill out all required fields.', false);
        }
    }

    // =========================================================================
    // 3. Event Listeners
    // =========================================================================

    // Add a submit event listener to the form.
    // This demonstrates listening for and reacting to an event.
    joinForm.addEventListener('submit', (event) => {
        // Prevent the default form submission behavior (page reload).
        event.preventDefault();

        // Use the FormData API to get all form data.
        const formData = new FormData(joinForm);
        const applicationData = getFormData(formData);

        // Call the main function to process the application.
        submitApplication(applicationData);
    });

});
