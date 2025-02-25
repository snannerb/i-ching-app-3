// Load hexagram data from data.json
fetch('data.json')
    .then(response => response.json())
    .then(data => {
        const hexagramData = data;

        const throwCoinsButton = document.getElementById('throw-coins');
        const changingHexagramButton = document.getElementById('changing-hexagram');
        const hexagramImage = document.getElementById('hexagram-image');
        const hexagramDescription = document.getElementById('hexagram-description');
        const secondHexagramImage = document.getElementById('second-hexagram-image');
        const secondHexagramDescription = document.getElementById('second-hexagram-description');
        const secondHexagramDisplay = document.getElementById('second-hexagram-display');

        throwCoinsButton.addEventListener('click', () => {
            const randomHexagramId = Math.floor(Math.random() * 64) + 1;
            const hexagram = hexagramData[randomHexagramId.toString()];

            // Display first hexagram
            hexagramImage.src = `images/hexagram-${randomHexagramId}.png`;
            hexagramImage.style.display = 'block';
            hexagramDescription.textContent = hexagram.description;

            // Check for changing lines
            if (Object.keys(hexagram.changingLines).length > 0) {
                changingHexagramButton.style.display = 'block';
            } else {
                changingHexagramButton.style.display = 'none';
            }

            // Reset second hexagram display
            secondHexagramDisplay.style.display = 'none';
        });

        changingHexagramButton.addEventListener('click', () => {
            const randomHexagramId = Math.floor(Math.random() * 64) + 1;
            const hexagram = hexagramData[randomHexagramId.toString()];

            // Display second hexagram
            secondHexagramImage.src = `images/hexagram-${randomHexagramId}.png`;
            secondHexagramDescription.textContent = hexagram.description;
            secondHexagramDisplay.style.display = 'block';
        });
    })
    .catch(error => console.error('Error loading hexagram data:', error));