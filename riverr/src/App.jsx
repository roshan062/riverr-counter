import { useState } from 'react';
import CounterList from './components/CounterList';
import CounterForm from './components/CounterForm';

function App() {
  const [counters, setCounters] = useState([]);

  const handleAddCounter = (startValue) => {
    const newCounter = {
      id: counters.length + 1,
      value: startValue,
    };
    setCounters([...counters, newCounter]);
  };

  return (
    <div>
      <h1>React Counting App</h1>
      <CounterForm onAddCounter={handleAddCounter} />
      <CounterList counters={counters} />
    </div>
  );
}

export default App;
