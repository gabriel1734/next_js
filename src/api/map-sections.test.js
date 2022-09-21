import {
  mapImageGrid,
  mapSectionContent,
  mapSections,
  mapSectionTwoColumns,
  mapTextGrid,
} from './map-sections';
import pagesFakeData from './dados.json';

describe('map-sections', () => {
  it('should render predefined section if no data', () => {
    const data = mapSections();
    expect(data).toEqual([]);
  });

  it('should render sections with a text grid', () => {
    const data = mapSections(pagesFakeData.data[0].attributes.sections);
    expect(data[0].component).toBe('section.section-two-columns');
  });

  it('should render section with an image', () => {
    const data = mapSectionTwoColumns(
      pagesFakeData.data[0].attributes.sections,
    );
    // console.log(data);
    expect(data.srcImg).toBe('');
    expect(data.background).toBe(false);
    expect(data.sectionId).toBe('');
  });

  it('should test section with no text or images', () => {
    const withNoTextOrImageGrid = mapSections([
      {
        __component: 'section.section-grid',
        text_grid: [{}],
      },
      {
        __component: 'section.section-grid',
        image_grid: [{}],
      },
    ]);
    expect(withNoTextOrImageGrid.length).toBe(2);

    const WithNoComponent = mapSections([{}]);
    expect(WithNoComponent).toEqual([{}]);
  });

  it('should map section two columns without data', () => {
    const data = mapSectionTwoColumns();
    // console.log(data);
    expect(data.component).toBe('');
    expect(data.title).toBe('');
    expect(data.text).toBe('');
    expect(data.srcImg).toBe('');
    expect(data.background).toBe(false);
    expect(data.sectionId).toBe('');
  });

  it('should map section two columns', () => {
    const data = mapSectionTwoColumns({
      id: 4,
      __component: 'section.section-two-columns',
      title: 'JANUARY BRINGS US FIREFOX 85',
      description:
        'To wrap up January, we are proud to bring you the release of Firefox 85. In this version we are bringing you support for the :focus-visible pseudo-class in CSS and associated devtools, and the complete removal of Flash support from Firefox.\n\n',
      images: {
        data: {
          id: 4,
          attributes: {
            name: 'javascript.svg',
            alternativeText: 'javascript.svg',
            caption: 'javascript.svg',
            width: null,
            height: null,
            formats: null,
            hash: 'javascript_8c37407653',
            ext: '.svg',
            mime: 'image/svg+xml',
            size: 30.31,
            url: 'a.svg',
            previewUrl: null,
            provider: 'cloudinary',
            provider_metadata: {
              public_id: 'javascript_8c37407653',
              resource_type: 'image',
            },
            createdAt: '2022-05-07T12:24:52.179Z',
            updatedAt: '2022-05-07T12:24:52.179Z',
          },
        },
      },
      metadata: {
        id: 11,
        name: 'home',
        section_id: 'home',
        background: true,
      },
    });
    // console.log(data);
    expect(data.component).toBe('section.section-two-columns');
    expect(data.title).toBe('JANUARY BRINGS US FIREFOX 85');
    expect(data.text).toBe(
      'To wrap up January, we are proud to bring you the release of Firefox 85. In this version we are bringing you support for the :focus-visible pseudo-class in CSS and associated devtools, and the complete removal of Flash support from Firefox.\n\n',
    );
    expect(data.srcImg).toBe('a.svg');
    expect(data.background).toBe(true);
    expect(data.sectionId).toBe('home');
  });

  it('should map section content', () => {
    const data = mapSectionContent({
      id: 4,
      __component: 'section.section-content',
      title: 'NEWS COVERAGE AND SOME SURPRISES',
      content:
        'The release of **Apple Silicon-based** Macs at the end of last year generated a flurry of news coverage and some surprises at the machine’s _performance_. This post details some background information on the <u>experience</u> of porting Firefox to run natively on these CPUs.\n\nWe’ll start with some background on the Mac transition and give an overview of Firefox internals that needed to know about the new architecture, before moving on to the concept of Universal Binaries.\n\nWe’ll then explain how DRM/EME works on the new platform, talk about our experience with macOS Big Sur, and discuss various updater problems we had to deal with. We’ll conclude with the release and an overview of various other improvements that are in the pipeline.\n\n',
      metadata: {
        id: 10,
        name: 'intro',
        section_id: 'intro',
        background: false,
      },
    });
    // console.log(data);
    expect(data.component).toBe('section.section-content');
    expect(data.title).toBe('NEWS COVERAGE AND SOME SURPRISES');
    expect(data.html).toBe(
      'The release of **Apple Silicon-based** Macs at the end of last year generated a flurry of news coverage and some surprises at the machine’s _performance_. This post details some background information on the <u>experience</u> of porting Firefox to run natively on these CPUs.\n\nWe’ll start with some background on the Mac transition and give an overview of Firefox internals that needed to know about the new architecture, before moving on to the concept of Universal Binaries.\n\nWe’ll then explain how DRM/EME works on the new platform, talk about our experience with macOS Big Sur, and discuss various updater problems we had to deal with. We’ll conclude with the release and an overview of various other improvements that are in the pipeline.\n\n',
    );
    expect(data.srcImg).toBe('');
    expect(data.background).toBe(false);
    expect(data.sectionId).toBe('intro');
  });

  it('should map section content without data', () => {
    const data = mapSectionContent();
    // console.log(data);
    expect(data.component).toBe('');
    expect(data.title).toBe('');
    expect(data.html).toBe('');
    expect(data.srcImg).toBe('');
    expect(data.background).toBe(false);
    expect(data.sectionId).toBe('');
  });

  it('should map grid text', () => {
    const data = mapTextGrid({
      id: 1,
      __component: 'section.section-grid',
      title: 'MY GRID',
      description: 'Uma breve descrição.\n\n',
      text_grid: [
        {
          id: 1,
          title: 'Teste 1',
          description:
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis cum delectus molestias. Atque doloribus nobis laudantium esse ut, non commodi maxime distinctio veritatis unde, reprehenderit minus ad dolores provident maiores.\n\n',
        },
        {
          id: 2,
          title: 'Teste 2',
          description:
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis cum delectus molestias. Atque doloribus nobis laudantium esse ut, non commodi maxime distinctio veritatis unde, reprehenderit minus ad dolores provident maiores.\n\n',
        },
        {
          id: 3,
          title: 'Teste 3',
          description:
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis cum delectus molestias. Atque doloribus nobis laudantium esse ut, non commodi maxime distinctio veritatis unde, reprehenderit minus ad dolores provident maiores.\n\n',
        },
      ],
      image_grid: [],
      metadata: {
        id: 2,
        name: 'grid-one',
        section_id: 'grid-one',
        background: true,
      },
    });
    // console.log(data);
    expect(data.component).toBe('section.section-grid');
    expect(data.title).toBe('MY GRID');
    expect(data.description).toBe('Uma breve descrição.\n\n');
    expect(data.background).toBe(true);
    expect(data.grid).toEqual([
      {
        id: 1,
        title: 'Teste 1',
        description:
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis cum delectus molestias. Atque doloribus nobis laudantium esse ut, non commodi maxime distinctio veritatis unde, reprehenderit minus ad dolores provident maiores.\n\n',
      },
      {
        id: 2,
        title: 'Teste 2',
        description:
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis cum delectus molestias. Atque doloribus nobis laudantium esse ut, non commodi maxime distinctio veritatis unde, reprehenderit minus ad dolores provident maiores.\n\n',
      },
      {
        id: 3,
        title: 'Teste 3',
        description:
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis cum delectus molestias. Atque doloribus nobis laudantium esse ut, non commodi maxime distinctio veritatis unde, reprehenderit minus ad dolores provident maiores.\n\n',
      },
    ]);
    expect(data.grid[0].id).toBe(1);
    expect(data.grid[0].title).toBe('Teste 1');
    expect(data.grid[0].description).toBe(
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis cum delectus molestias. Atque doloribus nobis laudantium esse ut, non commodi maxime distinctio veritatis unde, reprehenderit minus ad dolores provident maiores.\n\n',
    );
  });

  it('should map section grid text without data', () => {
    const data = mapTextGrid(undefined);

    expect(data.component).toBe('section.section-grid');
    expect(data.title).toBe('');
    expect(data.description).toBe('');
    expect(data.background).toBe(false);
    expect(data.grid).toEqual([]);
  });

  it('should map grid image', () => {
    const data = mapImageGrid({
      __component: 'section.section-grid',
      description: 'abc',
      title: 'Gallery',
      text_grid: [],
      image_grid: [
        {
          images: {
            data: [
              {
                id: 1,
                attributes: {
                  alternativeText: 'abc',
                  url: 'a.svg',
                },
              },
              {
                id: '2',
                attributes: {
                  alternativeText: 'abc',
                  url: 'a.svg',
                },
              },
              {
                id: '3',
                attributes: {
                  alternativeText: 'abc',
                  url: 'a.svg',
                },
              },
            ],
          },
        },
      ],
      metadata: {
        background: false,
        name: 'gallery',
        section_id: 'gallery',
      },
    });
    // console.log(data);
    expect(data.component).toBe('section.section-grid-image');
    expect(data.title).toBe('Gallery');
    expect(data.description).toBe('abc');
    expect(data.background).toBe(false);
    expect(data.grid).toEqual([
      {
        id: 1,
        altText: 'abc',
        srcImg: 'a.svg',
      },
      {
        id: '2',
        altText: 'abc',
        srcImg: 'a.svg',
      },
      {
        id: '3',
        altText: 'abc',
        srcImg: 'a.svg',
      },
    ]);
    expect(data.grid[0].id).toBe(1);
    expect(data.grid[0].altText).toBe('abc');
    expect(data.grid[0].srcImg).toBe('a.svg');
  });

  it('should map section image grid text without data', () => {
    const data = mapImageGrid(undefined);
    // console.log(data);
    expect(data.component).toBe('section.section-grid-image');
    expect(data.title).toBe('');
    expect(data.description).toBe('');
    expect(data.background).toBe(false);
    expect(data.grid).toEqual([]);
  });
});
