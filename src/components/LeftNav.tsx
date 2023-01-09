import React from 'react'
import { AiOutlineStar, AiOutlineEllipsis, AiOutlineFolderOpen, AiOutlineTags, AiOutlineDelete } from 'react-icons/ai'
export default function LeftNav() {
    return (
        <div className='flex flex-col'>
            <div className='flex flex-row ml-4 mb-6 items-center'>
                <AiOutlineStar size={20} className='mr-2 hover:cursor-pointer' />
                <span className='text-sm text-extend hover:cursor-pointer'>我的收藏</span>
            </div>
            <div className='flex flex-row m-4 justify-between items-center'>
                <span className='text-xs text-708 hover:cursor-pointer'>个人笔记</span>
                <AiOutlineEllipsis size={20} color='#7084A4' className='hover:cursor-pointer' />
            </div>
            <div className='flex flex-row ml-4 mb-6 items-center'>
                <AiOutlineFolderOpen size={20} className='mr-2 hover:cursor-pointer' />
                <span className='text-sm text-extend hover:cursor-pointer'>所有笔记</span>
            </div>
            <div className='flex flex-row ml-10 mb-6 items-center'>
                <span className='text-sm text-extend hover:cursor-pointer'>我的笔记</span>
            </div>
            <div className='flex flex-row ml-4 mb-6 items-center'>
                <AiOutlineTags size={20} className='mr-2 hover:cursor-pointer' />
                <span className='text-sm text-extend hover:cursor-pointer'>标签</span>
            </div>
            <div className='flex flex-row ml-4 mb-6 items-center'>
                <AiOutlineDelete size={20} className='mr-2 hover:cursor-pointer' />
                <span className='text-sm text-extend hover:cursor-pointer'>回收站</span>
            </div>
        </div>
    )
}
