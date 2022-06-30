import './style/App.css';
import MenuBar from './Components/MenuBar';
import SVGComponent from './Components/SVGComponents';

function App() {

  return (
    <div className="App">
      <MenuBar />
        <SVGComponent part='ftir' click={() => {}} />
    </div>
  );
}

export default App;
