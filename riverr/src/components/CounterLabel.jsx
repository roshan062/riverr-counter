import { useState } from 'react';
import PropTypes from 'prop-types';

function CounterLabel({ id, label, onUpdateLabel }) {
    const [newLabel, setNewLabel] = useState(label);

    const handleLabelChange = (event) => {
        setNewLabel(event.target.value);
    };

    const handleUpdateLabel = () => {
        onUpdateLabel(id, newLabel);
    };

    return (
        <div>
            <h3>Counter {id} Label:</h3>
            <input type="text" value={newLabel} onChange={handleLabelChange} />
            <button onClick={handleUpdateLabel}>Update Label</button>
        </div>
    );
}


CounterLabel.propTypes = {
    id: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired,
    onUpdateLabel: PropTypes.func.isRequired,
};


export default CounterLabel;
