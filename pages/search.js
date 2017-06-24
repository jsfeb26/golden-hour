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
          <div key={photo.id}>
            <div>{photo.name}</div>
            <div><img src={photo.image_url} /></div>
          </div>
        ))
      }
    </div>
  </div>
);

Search.getInitialProps = async () => {
  console.log(`${GET_PHOTOS}${CONSUMER_KEY_500PX}`);
  const res = await fetch(`${GET_PHOTOS}${CONSUMER_KEY_500PX}`);
  const json = await res.json();
  return {
    photos: json.photos
  };
};

export default Search;
