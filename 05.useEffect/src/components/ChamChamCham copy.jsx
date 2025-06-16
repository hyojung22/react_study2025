import React, { useEffect, useState } from 'react'

/*
    실습) 참참참 게임
    1. 사용자는 공격, 컴퓨터는 수비 역할
    2. '좌', '정면', '우' 중 하나를 클릭했을 때, 사용자와 컴퓨터의 선택을 비교합니다.
        - 같은 선택일 경우 : 사용자의 승리!
        - 다른 선택일 경우 : 컴퓨터의 승리!
    3. 승리에 대한 결과를 화면에 출력합니다.

    * '좌', '정면', '우' 값은 배열로 만들어서 활용할 것!
    * 사용자, 컴퓨터, 결과값 총 3개의 state 생성할 것!
*/

const ChamChamCham = () => {
    const [user, setUser] = useState('');
    const [com, setCom] = useState('');
    const [result, setResult] = useState('');
    
    const handleClick = (e) => {
        let choices = ['좌', '정면', '우'];
        let userChoice = e.target.innerText;
        let comChoice = choices[parseInt(Math.random()*choices.length)];

        setUser(userChoice);
        setCom(comChoice);
    };

    useEffect(()=>{
        // 처음에 결과 안나오게 하려고 user와 com이 값이 있을 때만 실행되게 조건 주기
        if(user === '' || com === '') return;
        setResult(user === com ? "승리" : "패배");

    },[user,com]); // user,com 변할때마다 결과 값이 다르게 나오게 


    

    return (
        <div>
            <h1>참참참 게임!</h1>
            <h2>나의 선택 : {user}</h2>
            <h2>컴퓨터의 선택 : {com}</h2>
            {result === '' ? <h2></h2> : <h2>게임 결과 : {result}</h2>}

            {/* 
                ""(공백)은 false로 인식하기 때문에 오른쪽의 태그를 출력하지 않음
                result state에 값이 초기화되면 true로 인식하면서 결과값을 출력
                
            */}
            {result && <h2>게임 결과 : {result}</h2>}
            <div>
                <button onClick={handleClick()}>좌</button>
                <button onClick={handleClick()}>정면</button>
                <button onClick={handleClick()}>우</button>
            </div>
        </div>
    )
}

export default ChamChamCham