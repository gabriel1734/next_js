import { GridTwoColumn } from '.';
import mock from './mock';

export default {
  title: 'GridTwoColumn',
  component: GridTwoColumn,
  args: mock,
  argTypes: {
    children: { type: 'string' },
    Background: { type: 'boolean' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <GridTwoColumn {...args} />
    </div>
  );
};
