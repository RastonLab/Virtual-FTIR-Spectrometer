import logo from './logo.svg';
import './App.css';
import MenuBar from './Components/MenuBar';

function App() {
  return (
    <div className="App">
      {/* https://blog.logrocket.com/creating-multilevel-dropdown-menu-react/ */}
      <div className='nav-area'>
        <p className='logo'>The Raston Lab: FTIR</p>
        <MenuBar />
      </div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
