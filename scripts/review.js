function updateReviewCounter() {
    // Get the current count from local storage
    let reviewCount = localStorage.getItem('reviewCount');

    // If the count doesn't exist, initialize it to 0
    if (!reviewCount) {
        reviewCount = 0;
    } else {
        // Convert the stored string to a number
        reviewCount = parseInt(reviewCount, 10);
    }

    // Increment the count
    reviewCount++;

    // Save the new count back to local storage
    localStorage.setItem('reviewCount', reviewCount);

    // Display the new count on the page
    const countElement = document.getElementById('review-count');
    if (countElement) {
        countElement.textContent = reviewCount;
    }
}

// Run the function when the page loads
document.addEventListener('DOMContentLoaded', updateReviewCounter);
