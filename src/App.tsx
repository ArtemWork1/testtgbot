import React from 'react';
import './App.css';
import internal from "stream";
import { useState } from 'react';

function App() {
const [clickValue, setClickValue] = useState(1); // Початкова вартість кліка
const [points, setPoints] = useState(0); // Загальна кількість поінтів

const incrementCount = () => {
    setPoints(points + clickValue); // Додавання кількості поінтів відповідно до вартості кліка
};

const upgradeClick = () => {
    const upgradeCost = 10; // Вартість апгрейду кліка
    if (points >= upgradeCost) {
        setClickValue(clickValue + 1); // Збільшення вартості кліка на 1
        setPoints(points - upgradeCost); // Віднімання вартості апгрейда з загальної кількості поінтів
    } else {
        alert('Недостатньо поінтів!');
    }
};

return (
    <div>
        <h2>Клікер з можливістю апгрейду</h2>
        <p>Клікайте на кнопку, щоб отримувати поінти. Вартість кліка: {clickValue} поінтів.</p>
        <p>Ваш поточний рахунок: {points} поінтів</p>
        <button onClick={incrementCount}>Клікніть тут</button>
        <button onClick={upgradeClick}>Апгрейд кліка (10 поінтів)</button>
    </div>
);
}


export default App;
