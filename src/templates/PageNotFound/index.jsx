import { GridContent } from '../../components/GridContent';

export const PageNotFound = () => {
  const dataHtml =
    '<p>A página não foi encontrada! <a href="/">Clique aqui para voltar</a></p>';

  return <GridContent title="[ Error ] 404" html={dataHtml} />;
};
