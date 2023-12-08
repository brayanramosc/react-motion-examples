import './App.css';
import { motion } from 'framer-motion';

function App() {
  return (
    <div>
      <motion.div
        className='box'
        // initial={{ scale: 1 }}
        // animate={{ scale: 2, rotate: 45 }}
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 270, 270, 0],
          borderRadius: ["20%", "20%", "50%", "50%", "20%"]
        }}
        transition={{ duration: 1 }}
      />

      {/* <motion.h1
        initial={{
          color: '#ff0000'
        }}
        transition={{ duration: 5 }}
        animate={{
          y: 100,
          color: '#000000'
        }}
      >
        Hallo Welt!
      </motion.h1> */}
    </div>
  )
}

export default App;
