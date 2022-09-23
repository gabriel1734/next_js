import P from 'prop-types';
import config from '../config';
import { mapData } from '../api/map-data';
import { Home } from '../templates/Home';

export default function Index({ data = null }) {
  return <Home data={data} />;
}

export const getStaticProps = async () => {
  const raw = await fetch(config.url);
  const json = await raw.json();
  const data = mapData([json.data[0].attributes]);
  return {
    props: {
      data,
    },
  };
};

Index.propTypes = {
  data: P.array,
};
