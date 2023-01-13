import { AiOutlineUsergroupAdd } from 'react-icons/ai';
import img from '/images/no-opened-notes.png'
import Editor from './Editor';
import TemplateBlock from './TemplateBlock';
import './Workbench.css'

interface Props {
    selected?: boolean
}
export default function Workbench(props: Props) {
    const { selected } = props;
    return (
        <div id='workbench' className='workbench flex justify-center'>
            {
                selected ? <div className='flex flex-col'>
                    <div className='title-block flex items-center'>
                        <span><AiOutlineUsergroupAdd size={24} className='mr-4' /></span>
                        <input className='title-input outline-none' type="text" name="" autoFocus id="" placeholder='请输入标题' />
                    </div>
                    <Editor />
                    <TemplateBlock />
                </div> : <div className='flex justify-center items-center flex-1'><img src={img} alt='no-opened-notes' /></div>
            }

        </div>
    )
}
