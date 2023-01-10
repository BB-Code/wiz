import LeftNav from "./LeftNav";
import UserInfo from "./UserInfo";
import './LeftPanel.css';

export default function LeftPanel() {
    return (
        <div className="left-panel">
            <div className="resize-bar"></div>
            <div className="resize-line"></div>
            <div className='resize-save'>
                <UserInfo />
                <LeftNav />
            </div>
        </div>
    )
}
