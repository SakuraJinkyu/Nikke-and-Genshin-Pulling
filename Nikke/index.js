document.getElementById('roll-once').addEventListener('click', () => roll(1));
document.getElementById('roll-ten').addEventListener('click', () => roll(10));

function roll(count) {
    const grid = document.getElementById('character-grid');
    grid.innerHTML = ''; // Clear previous results
    for (let i = 0; i < count; i++) {
        const character = document.createElement('img');
        character.src = 'path/to/your-character-image.jpg'; // Update with character image paths
        character.alt = 'Character';
        grid.appendChild(character);
    }
}