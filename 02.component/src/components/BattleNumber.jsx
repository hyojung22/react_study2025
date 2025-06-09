import React, { useState } from 'react'

/*
    실습) 숫자 맞추기
    1. 버튼을 클릭했을 때, 랜덤한 숫자 생성하기(1~3)
        - Math.random()
    2. 사용자가 누른 버튼의 값과 랜덤한 숫자 비교하기
        - 정답인 경우 -> "정답입니다~!"
        - 틀린 경우 -> "땡~!"
        * 누른 버튼의 값 가져오는 방법 -> event.target.innerText (event.target.textContent)
*/
const BattleNumber = () => {
    // let random = parseInt(Math.random() * 3) + 1;
    const [select, setSelect] = useState(0);
    const [random, setRandom] = useState(0);
    const [result, setResult] = useState("");

    const handleClick = (e) => {
        const user = e.target.textContent;
        const rd = parseInt(Math.random() * 3) + 1;

        // 그냥 바로 setSelect(e.target.textContent) 해버리면 렌더링된 후 
        // 마지막에 값이 바뀌기 때문에 초기값을 보여준다
        // 그래서 javascript 변수로 값을 넣어준 후 해야 함
        setSelect(user);
        setRandom(rd);

        // 변한 값의 변수로 비교해야 함
        if(parseInt(user) === rd) {
            setResult("정답입니다~!");
        } else {
            setResult("땡~!");
        }
    }
    
    return (
        <div>
            <p>
                <button onClick={handleClick}>1</button>
                <button onClick={handleClick}>2</button>
                <button onClick={handleClick}>3</button>
            </p>
            <p>내가 입력한 숫자 : <span>{select}</span></p>
            <p>랜덤한 숫자 : <span>{random}</span></p>
            <p>{result}</p>
        </div>
    )
}

export default BattleNumber