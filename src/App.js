import logo from './logo.svg';
import './style/App.css';
import MenuBar from './Components/MenuBar';
import ElementToggle from './Components/ElementToggle'
import './Components/ElementToggle.css'
import {ReactComponent as RLLogo} from './RastonLab-Logo-Full-Rainbow-Draft.svg';

function App() {
  return (
    <div className="App">
      {/* https://blog.logrocket.com/creating-multilevel-dropdown-menu-react/ */}
      <div className='nav-area'>
        <RLLogo className='logo' width={'58'} viewBox='-10 -158 100 400'/>
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
      <ElementToggle />
    </div>
  );
}

export default App;
