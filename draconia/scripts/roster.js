document.addEventListener('DOMContentLoaded', () => {

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

    const raids = ["Mogu'shan Vaults", "Heart of Fear", "Terrace of Endless Spring"];
    function displayRoster() {
        const rosterList = document.getElementById('roster-list');
        rosterList.innerHTML = '';
        guildRoster.forEach(member => {
            const memberHtml = `
                <div class="roster-member">
                    <h3>${member.name}</h3>
                    <p>Class: ${member.class}</p>
                    <p>Rank: ${member.rank}</p>
                </div>
            `;
            rosterList.innerHTML += memberHtml;
        });
    }

    function handleSignup(raidName) {
        const isMember = guildRoster.some(member => member.name === 'Draco');

        if (isMember) {
            let signups = JSON.parse(localStorage.getItem('raidSignups')) || [];
            if (signups.includes(raidName)) {
                alert(`You are already signed up for ${raidName}.`);
            } else {
                signups.push(raidName);
                localStorage.setItem('raidSignups', JSON.stringify(signups));
                alert(`Successfully signed up for ${raidName}!`);
            }
        } else {
            alert('You must be a guild member to sign up for raids. Please join the guild first!');
            window.location.href = 'join.html';
        }
    }
    const signupButtons = document.querySelectorAll('.signup-btn');
    signupButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const raidName = event.target.getAttribute('data-raid');
            handleSignup(raidName);
        });
    });

    displayRoster();
});
