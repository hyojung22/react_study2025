import React from 'react'
import { useRef } from 'react'
import catImg from '../assets/img/cat.jpg';
import dogImg from '../assets/img/dog.jpeg';

const ImgChangeExam = () => {

    let keywordRef = useRef("");
    let imgRef = useRef();

    const handleClick = (e) => {
        e.preventDefault();

        if(keywordRef.current.value === '강아지') {
            console.log(imgRef);
            imgRef.current.src = dogImg;
        } else {
            imgRef.current.src = catImg;
        }

        // 입력창의 내용을 초기화하고 해당 요소를 선택하는 기능
        keywordRef.current.value = '';
        keywordRef.current.focus();
    }

    return (
        <div>
            <p>희망하는 사진이 있으신가요?</p>
            <input type="text" ref={keywordRef}/>
            <input onClick={handleClick} type="submit" value="변경!"/>
            <br/>
            <img 
                style={{height:'300px'}}
                ref={imgRef} 
                src={catImg}/>
        </div>
    )
}

export default ImgChangeExam