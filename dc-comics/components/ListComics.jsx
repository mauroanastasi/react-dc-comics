import React from 'react'
import ComicsCard from './comicsCard';
import comics from '../comics';

const ListComics = () => {
  <comics />
  return (
    <div>
      <h2>Lista fumetti</h2>
      <div className='comics-list'>
        <ComicsCard title={comics[0].title} image={comics[0].thumb} />
        <ComicsCard title={comics[1].title} image={comics[1].thumb} />
        <ComicsCard title={comics[2].title} image={comics[2].thumb} />
        <ComicsCard title={comics[3].title} image={comics[3].thumb} />
        <ComicsCard title={comics[4].title} image={comics[4].thumb} />
        <ComicsCard title={comics[5].title} image={comics[5].thumb} />
        <ComicsCard title={comics[6].title} image={comics[6].thumb} />
        <ComicsCard title={comics[7].title} image={comics[7].thumb} />
        <ComicsCard title={comics[8].title} image={comics[8].thumb} />
        <ComicsCard title={comics[9].title} image={comics[9].thumb} />
        <ComicsCard title={comics[10].title} image={comics[10].thumb} />
        <ComicsCard title={comics[11].title} image={comics[11].thumb} />
      </div>
    </div>
  );
}

export default ListComics;
