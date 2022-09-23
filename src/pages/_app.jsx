import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';
import * as P from 'prop-types';
import { GlobalStyles } from '../styles/global-styles';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default MyApp;

MyApp.propTypes = {
  Component: P.elementType.isRequired,
  pageProps: P.object.isRequired,
};
