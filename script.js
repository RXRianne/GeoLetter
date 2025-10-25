// Countries array
const countries = [
        "United Kingdom", "Mexico", "Ireland", "Iceland", "United States of America", 
        "Chile", "Argentina", "Germany", "France", "Portugal", "China", "India", 
        "Djibouti", "Vatican City", "Russia", "Ukraine", "Spain", "Sweden", 
        "Norway", "Finland", "Denmark", "Belgium", "Netherlands", "Luxembourg", 
        "Switzerland", "Austria", "Czech Republic", "Hungary", "Slovakia", "Poland", 
        "Romania", "Bulgaria", "Greece", "Turkey", "Egypt", "South Africa", "Nigeria", 
        "Kenya", "Morocco", "Saudi Arabia", "United Arab Emirates", "Qatar", "Kuwait", 
        "Oman", "Jordan", "Lebanon", "Syria", "Iraq", "Iran", "Bangladesh", 
        "Pakistan", "Nepal", "Bhutan", "Sri Lanka", "Maldives", "Afghanistan", 
        "Kazakhstan", "Uzbekistan", "Turkmenistan", "Kyrgyzstan", "Tajikistan", 
        "Armenia", "Azerbaijan", "Georgia", "Mongolia", "Vietnam", "Thailand", 
        "Malaysia", "Singapore", "Indonesia", "Philippines", "Brunei", "Cambodia", 
        "Laos", "Myanmar", "South Korea", "North Korea", "Japan", 
        "Taiwan", "Hong Kong", "Macau", "Australia", "New Zealand", "Papua New Guinea", 
        "Fiji", "Samoa", "Tonga", "Vanuatu", "Solomon Islands", "Kiribati", "Tuvalu", 
        "Nauru", "Marshall Islands", "Palau", "Micronesia", "Saint Kitts and Nevis", 
        "Antigua and Barbuda", "Dominica", "Saint Lucia", "Saint Vincent and the Grenadines", 
        "Barbados", "Grenada", "Jamaica", "Trinidad and Tobago", "Bahamas", "Cuba", 
        "Haiti", "Dominican Republic", "Puerto Rico", "Guatemala", "Honduras", 
        "El Salvador", "Nicaragua", "Costa Rica", "Panama", "Colombia", "Venezuela", 
        "Ecuador", "Peru", "Paraguay", "Uruguay", "Bolivia", "Suriname", "Guyana", 
        "French Guiana", "Brazil", "Lithuania", "Latvia", "Estonia", "Malta", "Cyprus", 
        "Serbia", "Montenegro", "Bosnia and Herzegovina", "North Macedonia", "Albania", 
        "Kosovo", "Moldova", "Belarus", "Canada", "Italy", "Monaco", "San Marino"
];

// Home page functionality
if (document.getElementById('newRoomBtn')) {
    document.getElementById('newRoomBtn').addEventListener('click', () => {
        window.location.href = 'newroom.html';
    });
}

// New room page functionality
if (document.getElementById('startGameBtn')) {
    document.getElementById('startGameBtn').addEventListener('click', () => {
        localStorage.setItem('countryCount', '1');
        window.location.href = 'game.html';
    });
}

// Game page functionality
if (document.getElementById('countryDisplay')) {
    let count = localStorage.getItem('countryCount') || 1;
    document.getElementById('count').textContent = count;
    
    const randomCountry = countries[Math.floor(Math.random() * countries.length)];
    const lastLetter = randomCountry.slice(-1).toLowerCase();
    
    // Display country with red last letter
    document.getElementById('countryDisplay').innerHTML = 
        `Country: ${randomCountry.slice(0, -1)}<span class="last-letter">${randomCountry.slice(-1)}</span>`;
    
    // Handle form submission
    const submitAnswer = () => {
        const userInput = document.getElementById('userInput').value.trim().toLowerCase();
        
        // Validate input
        if (userInput === "") {
            alert("Please enter an answer!");
            return;
        }
        
        if (userInput[0] !== lastLetter) {
            alert(`Invalid answer! Your answer must start with "${lastLetter.toUpperCase()}"`);
            return;
        }
        
        // Valid answer - proceed
        count = parseInt(count) + 1;
        localStorage.setItem('countryCount', count.toString());
        
        if (count <= 5) {
            window.location.reload();
        } else {
            window.location.href = 'endgame.html';
        }
    };
    
    // Click event for button
    document.getElementById('submitBtn').addEventListener('click', submitAnswer);
    
    // Keypress event for Enter key
    document.getElementById('userInput').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            submitAnswer();
        }
    });
}

// End game page functionality
if (document.getElementById('homeBtn')) {
    document.getElementById('homeBtn').addEventListener('click', () => {
        window.location.href = 'index.html';
    });
}