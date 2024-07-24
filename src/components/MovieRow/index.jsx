import './MovieRow.css';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useState } from 'react';

export default function MovieRow({ title, items }) {
  const [scrollX, setScrollX] = useState(0);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const countInicialMovies = Math.floor((window.innerWidth - 30) / 200);

  const handleLeftArrow = () => {
    setShowRightArrow(true);
    setScrollX(prevScrollX => {
      const newScrollX = prevScrollX + (200 * countInicialMovies);
      if (newScrollX >= 0) {
        setShowLeftArrow(false);
        return 0;
      }
      return newScrollX;
    });
  };

  const handleRightArrow = () => {
    const listLength = items.results.length * 200;
    setShowLeftArrow(true);
    setScrollX(prevScrollX => {
      const newScrollX = prevScrollX - (200 * countInicialMovies);
      if((window.innerWidth - listLength) > newScrollX){
        setShowRightArrow(false);
        return (window.innerWidth - listLength) - 60;
      }
      return newScrollX;
    });
  };

  return (
    <div className='movieRow'>
      <h2>{title}</h2>
      <div
      className={`movieRow--left ${showLeftArrow ? 'show-left' : ''}`} 
      onClick={handleLeftArrow}>
        <NavigateBeforeIcon style={{ fontSize: 50 }} />
      </div>

      <div className={`movieRow--right ${showRightArrow ? 'show-right' : ''}`} onClick={handleRightArrow}>
        <NavigateNextIcon style={{ fontSize: 50 }} />
      </div>

      <div className='movieRow--listarea'>
        <div className='movieRow--list' style={{
          marginLeft: scrollX
        }}>
          {items.results.length > 0 && items.results.map((item, key) => (
            <div key={key} className='movieRow--item'>
              <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
