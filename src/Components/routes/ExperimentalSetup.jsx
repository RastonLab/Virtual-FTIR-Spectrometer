import MenuBar from '../MenuBar';
import ElementToggle from '../ElementToggle';

export default function ExperimentalSetup() {
    return (
    <div>
        <MenuBar />
        <header className='App-header'>
            <ElementToggle />
        </header>
    </div>
    );
}