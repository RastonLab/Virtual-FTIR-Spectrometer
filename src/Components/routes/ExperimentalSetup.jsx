import {ReactComponent as RLLogo} from '../../RastonLab-Logo-Full-Rainbow-Draft.svg';
import MenuBar from '../MenuBar';
import ElementToggle from '../ElementToggle';

export default function ExperimentalSetup() {
    return (
    <div>
        <div className='nav-area'>
            <RLLogo className='logo' width={'58'} viewBox='-10 -158 100 400'/>
            <p className='logo'>The Raston Lab: FTIR</p>
            <MenuBar />
        </div>
        <header className='App-header'>
            <ElementToggle />
        </header>
    </div>
    );
}