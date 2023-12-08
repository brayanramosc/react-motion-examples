import { useState } from 'react';
import { motion } from 'framer-motion';
import './App.css';

const variants = {
  odd: {
    backgroundColor: '#222',
    color: '#ccc'
  },
  even: {
    backgroundColor: '#bbb',
    color: '#000'
  }
}

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <motion.div
        className='box'
        variants={variants}
        animate={counter % 2 === 0 ? 'even' : 'odd'}
        drag='x'
        dragDirectionLock
        dragConstraints={{
          top: -50,
          left: -50,
          right: 50,
          bottom: 50
        }}
      >
        {counter}
      </motion.div>
      <button onClick={() => setCounter(counter => counter + 1)}>
        Add
      </button>
    </div>
  )
}

export default App;
