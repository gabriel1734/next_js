import { mapMenu } from './map-menu';
import { mapSections } from './map-sections';

export const mapData = (pagesData = [{}]) => {
  return pagesData.map((data) => {
    const {
      footer = '',
      slug = '',
      title = '',
      menu = {},
      sections = [],
    } = data;

    return {
      footerHtml: footer,
      slug: slug,
      title: title,
      menu: mapMenu(menu),
      sections: mapSections(sections),
    };
  });
};
