import './style/App.css';
import MenuBar from './Components/MenuBar';
import SVGComponent from './Components/SVGComponents';

function App() {

  return (
    <div className="App">
      <MenuBar />
      <div className='ftir-display'>
        <SVGComponent part='ftir' />
      </div>
    </div>
  );
}

export default App;
