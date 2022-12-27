import "./SideBar.css"
import {RssFeed, ChatBubble, PlayCircleFilledOutlined, Group, Bookmark,QuestionMark, Work, Event, SchoolOutlined} from "@mui/icons-material"
const SideBar = () => {
    return (
        <div className="sideBar">
            <div className="sideBarWrapper">
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <RssFeed className="sidebarIcon"/>
                        <span className="sidebarListItemText">
                            Bảng tin
                        </span>
                    </li>
                    <li className="sidebarListItem">
                        <ChatBubble className="sidebarIcon"/>
                        <span className="sidebarListItemText">
                            Trò chuyện
                        </span>
                    </li>
                    <li className="sidebarListItem">
                        <PlayCircleFilledOutlined className="sidebarIcon"/>
                        <span className="sidebarListItemText">
                            Videos
                        </span>
                    </li>
                    <li className="sidebarListItem">
                        <Group className="sidebarIcon"/>
                        <span className="sidebarListItemText">
                            Nhóm
                        </span>
                    </li>
                    <li className="sidebarListItem">
                        <Bookmark className="sidebarIcon"/>
                        <span className="sidebarListItemText">
                            Bookmark
                        </span>
                    </li>
                    <li className="sidebarListItem">
                        <QuestionMark className="sidebarIcon"/>
                        <span className="sidebarListItemText">
                            Question
                        </span>
                    </li>
                    <li className="sidebarListItem">
                        <Work className="sidebarIcon"/>
                        <span className="sidebarListItemText">
                            Công việc
                        </span>
                    </li>
                    <li className="sidebarListItem">
                        <Event className="sidebarIcon"/>
                        <span className="sidebarListItemText">
                            Sự kiện
                        </span>
                    </li>
                    <li className="sidebarListItem">
                        <SchoolOutlined className="sidebarIcon"/>
                        <span className="sidebarListItemText">
                            Học vấn
                        </span>
                    </li>
                </ul>
                <button className="sidebarButton">Hiện thêm</button>
                <hr className="sidebarHr" />
                <ul className="sidebarFriendList">
                    <li className="sidebarFriend">
                        <img src="./media/person/1.jpg" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">Hazard</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="./media/person/2.jpg" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">K.V.Debruyne</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="./media/person/3.jpeg" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">Cristiano</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="./media/person/4.png" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">Luka Modric</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="./media/person/5.jpg" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">Raul</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="./media/person/6.jpg" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">Karim Benzema</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="./media/person/7.jpg" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">Henry</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="./media/person/8.jpg" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">Kroos</span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default SideBar;