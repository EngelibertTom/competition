"use client";

import RotatedThermometer from '@/components/temperature/Temperature';
import React from 'react';
import '../../components/temperature/TemperatureBar.module.css';

const App = () => {
    return (
        <div className="App">
            <h1>Exemple de Thermomètre React</h1>
            <RotatedThermometer value={23} max={100} />
        </div>
    );
};

export default App;

