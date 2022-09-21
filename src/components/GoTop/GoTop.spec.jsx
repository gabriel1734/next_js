import { screen } from '@testing-library/react';
import { GoTop } from '.';
import { renderTheme } from '../../styles/render-theme';

describe('<GoTop />', () => {
  it('should render Go Top component', () => {
    renderTheme(<GoTop />);
    expect(screen.getByTitle('Go to top')).toBeInTheDocument();
  });

  it('should render Go Top component', () => {
    const { container } = renderTheme(<GoTop />);
    expect(container).toMatchInlineSnapshot(`
      .c0 {
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        z-index: 6;
        background-color: #0A1128;
        color: #fff;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
        width: 4rem;
        height: 4rem;
        opacity: 0.8;
      }

      .c1 {
        display: inline-block;
        vertical-align: middle;
        overflow: hidden;
      }

      <div>
        <a
          aria-label="Go to top"
          class="c0"
          href="#"
          title="Go to top"
        >
          <svg
            aria-hidden="true"
            class="c1"
            fill="currentColor"
            focusable="false"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 0h24v24H0V0z"
              fill="none"
            />
            <path
              d="M7.41 15.41 12 10.83l4.59 4.58L18 14l-6-6-6 6 1.41 1.41z"
            />
          </svg>
        </a>
      </div>
    `);
  });
});
