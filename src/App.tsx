import React from 'react'
import { FaBeer } from 'react-icons/fa';
import LeftPanel from './components/LeftPanel';
import NotesNav from './components/NotesNav';
import NotesWork from './components/NotesWork';

export default function App() {
    return (
        <div className='flex flex-row'>
            <LeftPanel />
            <NotesNav />
            <NotesWork />
        </div>
    )
}
