import * as Styled from './styles';
import P from 'prop-types';
import { Menu } from '../../components/Menu';
import { Footer } from '../../components/Footer';
import { GoTop } from '../../components/GoTop';

export const Base = ({ links = [], LogoData, footerHtml, children }) => {
  return (
    <>
      <Menu links={links} logoData={LogoData} />
      <Styled.Container>
        {children}
        <Footer footerHtml={footerHtml} />
      </Styled.Container>
      <GoTop />
    </>
  );
};

Base.propTypes = {
  children: P.node,
  ...Menu.propTypes,
  footerHtml: P.string,
};
