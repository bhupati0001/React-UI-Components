import React, { useRef } from 'react';

const Test = () => {
    const timerIdRef = useRef(null);

    const startTimer = () => {
        timerIdRef.current = setTimeout(() => {
            console.log('Timer expired');
        }, 5000);

        console.log(timerIdRef)
    };

    const stopTimer = () => {
        clearTimeout(timerIdRef.current);
        console.log('Timer stopped');
    };

    return (
        <div>
            <button onClick={startTimer}>Start Timer</button>
            <button onClick={stopTimer}>Stop Timer</button>
        </div>
    );
};

export default Test;
