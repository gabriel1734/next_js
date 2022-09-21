import { screen } from '@testing-library/react';
import { LogoLink } from '.';
import { renderTheme } from '../../styles/render-theme';

describe('<LogoLink />', () => {
  it('should render', () => {
    renderTheme(<LogoLink link="#" text="Logo" srcImg="Logo" />);
    expect(screen.getByRole('heading')).toMatchSnapshot();
  });
  it('should  render text', () => {
    renderTheme(<LogoLink link="#" text="Logo" srcImg="" />);
    const heading = screen.getByRole('heading', { name: 'Logo' });
    expect(heading).toBeInTheDocument();
    expect(heading.firstChild).toHaveAttribute('href', '#');
    expect(heading.firstChild).toHaveAttribute('target', '_self');
  });
  it('should  render with an image logo', () => {
    renderTheme(<LogoLink link="#" text="Logo" srcImg="image.jpg" />);
    expect(screen.getByRole('img', { name: 'Logo' })).toHaveAttribute(
      'src',
      'image.jpg',
    );
  });
});
