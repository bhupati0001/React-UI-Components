import React, { useState } from 'react';
import './Random-color.css'

const RandomColor = () => {
    const [colorType, setColorType] = useState("none");
    const [HexColor, setHexColor] = useState("#f8f8f8");
    const [rgbColor, setRgbColor] = useState("rgb(255,255,255)");
    const hexDigits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

    function handleGenerator() {
        let newHexColor = '#';
        for (let i = 0; i < 6; i++) {
            newHexColor += hexDigits[Math.floor(Math.random() * hexDigits.length)];
        }
        const r = Math.floor(Math.random() * 256)
        const g = Math.floor(Math.random() * 256)
        const b = Math.floor(Math.random() * 256)
        setHexColor(newHexColor);
        setRgbColor(`rgb(${r},${g},${b})`);
    }

    return (
        <div className='wrapper'>
            <select name="color-type" id="color" onChange={(e) => setColorType(e.target.value)}>
                <option value='none'>Select Color Type</option>
                <option value="RGB">RGB COLOR</option>
                <option value="HEX">HEX COLOR</option>
            </select>
            <button onClick={handleGenerator} disabled={colorType === 'none'}>RANDOMize</button>
            {
                colorType === 'HEX' && (
                    <div className='color-body' style={{ backgroundColor: HexColor }}>
                        <p>Hex Color: {HexColor} </p>
                    </div>)
            }

            {
                colorType === 'RGB' && (
                    <div className='color-body' style={{ backgroundColor: rgbColor }}>
                        <p>RGB Color: {rgbColor} </p>
                    </div>)
            }

            {
                colorType === 'none' && (
                    <div className='color-body' style={{ backgroundColor: 'transparent' }}>
                        <p>PLEASE SELECT ONE COLOR TYPE!!</p>
                    </div>)
            }

        </div>
    );
}

export default RandomColor;
