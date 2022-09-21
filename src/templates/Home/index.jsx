import { useEffect, useRef, useState } from 'react';
import { Base } from '../Base';
import { mapData } from '../../api/map-data';
import { PageNotFound } from '../PageNotFound';
import { Loading } from '../../components/Loading';
import { GridTwoColumn } from '../../components/GridTwoColumn';
import { GridContent } from '../../components/GridContent';
import { GridText } from '../../components/GridText';
import { GridImage } from '../../components/GridImage';
import config from '../../config';

function Home() {
  const [data, setData] = useState([]);
  const isMounted = useRef(true);

  useEffect(() => {
    const pathName = null;
    const slug = pathName ? pathName : config.defaultSlug;
    const load = async () => {
      try {
        const data = await fetch(
          `http://localhost:1337/api/pages?slug=${slug}&populate=deep&pagination[pageSize]=1&sort[0]=id:desc`,
        );
        const json = await data.json();
        const pageData = mapData([json.data[0].attributes]);
        setData(pageData[0]);
      } catch (e) {
        setData(undefined);
      }
    };
    if (isMounted.current === true) {
      load();
    }
    return () => {
      isMounted.current = true;
    };
  }, []);

  useEffect(() => {
    if (data === undefined) {
      document.title = `Página não encontrada | ${config.SiteName}`;
    }

    if (data && !data.slug) {
      document.title = `Carregando... | ${config.SiteName}`;
    }

    if (data && data.slug) {
      document.title = `${data.title} | ${config.SiteName}`;
    }
  }, [data]);

  if (data === undefined) {
    return <PageNotFound />;
  }

  if (data && !data.slug) {
    return <Loading />;
  }

  const { menu, sections, footerHtml, slug } = data;
  const { links, text, link, srcImg } = menu;

  return (
    <Base
      links={links}
      footerHtml={footerHtml}
      LogoData={{ text, link, srcImg }}
    >
      {sections.map((section, index) => {
        const { component } = section;
        const key = `${slug}-${index}`;
        if (component === 'section.section-two-columns') {
          return <GridTwoColumn key={key} {...section} />;
        }
        if (component === 'section.section-content') {
          return <GridContent key={key} {...section} />;
        }
        if (component === 'section.section-grid') {
          return <GridText key={key} {...section} />;
        }
        if (component === 'section.section-grid-image') {
          return <GridImage key={key} {...section} />;
        }
      })}
    </Base>
  );
}

export default Home;
