import React, { useEffect, useState } from 'react';
import '../styles/Browse.css';
import Tmdb from '../Tmdb.js';
import MovieRow from '../components/MovieRow.jsx';
import FeaturedMovie from '../components/FeaturedMovie.jsx';

const Browse = () => {
  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);

  useEffect(()=>{
    const loadAll = async () => {
      let list = await Tmdb.getHomeList();
      setMovieList(list);

      

    }
    loadAll();
  }, []);

  return (
    <div className="browse">

      {featuredData &&
      <FeaturedMovie item={featuredData} />
      }

      <section className='lists'>
        {movieList.map((item, key)=>(
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>
    </div>
  );
}

export default Browse;
