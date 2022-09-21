import * as Styled from './styles';
import P from 'prop-types';
import { Heading } from '../Heading';

export const LogoLink = ({ text, srcImg, link }) => {
  return (
    <Heading size="small" uppercase={true}>
      <Styled.Container href={link} target="_self">
        {srcImg && srcImg ? (
          <img src={srcImg} alt={text} />
        ) : (
          <span>{text}</span>
        )}
      </Styled.Container>
    </Heading>
  );
};

LogoLink.propTypes = {
  text: P.string.isRequired,
  srcImg: P.string,
  link: P.string.isRequired,
};
