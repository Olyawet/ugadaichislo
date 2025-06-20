// Генерируем случайное число от 1 до 100
let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
let gameActive = true;

const guessInput = document.getElementById('guessInput');
const guessBtn = document.getElementById('guessBtn');
const message = document.getElementById('message');
const restartBtn = document.getElementById('restartBtn');

// Функция для проверки введённого числа
function checkGuess() {
    if (!gameActive) return;
    const userGuess = Number(guessInput.value);
    if (!userGuess || userGuess < 1 || userGuess > 100) {
        message.textContent = 'Пожалуйста, введите число от 1 до 100!';
        message.style.color = '#e17055';
        return;
    }
    attempts++;
    if (userGuess === secretNumber) {
        message.textContent = `Поздравляем! Вы угадали число ${secretNumber} с ${attempts} попытки.`;
        message.style.color = '#00b894';
        gameActive = false;
        guessBtn.disabled = true;
        guessInput.disabled = true;
        restartBtn.style.display = 'inline-block';
    } else if (userGuess < secretNumber) {
        message.textContent = 'Слишком мало! Попробуйте больше.';
        message.style.color = '#0984e3';
    } else {
        message.textContent = 'Слишком много! Попробуйте меньше.';
        message.style.color = '#fdcb6e';
    }
    guessInput.value = '';
    guessInput.focus();
}

// Функция для перезапуска игры
function restartGame() {
    secretNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    gameActive = true;
    message.textContent = '';
    guessBtn.disabled = false;
    guessInput.disabled = false;
    guessInput.value = '';
    guessInput.focus();
    restartBtn.style.display = 'none';
}

guessBtn.addEventListener('click', checkGuess);
guessInput.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') checkGuess();
});
restartBtn.addEventListener('click', restartGame); 