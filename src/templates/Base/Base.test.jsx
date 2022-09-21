import { container } from 'webpack';
import { Base } from '.';
import { renderTheme } from '../../styles/render-theme';
import mock from './mock';

describe('<Base />', () => {
  it('should render', () => {
    renderTheme(<Base {...mock} />);
    expect(container).toMatchSnapshot();
  });
});
