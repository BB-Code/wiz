import img from '/images/templateblock.png'
import './TemplateBlock.css'
export default function TemplateBlock() {
    return (
        <div className='template-block h-60 flex justify-center items-center absolute'>
            <div className='flex flex-col'>
                <p className='template-tip'>选择模板，快速创建</p>
                <div className='flex justify-center items-center'>
                    <div className='item'>
                        <img src={img} alt="" />
                        <span>四象限工作法</span>
                    </div>
                    <div className='item'>
                        <img src={img} alt="" />
                        <span>个人工作周报</span>
                    </div>
                    <div className='item'>
                        <img src={img} alt="" />
                        <span>待办事项</span>
                    </div>
                    <div className='item'>
                        <img src={img} alt="" />
                        <span>待办事项</span>
                    </div>
                    <div className='item'>
                        <img src={img} alt="" />
                        <span>项目周报</span>
                    </div>
                    <div className='item'>
                        <img src={img} alt="" />
                        <span>会议纪要</span>
                    </div>
                    <div className='item'>
                        <img src={img} alt="" />
                        <span>全部模板</span>
                    </div>
                </div>
            </div>

        </div>
    )
}
