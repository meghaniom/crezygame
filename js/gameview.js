function loadGame() {
    const urlParams = new URLSearchParams(window.location.search);
    const gameUrl = urlParams.get('url');
    const gameId = urlParams.get('id');
    
    if (!gameUrl) {
        document.getElementById('gameContainer').innerHTML = '<p>Game not found.</p>';
        return;
    }

    const iframe = document.createElement('iframe');
    iframe.className = 'game-iframe';
    iframe.src = decodeURIComponent(gameUrl);
    iframe.setAttribute('allowfullscreen', '');
    iframe.setAttribute('frameborder', '0');
    iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');

    document.getElementById('gameContainer').appendChild(iframe);
    document.title = `Playing ${gameId || 'Game'} - Crezy Game`;
}

document.addEventListener('DOMContentLoaded', loadGame);

