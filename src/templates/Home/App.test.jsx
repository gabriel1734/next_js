import { Home } from '.';
import { renderTheme } from '../../styles/render-theme';

describe('Home', () => {
  it('should render correctly', () => {
    const { container } = renderTheme(<Home />);
    expect(container).toMatchSnapshot();
  });
});
