import React, { useState } from 'react'
import img1 from '../assets/img/gif1.gif';
import img2 from '../assets/img/gif2.gif';

const LikeCount = () => {
    const [emoji, setEmoji] = useState("🤍");
    const [like, setLike] = useState(0);
    const [img, setImg] = useState(img1);

    const handleClick = () => {
        if (emoji === "🤍") {
            setEmoji("❤️");
            setLike(1);
            setImg(img2);
        } else {
            setEmoji("🤍");
            setLike(0);
            setImg(img1);
        }
    }

    return (
        <div>
            <img 
            style={{width:300}}
            src={img} 
            alt={"춘식이 이미지"} />
            <p style={{fontSize:40}}>
                <span onClick={handleClick}>{emoji}</span> 좋아요 {like}개
            </p>
        </div>
    )
}

export default LikeCount