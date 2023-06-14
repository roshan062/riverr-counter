import { useState } from 'react';
import PropTypes from 'prop-types';


function CounterForm({ onAddCounter }) {
    const [startValue, setStartValue] = useState('');

    const handleStartValueChange = (event) => {
        setStartValue(event.target.value);
    };

    const handleAddCounter = () => {
        onAddCounter(parseInt(startValue));
        setStartValue('');
    };

    return (
        <div>
            <h3>Add Counter:</h3>
            <input type="number" placeholder='Simple Counter' value={startValue} onChange={handleStartValueChange} />
            <button onClick={handleAddCounter}>Clear</button>
        </div>
    );
}


CounterForm.propTypes = {
    onAddCounter: PropTypes.func.isRequired,
};

export default CounterForm;
