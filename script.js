// Show surprise on button click
const revealBtn = document.getElementById('revealBtn');
const surpriseSection = document.getElementById('surprise');

revealBtn.addEventListener('click', () => {
    surpriseSection.style.display = 'block';
    launchConfetti();
});

// Confetti Animation
function launchConfetti() {
    const canvas = document.getElementById('confettiCanvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const ctx = canvas.getContext('2d');
    const confettiCount = 150;
    const confetti = [];

    for (let i = 0; i < confettiCount; i++) {
        confetti.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height - canvas.height,
            r: Math.random() * 6 + 4,
            d: Math.random() * confettiCount,
            color: `hsl(${Math.random() * 360}, 100%, 50%)`,
            tilt: Math.random() * 10 - 10
        });
    }

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        confetti.forEach(c => {
            ctx.beginPath();
            ctx.lineWidth = c.r;
            ctx.strokeStyle = c.color;
            ctx.moveTo(c.x + c.tilt + c.r / 2, c.y);
            ctx.lineTo(c.x + c.tilt, c.y + c.tilt + c.r / 2);
            ctx.stroke();
        });
        update();
    }

    function update() {
        confetti.forEach(c => {
            c.y += 2;
            c.tilt += 0.1;
            if (c.y > canvas.height) {
                c.y = -10;
                c.x = Math.random() * canvas.width;
            }
        });
    }

    setInterval(draw, 20);
}
