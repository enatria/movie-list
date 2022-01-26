// import './App.css';
import {Search, CardMovie, NavBar} from './components'

function App() {
  return (
    <div className="App" onScroll={(e) => console.log(e)}>
      {/* <h1>Moviee</h1> */}
      <NavBar />
      <CardMovie/>
    </div>
  );
}

export default App;
