function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    document.getElementById('live-clock').textContent = `${hours}:${minutes}:${seconds}`;
}
setInterval(updateClock, 1000);

function openModal(img) {
    document.getElementById('modal-image').src = img.src;
    document.getElementById('modal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

function animateText() {
    const colors = ['#FF5733', '#33FF57', '#3357FF', '#FF33A8', '#33FFF5'];
    let index = 0;
    setInterval(() => {
        document.getElementById('animated-text').style.color = colors[index];
        index = (index + 1) % colors.length;
    }, 500);
}
animateText();
