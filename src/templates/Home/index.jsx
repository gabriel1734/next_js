import P from 'prop-types';
import { Base } from '../Base';
import { PageNotFound } from '../PageNotFound';
import { GridTwoColumn } from '../../components/GridTwoColumn';
import { GridContent } from '../../components/GridContent';
import { GridText } from '../../components/GridText';
import { GridImage } from '../../components/GridImage';
import Head from 'next/head';
import config from '../../config';

export function Home({ data }) {
  if (!data) {
    return <PageNotFound />;
  }

  const { menu, sections, footerHtml, slug, title } = data[0];
  const { links, text, link, srcImg } = menu;
  console.log(title);
  return (
    <>
      <Base
        links={links}
        footerHtml={footerHtml}
        LogoData={{ text, link, srcImg }}
      >
        <Head>
          <title>
            {title} | {config.SiteName}
          </title>
        </Head>
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
    </>
  );
}

Home.propTypes = {
  data: P.array,
};
