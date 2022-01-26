import logo from './logo.svg';
import './App.css';
import {Search, CardMovie} from './components'

function App() {
  return (
    <div className="App">
      <h1>Moviee</h1>
      <Search />
      <CardMovie/>
    </div>
  );
}

export default App;
