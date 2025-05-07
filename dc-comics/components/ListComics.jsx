import React from 'react'
import ComicsCard from './comicsCard';
import comics from '../comics';

const ListComics = () => {
  <comics />
  return (
    <div>
      <h2>Lista fumetti</h2>
      <div className='comics-list'>
        {comics.map((comic) => (
          <ComicsCard title={comic.title} src={comic.thumb} />
        ))}
      </div>
    </div>
  );
}

export default ListComics;
