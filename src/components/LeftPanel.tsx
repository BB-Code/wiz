import LeftNav from "./LeftNav";
import UserInfo from "./UserInfo";

export default function LeftPanel() {
    return (
        <div className='w-56 min-w-min max-w-sm bg-extend text-extend h-screen overflow-hidden'>
            <UserInfo />
            <LeftNav />
            <div className="w-56 overflow-scroll resize-x opacity-0 max-w-sm scale-y-999 min-w-panel"></div>
        </div>
    )
}
