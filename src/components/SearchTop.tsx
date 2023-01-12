import { AiOutlineSearch, AiOutlineDown } from 'react-icons/ai'
import NoteList from './NoteList'
import './SearchTop.css'

export default function SearchTop() {
    return (
        <div className='flex flex-col'>
            <div className='search-top'>
                <div className='search-icon'>
                    <AiOutlineSearch size={20} color='#07142A' />
                </div>
                <input type="text" className='input' placeholder='搜索' name="" id="" />
                <div className='create-button'>
                    <div className='create-text'>新建笔记</div>
                    <div className='create-icon'><AiOutlineDown size={10} color='#fff' /></div>
                </div>
            </div>
            <NoteList />
        </div>
    )
}
