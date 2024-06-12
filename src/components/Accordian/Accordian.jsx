import React, { useState } from 'react';
import data from './data';
import './Accordian.css';

const Accordion = () => {
    const [selected, setSelected] = useState([]);
    const [mode, setMode] = useState('single');

    const toggleItem = (itemId) => {
        setSelected((prevSelected) => {
            if (mode === 'single') {
                return itemId === prevSelected[0] ? [] : [itemId];
            } else if (mode === 'multiple') {
                const isSelected = prevSelected.includes(itemId);
                return isSelected ? prevSelected.filter((id) => id !== itemId) : [...prevSelected, itemId];
            }
            return prevSelected;
        });
    };

    const toggleMode = () => {
        setMode(mode === 'single' ? 'multiple' : 'single');
        setSelected([]);
    };

    return (
        <div className="wrapper">
            <div className="accordion-container">
                <button onClick={() => toggleMode()}>{mode === 'single' ? 'Multiple Selection' : 'Single Selection'}</button>
                <button onClick={() => setSelected([])} disabled={selected.length === 0}>
                    Clear Selections
                </button>
                {data && data.length > 0 ? (
                    data.map((dataItem) => (
                        <div key={dataItem.id}>
                            <div
                                className="title"
                                onClick={() => toggleItem(dataItem.id)}
                            >
                                <h3>{dataItem.question}</h3>
                                <span>{selected.includes(dataItem.id) ? '-' : '+'}</span>
                            </div>
                            {selected.includes(dataItem.id) && <p>{dataItem.answer}</p>}
                        </div>
                    ))
                ) : (
                    <p>data not available</p>
                )}
            </div>
        </div>
    );
};

export default Accordion;
