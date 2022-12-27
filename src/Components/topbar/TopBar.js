import "./Topbar.css"
import {Search, Person,Chat, Notifications} from '@mui/icons-material/';
export default function TopBar() {
    return (
        <div className="topBarContainer">
            <div className="topBarLeft">
                <span className="logo">Bestsocial</span>
            </div>
            <div className="topBarCenter">
                <div className="searchBar">
                    <Search className="searchIcon"/>
                    <input type="text" className="searchInput" placeholder="Tìm kiếm bạn bè, bài đăng" />
                </div>
            </div>
            <div className="topBarRight">
                <div className="topBarLinks">
                    <span className="topBarLink">Trang chủ</span>
                    <span className="topBarLink">Dòng thời gian</span>
                </div>
                <div className="topBarIcon">
                    <div className="topBarIconItem">
                        <Person className="icon" />
                        <span className="topBarIconBadge">2</span>
                    </div>
                    <div className="topBarIconItem">
                        <Chat className="icon"/>
                        <span className="topBarIconBadge">3</span>
                    </div>
                    <div className="topBarIconItem">
                        <Notifications className="icon" />
                        <span className="topBarIconBadge">1</span>
                    </div>
                </div>
                <img src="/media/person/me.jpg" alt="" className="topBarImg" />
            </div>
        </div>
    )
}