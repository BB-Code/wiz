import  img from  '../../public/images/no-opened-notes.png'

interface Props{
    selected?: boolean
}
export default function Workbench(props:Props) {
    const {selected} =  props;
    return (
        <div className='flex justify-center items-center flex-1'>
            {
                selected ?  <>数据</>:   <img  src={img} alt='no-opened-notes'/>
            }
            
        </div>
    )
}
