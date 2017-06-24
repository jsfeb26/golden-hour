import Link from 'next/link'
import fetch from 'isomorphic-fetch'

const Index = (props) => (
  <div>
    <h1>Batman TV Shows</h1>
    <ul>
      {props.photos.map((show) => (
        <li key={show.id}>
          <a>{show.name}</a>
        </li>
      ))}
    </ul>
  </div>
)

Index.getInitialProps = async function() {
  const res = await fetch(`https://api.500px.com/v1/photos/search?term=golden hour&tags=goldenhour,golden hour,sunset,sunrise&geo=40.7162735,-73.9607704,13.29km&image_size=21&sort=highest_rating&consumer_key=FBd1TAlMzdqkwKoQLJsqHYJh81OMRhY5o44e0NvU`);
  const data = await res.json();
  return {
    photos: data.photos
  };
}

export default Index
