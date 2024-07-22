import React, { useEffect, useState } from 'react';
import '../styles/Browse.css';
import Tmdb from '../Tmdb.js';
import MovieRow from '../components/MovieRow';
import FeaturedMovie from '../components/FeaturedMovie';
import Header from '../components/Header';

const Browse = () => {
  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);

  useEffect(()=>{
    const loadAll = async () => {
      let list = await Tmdb.getHomeList();
      setMovieList(list);

      let originals = list.filter(e=>e.slug === 'originals');
      let randomChose = Math.floor(Math.random() * (originals[0].items.results.length -1));
      let theChosenOne = originals[0].items.results[randomChose];
      let chosenInfo = await Tmdb.getMovieInfo(theChosenOne.id, 'tv');
      console.log(chosenInfo);
      setFeaturedData(chosenInfo);
    }
    loadAll();
  }, []);

  return (
    <div className="browse">

      <Header />

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
