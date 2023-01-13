import LeftPanel from './components/LeftPanel';
import NotesNav from './components/NotesNav';
import Workbench from './components/Workbench';

export default function App() {
    return (
        <div className='flex flex-row'>
            <LeftPanel />
            <NotesNav />
            <Workbench selected />
        </div>
    )
}
