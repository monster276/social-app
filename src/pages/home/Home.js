import Feed from "../../Components/feed/feed";
import RightBar from "../../Components/rightBar/RightBar";
import SideBar from "../../Components/sideBar/SideBar";
import TopBar from "../../Components/topbar/TopBar";
import "./Home.css"
export default function Home() {
    return (
        <div>
            <TopBar></TopBar>
            <div className="homeContainer">
                <SideBar></SideBar>
                <Feed></Feed>
                <RightBar></RightBar>
            </div>
        </div>
    )
}