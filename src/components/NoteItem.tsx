import { useState } from "react";
import { AiOutlineStar, AiOutlineUsergroupAdd } from "react-icons/ai";
import './NoteItem.css'

interface Props {
    active?: boolean
}

export default function NoteItem(props: Props) {
    const { active } = props
    const [show, setShow] = useState(false)
    return (
        <>
            <div className={active ? 'note-item note-item-active' : "note-item"}
                onMouseOver={() => {
                    setShow(true)
                }}
                onMouseLeave={() => {
                    setShow(false)
                }}
            >
                <div className="flex flex-row justify-between items-center">
                    <span className="note-item-title">{'<无标题笔记>'}</span>
                    {
                        show && <span><AiOutlineStar size={20} /></span>
                    }
                </div>
                <div className="flex flex-row items-center mt-2">
                    <span><AiOutlineUsergroupAdd size={18} /></span>
                    <span className="note-item-date">4天前</span>
                </div>
            </div>

        </>
    )
}
