import React from 'react';
import './App.css';
import internal from "stream";
import { useState } from 'react';

function App()  {
    const [clickValue, setClickValue] = useState(1);
    const [points, setPoints] = useState(0);

    const incrementCount = () => {
        setPoints(points + clickValue);
    };

    const upgradeClick = () => {
        const upgradeCost = 10;
        if (points >= upgradeCost) {
            setClickValue(clickValue + 1);
            setPoints(points - upgradeCost);
        } else {
            alert('Недостатньо поінтів!');
        }
    };

    return (
        <div className="clicker-container">
            <h2>Клікер з можливістю апгрейду</h2>
            <p>Клікайте на кнопку, щоб отримувати поінти. Вартість кліка: {clickValue} поінтів.</p>
            <p>Ваш поточний рахунок: {points} поінтів</p>
            <button className="click-button" onClick={incrementCount}>Клікніть тут</button>
            <button className="upgrade-button" onClick={upgradeClick}>Апгрейд кліка (10 поінтів)</button>
        </div>
    );
}



export default App;
