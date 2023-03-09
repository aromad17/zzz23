import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import '../styles/Detail.css'

function Detail() {


  const location = useLocation();
  // useLocation으로 전달받은 스테이트를 가져올수있다.
  const { id, year, title, summary, poster, genres } = location.state;
  console.log(location);
  console.log(location.state);

  const navigate = useNavigate();
  if (location.state === undefined) {
    navigate('/'); // 홈으로 이동 즉 리다이렉트가 가능하다
  }

  return (
    <div className='detail'>
      <img src={poster} alt={title} title={title} />
      <div className='detail_data'>
        <h3 className='detail_title' style={{ backgroundColor: '#fff' }}>{title}</h3>
        <h4 className='detail_year'>{year}</h4>
        <ul className='detail_genres'>
          {genres.map((genre, index) => {
            return (
              <li className='detail_genre' key={index}>{genre}</li>
            )
          })}

        </ul>
        <p className='detail_summary'>{summary.slice(0, 180)}...</p>

      </div>
    </div >
  )
}

export default Detail