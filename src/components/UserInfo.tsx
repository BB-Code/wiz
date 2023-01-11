import { AiOutlineSync, AiFillCrown } from 'react-icons/ai'
export default function UserInfo() {
    return (
        <div className='mt-1 mb-4 flex flex-row justify-between items-center h-10 leading-8'>
            <img src="/images/avatar.png" alt="" className='ml-4 w-8 h-8 rounded-full' />
            <div className='flex flex-row items-center'>
                <AiOutlineSync size={18} className='mr-4' />
                <AiFillCrown size={18} className='mr-2' />
                <span className='w-20 h-5 text-center leading-5 rounded-full text-extend bg-day text-xs'>剩余 97 天</span>
            </div>
        </div>
    )
}
