import React, { useEffect } from 'react';
import '../styles/Browse.css';
import Tmdb from '../Tmdb.js';

const Browse = () => {
  useEffect(()=>{
    const loadAll = async () => {
      let list = await Tmdb.getHomeList();
      console.log(list);
    }
    loadAll();
  }, []);

  return (
    <div >
      <div className="browse">
        <h1>BROWSE</h1>
      </div>
    </div>
  );
}

export default Browse;
