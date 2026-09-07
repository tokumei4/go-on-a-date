const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const heartContainer = document.getElementById('heartContainer');

yesBtn.addEventListener('click', () => {
    alert("Yay! 🥰 Can't wait for our date! 📅❤️");
    document.querySelector('.main-title').innerText = "It's a Date! 👑❤️";
});

function moveNoButton() {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth - 40) + 20;
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight - 40) + 20;
    noBtn.style.position = 'fixed';
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
}

noBtn.addEventListener('mouseover', moveNoButton);
noBtn.addEventListener('click', moveNoButton);

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('floating-heart');
    if (Math.random() > 0.5) {
        heart.innerText = '💙';
    } else {
        heart.innerText = '💖';
    }
    heart.style.left = Math.random() * 100 + 'vw';
    const randomSize = Math.random() * 16 + 14; 
    heart.style.fontSize = randomSize + 'px';
    heartContainer.appendChild(heart);
    setTimeout(() => {
        heart.remove();
    }, 6000);
}
setInterval(createHeart, 400);
