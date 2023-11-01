import './App.css';
import AlienDate from './services/AlienDate';
import AlienTime from './services/AlienTime';
import EarthDate from './services/EarthDate';
import EarthTime from './services/EarthTime';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AlienDate/>
        <AlienTime/>
        <EarthDate/>
        <EarthTime/>
      </header>
    </div>
  );
}

export default App;
