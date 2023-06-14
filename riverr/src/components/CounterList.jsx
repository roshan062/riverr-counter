// import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addCounter, removeCounter } from '../redux/reducers/counterSlice';
import { useState } from 'react';
import Counter from './Counter';

function CounterList() {
    const counters = useSelector((state) => {
        console.log(state.counters);
        console.log(state.counters);
        console.log(state.counter.counters);
        return state.counter.counters;
    });
    const dispatch = useDispatch();
    const [counterName, setCounterName] = useState('');


    const handleAddCounter = () => {
        dispatch(addCounter());
    };

    const handleRemoveCounter = (id) => {
        dispatch(removeCounter({ id }));
    };

    return (
        <div>
            <input
                type="text"
                value={counterName}
                placeholder='Enter counter name'
                onChange={(e) => setCounterName(e.target.value)}
            />
            <button onClick={handleAddCounter}>Add Counter</button>
            {counters.length > 0 ? (
                counters.map((counter) => (
                    <div key={counter.id}>
                        <Counter id={counter.id} value={counter.value} name={counterName} />
                        <button onClick={() => handleRemoveCounter(counter.id)}>Remove Counter</button>
                    </div>
                ))
            ) : (
                <p>No counters available</p>
            )}
        </div>
    );
}

export default CounterList;
