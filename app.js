document.addEventListener("DOMContentLoaded", () => {
    const overlay = document.getElementById('overlay');
    const menu = document.getElementById('menu');

    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');

    const targetDate = new Date(2026, 1, 14, 20, 0, 0);

    function updateCountdown() {
        const now = new Date();
        const diff = targetDate - now;

        if (diff <= 0) {
            overlay.classList.add('hidden');
            menu.classList.remove('blurred');
            // Usiamo il nome corretto della variabile
            clearInterval(timerInterval); 
            return;
        }

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);

        daysEl.textContent = days;
        hoursEl.textContent = hours;
        minutesEl.textContent = minutes;
        secondsEl.textContent = seconds;
    }

    const timerInterval = setInterval(updateCountdown, 1000);
    updateCountdown();
});