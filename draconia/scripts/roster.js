// This script handles the dynamic display of the guild roster and raid sign-ups.

// Use an event listener to ensure the DOM is fully loaded before the script runs.
document.addEventListener('DOMContentLoaded', () => {

    // =========================================================================
    // 1. Data Structures: Objects and Arrays
    // =========================================================================

    // A mock array of guild member objects to simulate a guild roster.
    // Each object has properties for the member's name, class, and rank.
    const guildRoster = [
        { name: 'Dracoon', class: 'Warrior', rank: 'Guild Master' },
        { name: 'Kaelith', class: 'Mage', rank: 'Officer' },
        { name: 'Sylvana', class: 'Hunter', rank: 'Member' },
        { name: 'Malak', class: 'Death Knight', rank: 'Member' },
        { name: 'Nyla', class: 'Druid', rank: 'Member' },
        { name: 'Talos', class: 'Paladin', rank: 'Member' },
        { name: 'Aethelred', class: 'Shaman', rank: 'Member' },
        { name: 'Zaltar', class: 'Warlock', rank: 'Member' },
    ];

    // An array to store the names of the raids.
    const raids = ["Mogu'shan Vaults", "Heart of Fear", "Terrace of Endless Spring"];

    // =========================================================================
    // 2. DOM Interaction and Functions
    // =========================================================================

    /**
     * Renders the guild roster on the page.
     * This function demonstrates DOM interaction (selecting an element and modifying it)
     * and array methods (forEach).
     */
    function displayRoster() {
        // Select the roster container element.
        const rosterList = document.getElementById('roster-list');
        // Clear any initial content like "Loading roster...".
        rosterList.innerHTML = '';

        // Iterate over each member in the guildRoster array.
        // The forEach method is a modern array method.
        guildRoster.forEach(member => {
            // Use a template literal to build the HTML string for each member.
            const memberHtml = `
                <div class="roster-member">
                    <h3>${member.name}</h3>
                    <p>Class: ${member.class}</p>
                    <p>Rank: ${member.rank}</p>
                </div>
            `;
            // Add the new HTML to the roster list.
            rosterList.innerHTML += memberHtml;
        });
    }

    /**
     * Handles the raid sign-up process.
     * This function demonstrates conditional branching and localStorage.
     * @param {string} raidName - The name of the raid to sign up for.
     */
    function handleSignup(raidName) {
        // Check if the user is a known guild member (conditional branching).
        const isMember = guildRoster.some(member => member.name === 'Draco'); // Example check

        if (isMember) {
            // Get existing sign-ups from localStorage or initialize an empty array.
            let signups = JSON.parse(localStorage.getItem('raidSignups')) || [];

            // Conditional branching: check if the user has already signed up.
            if (signups.includes(raidName)) {
                // If they have, show a message and do not add a duplicate.
                alert(`You are already signed up for ${raidName}.`);
            } else {
                // Add the new raid to the sign-ups array.
                signups.push(raidName);
                // Save the updated array back to localStorage.
                localStorage.setItem('raidSignups', JSON.stringify(signups));
                // Confirm the sign-up.
                alert(`Successfully signed up for ${raidName}!`);
            }
        } else {
            // If not a recognized member, guide them to the join page.
            alert('You must be a guild member to sign up for raids. Please join the guild first!');
            window.location.href = 'join.html'; // Redirect to join page.
        }
    }

    // =========================================================================
    // 3. Event Listeners
    // =========================================================================

    // Select all elements with the class 'signup-btn'.
    const signupButtons = document.querySelectorAll('.signup-btn');

    // Loop through the buttons and add a click event listener to each one.
    // This demonstrates listening for and reacting to events.
    signupButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            // Get the raid name from the 'data-raid' attribute.
            const raidName = event.target.getAttribute('data-raid');
            // Call the handleSignup function.
            handleSignup(raidName);
        });
    });

    // Initial call to display the roster when the page loads.
    displayRoster();
});
