import React, { useState } from 'react'
import img from '../assets/img/gif1.gif';

const LikeCount2 = () => {
    const [like, setLike] = useState(0);

    const crease = () => {
            setLike(like+1);
        }

    const decrease = () => {
        if(like > 0) {
            setLike(like-1);
        }
    }

    return (
        <div className='box'>
            <img className='img' src={img} alt="춘식이이미지"/>
            <p>좋아요<span>{like}</span></p>
            <div className='btn'>
                {/* <button onClick={handleClick1}>❤️‍🔥</button> */}
                {/* onClick속성에 함수 실행문을 넣을 때 {()=>함수명} 형태로 정의해야 한다. */}
                <button onClick={()=>setLike(like+1)}>❤️‍🔥</button>
                <button onClick={decrease}>💔</button>
            </div>
        </div>
    )
}

export default LikeCount2