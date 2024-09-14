import React, { useState } from "react";
import '../App.css';

function generateColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}

function Pannel() {
    const [currentColor, setColor] = useState('#ffffff');
    

    const handleChangeColor = () => {
        const newColor = generateColor();
        setColor(newColor);

        document.querySelectorAll(".colored").forEach((element) => {
            element.style.backgroundColor = newColor;
        });

        document.getElementById("color-text").value = newColor;
    }

    const handleCopyButton = () => {
        const colorValue = document.getElementById("color-text");
        colorValue.select();
        colorValue.setSelectionRange(0, 99999); 

        navigator.clipboard.writeText(colorValue.value)
            .then(() => console.log('Text copied to clipboard'))
            .catch(err => console.error('Failed to copy text: ', err));
    };

    return (
        <div className="Pannel colored">
            <div className="copy-color">
                <input type="text" id="color-text" className="colored" value={currentColor} />
                <button id="copy-button" className="colored" onClick={handleCopyButton}>📋</button>
            </div>
            <button id="new-color" className="colored" onClick={handleChangeColor}>New Color</button>
        </div>
    );
}

export default Pannel;
