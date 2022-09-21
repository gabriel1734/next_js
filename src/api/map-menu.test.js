import { mapMenu, mapMenuLinks } from './map-menu';

describe('map-menu', () => {
  it('should return a predefined object without data', () => {
    const menu = mapMenu(undefined);
    expect(menu.newTab).toBe(false);
    expect(menu.text).toBe('');
    expect(menu.srcImg).toBe('');
    expect(menu.link).toBe('');
    // expect(menu.links).toEqual([]);
  });
  it('should map menu to match keys and values required', () => {
    const menu = mapMenu({
      open_in_new_tab: false,
      logo_link: '#home',
      logo_text: 'Logo',
      logo: {
        data: {
          attributes: {
            url: 'a.svg',
          },
        },
      },
      menu_links: [
        {
          id: 2,
          link_text: 'intro',
          url: '#intro',
          open_in_new_tab: false,
        },
        {
          id: 1,
          link_text: 'grid-one',
          url: '#grid-one',
          open_in_new_tab: false,
        },
      ],
    });

    expect(menu.newTab).toBe(false);
    expect(menu.srcImg).toBe('a.svg');
    expect(menu.links[0].newTab).toBe(false);
    expect(menu.links[0].children).toBe('intro');
    expect(menu.links[0].link).toBe('#intro');
  });

  it('should return an empty array if no links', () => {
    const links = mapMenuLinks();
    expect(links).toEqual([]);
  });

  it('should map links if links passed', () => {
    const links = mapMenuLinks([
      {
        id: 2,
        link_text: 'intro',
        url: '#intro',
        open_in_new_tab: false,
      },
      {},
    ]);

    expect(links[0].newTab).toBe(false);
    expect(links[0].children).toBe('intro');
    expect(links[0].link).toBe('#intro');
  });
});
