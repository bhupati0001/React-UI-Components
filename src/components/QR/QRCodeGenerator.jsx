import React, { useState } from 'react';
import { QRCodeCanvas } from 'qrcode.react';

const QRCodeGenerator = () => {
    const [text, setText] = useState('');
    const [size, setSize] = useState(256);
    const [errorCorrectionLevel, setErrorCorrectionLevel] = useState('L');

    const handleTextChange = (e) => {
        setText(e.target.value);
    };

    const handleSizeChange = (e) => {
        setSize(parseInt(e.target.value, 10));
    };

    const handleErrorCorrectionLevelChange = (e) => {
        setErrorCorrectionLevel(e.target.value);
    };

    return (
        <div className="wrapper">
            <div style={{ textAlign: 'center' }}>
                <h1>QR Code Generator</h1>
                <input
                    type="text"
                    placeholder="Enter text"
                    value={text}
                    onChange={handleTextChange}
                    style={{ width: '80%', padding: '10px', marginBottom: '20px' }}
                />
                <div>
                    <label>
                        Size:
                        <input
                            type="number"
                            value={size}
                            onChange={handleSizeChange}
                            min="64"
                            max="1024"
                            style={{ marginLeft: '10px', marginRight: '20px' }}
                        />
                    </label>
                    <label>
                        Error Correction Level:
                        <select
                            value={errorCorrectionLevel}
                            onChange={handleErrorCorrectionLevelChange}
                            style={{ marginLeft: '10px' }}
                        >
                            <option value="L">L (Low)</option>
                            <option value="M">M (Medium)</option>
                            <option value="Q">Q (Quartile)</option>
                            <option value="H">H (High)</option>
                        </select>
                    </label>
                </div>
                <div style={{ marginTop: '20px' }}>
                    <QRCodeCanvas
                        value={text || ' '}
                        size={size}
                        level={errorCorrectionLevel}
                    />
                </div>
            </div>
        </div>
    );
};

export default QRCodeGenerator;
