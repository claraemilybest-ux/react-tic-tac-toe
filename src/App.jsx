import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './components/Button.jsx'

export default function Square() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <button className="square">1</button>
        <button className="square">2</button>
        <button className="square">3</button>
      </div>
      <div>
        <button className="square">4</button>
        <button className="square">5</button>
        <button className="square">6</button>
      </div>
      <div>
        <button className="square">7</button>
        <button className="square">8</button>
        <button className="square">9</button>
      </div>
      
    </>
  );
}


