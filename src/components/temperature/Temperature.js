// RotatedThermometer.js
import React from 'react';
import Thermometer from 'react-thermometer-component';
import '../../components/temperature/TemperatureBar.module.css'

const RotatedThermometer = ({ value, max }) => {
    return (
        <div className="thermometer">
        <Thermometer
          theme="dark"
          value="23"
          max="50"
          format="°C"
          size="large"
          height="300"
        />
      </div>
    );
};

export default RotatedThermometer;
