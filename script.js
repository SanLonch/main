document.addEventListener("DOMContentLoaded", function() {
    const targetDate = new Date("2024-01-01T00:00:00");

    function updateCountdown() {
        const currentDate = new Date();
        const timeDifference = targetDate - currentDate;

        const days = Math.floor(timeDifference / 1000 / 60 / 60 / 24);
        const hours = Math.floor(timeDifference / 1000 / 60 / 60) % 24;
        const minutes = Math.floor(timeDifference / 1000 / 60) % 60;
        const seconds = Math.floor(timeDifference / 1000) % 60;

        const countdownElement = document.getElementById("countdown");
        countdownElement.innerHTML = `До Нового Року залишилось: ${days} днів, ${hours} годин, ${minutes} хвилин, ${seconds} секунд`;
    }

    setInterval(updateCountdown, 1000);
});
