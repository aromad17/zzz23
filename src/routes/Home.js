import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Movie from '../components/Movie';
import '../styles/Home.css';




function Home() {
  // state = {
  //   isLoading: true,
  //   movies: [],
  // }


  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);


  // componentDidMount() {
  //   // setTimeout(() => {
  //   //   this.setState(isLoading: false)
  //   // }, 6000);
  //   this.getMovies();
  // }

  useEffect(() => {
    getMovies();
  }, [])
  // async는 비동기식 함수 표기

  const getMovies = async () => {
    const {
      data: {
        data: {
          movies
        }
      }
    } =
      // ?를 넣으면 조건을 붙일 수 있다.
      await axios.get('https://yts-proxy.now.sh/list_movies.json?genre=fantasy&sort_by=like_count');
    // await 를 넣으면 axios.get을 가져올때까지 기다렸다가 실행
    // this.setState({
    //   isLoading: false,
    //   movies //movies: [movies], -> 속성과 값이 똑같으면 하나만 써도 된다.
    // })
    setIsLoading(false);
    setMovies(movies);
  }


  //const { isLoading, movies } = this.state;
  return (
    <>
      <section className='container'>
        {isLoading ?
          <div className='loader'>
            <span className='loader_text'>
              'Loading...'
            </span>
          </div>
          :
          <div className='movies'>

            {movies.map((movie, index) =>
              <Movie
                key={index}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}
              />
            )}

          </div>



        }

      </section>

    </>
  )

}

// Movie.propTypes = {
//   genres,
//   id: PropTypes : PropTypes.number.isRequired,
//   poster: PropTypes.toString.isRequired,
//   summary,
//   title,
//   year
// }

export default Home


