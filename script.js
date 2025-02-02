// Data di inizio 
const startDate = new Date('2024-12-03T00:00:00');  // Anno, mese, giorno, ora, minuti, secondi

// Aggiornamento contatore
function updateCounter () {
    const currentDate = new Date();
    const timeDifference = currentDate - startDate;

    // Calcolo giorni, ore, minuti, secondi
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));  // giorni
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));  // ore
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));  // minuti
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);  // secondi

    // Aggiornamento valori 
    document.getElementById('days-value').textContent = days;
    document.getElementById('hours-value').textContent = hours;
    document.getElementById('minutes-value').textContent = minutes;
    document.getElementById('seconds-value').textContent = seconds;
}

// Aggiornamento al secondo
setInterval(updateCounter, 1000);

// Gestione pulsanti
document.getElementById('timeline-btn').onclick = () => {
    window.location.href = 'timeline.html';
};

document.getElementById('crossword-btn').onclick = () => {
    window.location.href = 'crossword.html';
};

document.getElementById('letter-btn').onclick = () => {
    window.location.href = 'letter.html';
};

document.getElementById('todo-btn').onclick = () => {
    window.location.href = 'todo.html';
};

// Apparizione logo
document.addEventListener('DOMContentLoaded', () => {
    const logoContainer = document.getElementById('logo-container');
    const mainContent = document.getElementById('main-content');

    // Scroll
    document.body.style.overflow = 'hidden';

    // Animazione
    logoContainer.addEventListener('animationend', () => {
        // Logo in alto a sinistra
        logoContainer.style.transform = 'translate(0, 0) scale(0.5)';
        logoContainer.style.transition = 'transform 0.5s ease'; // Transizione morbida
        mainContent.classList.add('visible');

        // Scroll fine animazione
        document.body.style.overflow = 'auto';
    });

    // Timeout animazione
    setTimeout(function () {
        mainContent.classList.add('visible');
    }, 6000); // 6000 ms (3s per l'animazione di crescita + 3s per l'animazione di riduzione)
});

// Contatore iniziale
window.onload = function () {
    // Aggiorna contatore
    updateCounter();
};
