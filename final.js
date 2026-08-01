// Fecha en la que comenzaron su relación
const startDate = new Date("2026-02-20T00:00:00");

const counter = document.getElementById("daysTogether");

function updateCounter() {

    const now = new Date();

    const diff = now - startDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);

    const minutes = Math.floor((diff / (1000 * 60)) % 60);

    const seconds = Math.floor((diff / 1000) % 60);

    counter.innerHTML = `
        ❤️ ${days} días <br>
        🕒 ${hours} horas <br>
        ⏱️ ${minutes} minutos <br>
        ⏰ ${seconds} segundos
    `;
}

updateCounter();

setInterval(updateCounter, 1000);