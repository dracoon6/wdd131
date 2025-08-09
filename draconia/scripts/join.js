document.addEventListener('DOMContentLoaded', () => {
    const joinForm = document.getElementById('join-form');
    const formStatus = document.getElementById('form-status');
    function getFormData(formData) {
        const data = {};
        for (const [key, value] of formData.entries()) {
            data[key] = value;
        }
        return data;
    }

    function showStatusMessage(message, isSuccess) {
        formStatus.classList.remove('success', 'error', 'hidden');
        if (isSuccess) {
            formStatus.classList.add('success');
        } else {
            formStatus.classList.add('error');
        }
        formStatus.innerHTML = `<p>${message}</p>`;
    }

    function submitApplication(applicationData) {
        let applications = JSON.parse(localStorage.getItem('guildApplications')) || [];
        if (applicationData['char-name'] && applicationData['char-class'] && applicationData['bnet-id']) {
            applicationData.timestamp = new Date().toLocaleString();
            applications.push(applicationData);
            localStorage.setItem('guildApplications', JSON.stringify(applications));
            showStatusMessage('Application submitted successfully! We will contact you soon.', true);
            joinForm.reset();
        } else {
            showStatusMessage('Please fill out all required fields.', false);
        }
    }
    joinForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const formData = new FormData(joinForm);
        const applicationData = getFormData(formData);
        submitApplication(applicationData);
    });
});
