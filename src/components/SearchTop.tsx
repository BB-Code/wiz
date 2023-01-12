import { AiOutlineSearch, AiOutlineDown, AiOutlineMenuFold } from 'react-icons/ai'
import './SearchTop.css'

export default function SearchTop() {
    return (
            <>
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
                <div className='flex justify-between p-3'><span className='total-text'>7 篇笔记</span> <AiOutlineMenuFold size={18} /></div>
            </>
    )
}
