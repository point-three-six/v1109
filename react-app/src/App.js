import './App.css';
import Client from './client';
import Log from './components/Log';
import Sidebar from './components/Sidebar';

let client = new Client();

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Log Client={client} />
    </div>
  );
}


export default App;
