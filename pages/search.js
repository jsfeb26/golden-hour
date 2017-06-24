import Head from '../shared/head';

const Search = (props) => (
  <div>
    <Head />
    <div>Search</div>
    <div>
      {
        props.test.map((t) => (<div>{t.name}</div>))
      }
    </div>
  </div>
);

Search.getInitialProps = async () => {
  return { test: [
      { name: 'test' },
      { name: 'test2' }
    ]
  };
}

export default Search;
