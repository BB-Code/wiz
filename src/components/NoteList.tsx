import NoteItem from './NoteItem'
import './NoteList.css'
export default function NoteList() {
    const data = [1, 2, 3, 4, 5, 6]
    return (
        <>
            <div className="item-container">
                {
                    data.map((item, index) => {
                        if (index === 0) {
                            return <NoteItem key={item} active />
                        } else {
                            return <NoteItem key={item} />
                        }
                    })
                }
            </div>
        </>
    )
}
