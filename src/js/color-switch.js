const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
  ];

const bodyRef = document.querySelector('body');
const startButtonRef = document.querySelector('button[data-action = start]');
const stopButtonRef = document.querySelector('button[data-action = stop]');


const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

let setIntervalId = null;

startButtonRef.addEventListener('click', () => {
    setIntervalId = setInterval(() => {
        bodyRef.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length - 1)]
    }, 1000);
    startButtonRef.disabled = true;
});

stopButtonRef.addEventListener('click', () => {
    clearInterval(setIntervalId);
    startButtonRef.disabled = false;
});
