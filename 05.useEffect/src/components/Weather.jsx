import React, { useEffect, useState } from 'react'
import axios from 'axios'

// .evn(환경변수파일)
// - 외부에 노출되면 안되는 중요한 데이터를 보관하는 파일
//  ex) api key, url 등을 정의
// .gitignore 파일에 .env 설정까지 하면 깃허브에 올릴 때 업로드되지 않음!
const Weather = () => {

    let city = 'Gwangju';
    const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
    const WEATHER_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    const [name, setName] = useState("");
    const [temp, setTemp] = useState(0);
    const [icon, setIcon] = useState("");
    const [weather, setWeather] = useState([]); // 한꺼번에 객체로 저장

    // 비동기 통신
    const getWeatherData = async () => {

        let res = await axios.get(WEATHER_URL)
        let data = res.data;

        setWeather({
            city:data.name,
            temp:data.main.temp,
            icon:`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
        });

    }


    // const getWeatherData = () => {
    //     axios.get(WEATHER_URL)
    //     .then((res)=>res.data)
    //     .then((data)=>{
    //         console.log(data);

    //         setWeather({
    //             city:data.name,
    //             temp:data.main.temp,
    //             icon:`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    //         })

    //         let url = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    //         setName(data.name);
    //         setTemp(data.main.temp);
    //         setIcon(url);
    //     });

    // }
    
    /* async await try catch 사용 코드
    const getWeatherData = async () => {
        try {
            const res = await axios.get(WEATHER_URL);
            const data = res.data;

            setName(data.name);
            setTemp(data.main.temp);
            setIcon(`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
        } catch (error) {
            console.error("날씨 정보를 불러오는 중 오류 발생:", error);
            alert("날씨 정보를 가져오지 못했습니다. 잠시 후 다시 시도해주세요.");
        }
    }
    */

    useEffect(()=>{
        getWeatherData();
    },[])

    return (
        <div>
            <h1>2025.06.12</h1>
            {weather.icon && <img src={weather.icon} alt="날씨 아이콘" />}
            <p>현재 {weather.city}은 {weather.temp}℃ 입니다.</p>
        </div>
    )
}

export default Weather