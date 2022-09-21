import { GridTwoColumn } from '.';
import { renderTheme } from '../../styles/render-theme';
import mock from './mock';

describe('<GridTwoColumn />', () => {
  it('should match a snapshot', () => {
    const { container } = renderTheme(<GridTwoColumn {...mock} />);
    expect(container).toMatchSnapshot();
  });
});
