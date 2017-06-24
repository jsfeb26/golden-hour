import Head from '../shared/head';
import fetch from 'isomorphic-fetch';

import { GET_PHOTOS } from '../endpoints.json';

const Search = ({ photos }) => (
  <div>
    <Head />
    <div>Search</div>
    <div>
      {
        photos.map((photo) => (
          <div>
            <div>{photo.name}</div>
            <div><img src={photo.image_url} /></div>
          </div>
        ))
      }
    </div>
  </div>
);

Search.getInitialProps = async () => {
  const res = await fetch(GET_PHOTOS);
  const json = await res.json();
  return {
    photos: json.photos
  };
};

export default Search;
