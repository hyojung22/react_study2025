import React, { useEffect, useState } from 'react'
import axios from 'axios'

const MovieList = () => {

    let targetDt = '20250611';
    const API_KEY = import.meta.env.VITE_MOVIE_API_KEY;
    const MOVIE_URL = `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${API_KEY}&targetDt=${targetDt}`;

    const [movie, setMovie] = useState([]);

    const getMovieData = async () => {

        try {
            const res = await axios.get(MOVIE_URL);
            // data.boxOfficeResult.dailyBoxOfficeList[0]
            const data = res.data.boxOfficeResult.dailyBoxOfficeList;
            console.log("API 응답 전체:",res.data);
    
    
            let movieList = data.map((item)=>({
                rank : item.rank,
                movieNm : item.movieNm,
                openDt : item.openDt       
            }));
    
            setMovie(movieList);

            console.log('movie',movie);
        } catch (error) {
            console.error("API 호출 실패:", error);
            alert("API 호출에 실패했습니다. 일일 사용량이 초과되었을 수 있습니다.");
        }

    };

    useEffect(()=>{

        getMovieData();

    },[]);


    return (
        <div>
            <h1>영화 목록</h1>
            {movie.map((movie)=>(
                <p key={movie.movieNm}>
                    {`${movie.rank}. ${movie.movieNm} | ${movie.openDt}`}
                </p>
            ))}
        </div>
    )
}

export default MovieList