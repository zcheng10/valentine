const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const celebration = document.getElementById('celebration');

noBtn.addEventListener('mouseenter', () => {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const btnWidth = noBtn.offsetWidth;
    const btnHeight = noBtn.offsetHeight;
    const margin = 20;

    const maxX = screenWidth - btnWidth - margin;
    const maxY = screenHeight - btnHeight - margin;

    const randomX = Math.max(margin, Math.floor(Math.random() * maxX)) - window.innerWidth/4;
    const randomY = Math.max(margin, Math.floor(Math.random() * maxY)) - window.innerHeight/4;
    //movement
    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;
});


yesBtn.addEventListener('click', () => {
    
    document.querySelector('.buttons').style.display = 'none';
    document.getElementById('question').style.display = 'none';
    document.getElementById('sad-message').style.display = 'none';
    noBtn.style.display = 'none';
    
    // Show Celebration
    celebration.classList.remove('hidden');

    // confetti
    var duration = 5 * 1000;
    var animationEnd = Date.now() + duration;
    var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min, max) {
      return Math.random() * (max - min) + min;
    }

    var interval = setInterval(function() {
      var timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      var particleCount = 50 * (timeLeft / duration);
      
      confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
      confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
    }, 250);
});

//sad
const messages = ["Please 🥺", "So mean 💔", "You hate me! 😡"];
let msgIndex = 0;
setInterval(() => {
    if (msgIndex < messages.length) {
        document.getElementById('sad-message').innerText = messages[msgIndex];
        msgIndex++;
    }
}, 5000);