import React from 'react'
import Layout from '../Layout/Layout'
import { useParams } from 'react-router-dom'
import MovieInfo from '../Components/Single/MovieInfo';
import { Movies } from '../Data/MoviesData';
import MovieCasts from '../Components/Single/MovieCasts';
import MovieRates from '../Components/Single/MovieRates';
import Titles from '../Components/Titles';
import { BsCollectionFill } from 'react-icons/bs';
import Movie from '../Components/Movie';

const SingleMovies = () => {

  const { id } = useParams();
  const movie = Movies.find((movie) => movie.name === id);
  const RelatedMovies = Movies.filter((m) => m.category === movie.category && m.name !== movie.name);
  return (
    <Layout>
      <MovieInfo movie={movie} />
      <div className='container mx-auto min-n-h-screen px-2 my-6'>
        <MovieCasts />
        <MovieRates movie={movie} />
        <div className='my-16'>
          <Titles title="Related Movies" Icon={BsCollectionFill} />
          <div className='grid sm:mt-12 mt-6 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2  grid-cols-1 gap-8'>
            {
              RelatedMovies.map((movie, index) => (
                <Movie key={index} movie={movie} />
              ))
            }
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default SingleMovies
