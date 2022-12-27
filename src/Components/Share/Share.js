import React from 'react';
import "./Share.css"
import {PermMediaOutlined, LabelImportantOutlined, LocationCity,EmojiEmotions} from "@mui/icons-material"
const Share = () => {
    return (
        <div className='share'>
            <div className="shareWraper">
                <div className="shareTop">
                    <img className="shareProfilePic" src="./media/person/me.jpg" alt="" />
                    <input type="text" className="shareInput" placeholder='Bạn đang nghĩ gì ?'/>
                </div>
                <hr className="shareHr" />
                <div className="shareBottom">
                    <div className="shareOptions">
                        <div className="shareOption">
                            <PermMediaOutlined htmlColor='red' className='shareIcon'/>
                            <span className="shareOptionText">Ảnh hoặc video</span>
                        </div>
                    </div>
                    <div className="shareOptions">
                        <div className="shareOption">
                            <LabelImportantOutlined htmlColor='blue' className='shareIcon'/>
                            <span className="shareOptionText">Gắn thẻ</span>
                        </div>
                    </div>
                    <div className="shareOptions">
                        <div className="shareOption">
                            <LocationCity className='shareIcon' htmlColor='green'/>
                            <span className="shareOptionText">Địa điểm</span>
                        </div>
                    </div>
                    <div className="shareOptions">
                        <div className="shareOption">
                            <EmojiEmotions htmlColor='gold' className='shareIcon'/>
                            <span className="shareOptionText">Trạng thái</span>
                        </div>
                    </div>
                    <button className='shareButton'>Share</button>
                </div>
            </div>
        </div>
    );
};

export default Share;
