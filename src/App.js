import './style/App.css';
import MenuBar from './Components/MenuBar';
import SVGComponent from './Components/SVGComponents';

function App() {

  return (
    <div className="App">
      <MenuBar />
\      <div className='ftir-display'>
        <SVGComponent part='sourcebox' />
        <SVGComponent part='aperturewheel' />
        <SVGComponent part='flatrotatablemirror' />
        <SVGComponent part='globar' />
        <SVGComponent part='parabolicmirror' />
        <SVGComponent part='tungsten' />
        <SVGComponent part='detectionchamber' />
        <SVGComponent part='cdflatrotatablemirror' />
        <SVGComponent part='samplecompartment' />
        <SVGComponent part='mct' />
        <SVGComponent part='lnsb' />
        <SVGComponent part='cdflatrotatablemirror2' />
      </div>
    </div>
  );
}

export default App;
