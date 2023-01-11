import { useState } from 'react'
import { AiOutlineStar, AiFillStar, AiOutlineSwap, AiOutlineFolderOpen, AiFillFolder, AiOutlineTags, AiFillTags, AiOutlineDelete, AiFillDelete, AiOutlinePlus, AiOutlineDown } from 'react-icons/ai'
import './LeftNav.css'

export default function LeftNav() {
    let [current, setCurrent] = useState<any>([{
        key: 'collect',
        name: '我的收藏',
        active: false
    },
    {
        key: 'notes',
        name: '所有笔记',
        active: true,
        children: [
            {
                key: 1,
                name: '我的笔记',
                active: false
            }
        ],
        option: true
    }, {
        key: 'label',
        name: '标签',
        active: false,
        option: true
    }, {
        key: 'trash',
        name: '回收站',
        active: false
    }])
    let [option, setOption] = useState(false)
    const changeNav = (data: any, type: number) => {
        current.map((item: any) => {
            if (type === 1) {
                item['active'] = false
                if (item['key'] === data) {
                    item['active'] = true
                }
            }
        });
        setCurrent([...current])
    }
    const showIcon = (key: string, active: boolean) => {
        switch (key) {
            case 'collect':
                return active ? <AiFillStar size={20} className='mr-2 ' /> : <AiOutlineStar size={20} className='mr-2 ' />
            case 'notes':
                return active ? <AiFillFolder size={20} className='mr-2 ' /> : <AiOutlineFolderOpen size={20} className='mr-2 ' />
            case 'label':
                return active ? <AiFillTags size={20} className='mr-2 ' /> : <AiOutlineTags size={20} className='mr-2 ' />
            case 'trash':
                return active ? <AiFillDelete size={20} className='mr-2 ' /> : <AiOutlineDelete size={20} className='mr-2 ' />
            default:
                break;
        }
    }
    const showOption = (key: string) => {
        //console.log(key)
    }
    return (
        <div className='flex flex-col justify-center'>
            {
                current.map((item: any, index: number) => {
                    return <>
                        {
                            index === 1 && <div className='flex flex-row  justify-between items-center ml-2 mt-6 mb-3'>
                                <span className='text-xs text-708 hover:cursor-pointer'>个人笔记</span>
                                <AiOutlineSwap size={14} color='#7084A4' className='hover:cursor-pointer' />
                            </div>
                        }
                        <div className={item.active ? 'flex flex-row mb-2 items-center  hover:cursor-pointer p-2 active' : 'flex flex-row  mb-2 items-center  hover:cursor-pointer p-2'} key={item.key}
                            onMouseOver={() => {
                                showOption(item.key)
                            }}
                            onClick={() => {
                                changeNav(item.key, 1)
                            }}>
                            {
                                showIcon(item.key, item.active)
                            }
                            {
                                item.option ? <div className='flex justify-between items-center w-full'>
                                    <span className='text-sm text-extend '>{item.name}</span>
                                    <div id='option' className='flex flex-row justify-end'>
                                        <span><AiOutlinePlus size={14} color='#7084A4' className='mr-2' /></span>
                                        <span><AiOutlineDown size={14} color='#7084A4' /></span>
                                    </div>
                                </div> : <span className='text-sm text-extend '>{item.name}</span>
                            }
                        </div>
                        {
                            item.children && item.children.map((item: any) => {
                                return <div className='flex flex-row ml-10 mb-2 items-center' key={item.key} onClick={() => {
                                    changeNav(item.key, 2)
                                }}>
                                    <span className='text-sm text-extend hover:cursor-pointer'>我的笔记</span>
                                </div>
                            })
                        }
                    </>
                })
            }
        </div>
    )
}
