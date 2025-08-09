function updateReviewCounter() {
    let reviewCount = localStorage.getItem('reviewCount');
    if (!reviewCount) {
        reviewCount = 0;
    } else {
        reviewCount = parseInt(reviewCount, 10);
    }
    reviewCount++;
    localStorage.setItem('reviewCount', reviewCount);
    const countElement = document.getElementById('review-count');
    if (countElement) {
        countElement.textContent = reviewCount;
    }
}

document.addEventListener('DOMContentLoaded', updateReviewCounter);
