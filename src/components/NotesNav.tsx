import NoteList from './NoteList'
import SearchTop from './SearchTop'
import './NotesNav.css'

export default function NotesNav() {
    return (
        <div className="notes-nav">
            <div className="notes-resize-bar"></div>
            <div className="notes-resize-line"></div>
            <div className='notes-resize-save'>
                <SearchTop />
                <NoteList />
            </div>
        </div>
    )
}
