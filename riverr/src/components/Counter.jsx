import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { increment, decrement, reset } from '../redux/reducers/counterSlice';
import { incrementByAmount, startAmount } from '../redux/reducers/counterSlice';
import PropTypes from 'prop-types';

function Counter({ id, value, name }) {
    const arr = new Map();
    arr.set(id, name);
    const [incrementAmount, setIncrementAmount] = useState(1);
    const [startValue, setStartValue] = useState(1);

    const handleIncrementByAmount = () => {
        dispatch(incrementByAmount({
            id, amount: parseInt(incrementAmount)
        }));
    };
    const handleSetValue = () => {
        dispatch(startAmount({ id, amount: parseInt(startValue) }));
    };
    const dispatch = useDispatch();

    const handleIncrement = () => {
        dispatch(increment({ id }));
    };

    const handleDecrement = () => {
        dispatch(decrement({ id }));
    };

    const handleReset = () => {
        dispatch(reset({ id }));
    };

    return (
        <div>
            <h2>Counter ID: {id}</h2>
            <h2>Counter Name: {arr.get(id)}</h2>
            <p>Value: {value}</p>
            <button onClick={handleIncrementByAmount}>Increment By Payload</button>
            <input
                type="number"
                value={incrementAmount}
                onChange={(e) => setIncrementAmount(e.target.value)}
            /><br />
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
            <button onClick={handleReset}>Reset</button><br />
            <button onClick={handleSetValue}>Set Start Value</button>
            <input
                type="number"
                value={startValue}
                onChange={(e) => setStartValue(e.target.value)}
            />
        </div>
    );
}


Counter.propTypes = {
    id: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
};
export default Counter;
