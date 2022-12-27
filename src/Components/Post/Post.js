import { MoreVertOutlined } from "@mui/icons-material";
import "./Post.css"
const Post = () => {
    return (
        <div className="post">
            <div className="postWraper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img src="./media/person/1.jpg" alt="" className="postProImg" />
                        <span className="postUserName">Hazard</span>
                        <span className="postTime">5 mins ago</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVertOutlined/>
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">Hala Madrid!!!</span> <br />
                    <img className="postImg" src="./media/post/1.jpg" alt="" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img className="likeIcon" src="./media/1.png" alt="" />
                        <img className="likeIcon" src="./media/2.jpg" alt="" />
                        <span className="postlikeCount">100k peoples like this</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postComment">150k comments</span>
                    </div>
                </div>
            </div>
        </div>
        
    );
};

export default Post;