import { useState } from 'react';
import './App.css';
import ColorButtons from './Components/ColorButtons';

function App() {
const [bgColor, setbgColor] = useState('white')

const colors = [
  'Pink', 'Black', 'Red', 'Blue', 'Brown'
]

  return (
    <div className="App" style={{backgroundColor:bgColor}}>
      {
        colors.map(color => 
      <ColorButtons colorname={color} handleClick={setbgColor} />
        
        )

}
    </div>
  );
}

export default App;
