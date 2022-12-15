import { useState } from 'react';
import './App.css';
import Client from './services/Client';
import Log from './components/Log';
import Sidebar from './components/Sidebar';
import USB from './services/USB'
import USBAlert from './components/USBAlert';

let client = new Client('ws://localhost:9000');
let Scanner = new USB();

function App() {

  let [showUSBAlert, setShowUSBAlert] = useState(true);

  function closeUSBAlert(){
    setShowUSBAlert(false);
  }

  return (
    <div className="App">
      <USBAlert open={showUSBAlert} onClose={Scanner.connect} />
      <Sidebar />
      <Log Client={client} />
    </div>
  );
}


export default App;
