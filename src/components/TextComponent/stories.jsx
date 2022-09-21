import { TextComponent } from '.';

export default {
  title: 'TextComponent',
  component: TextComponent,
  args: {
    children: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium voluptatum quia obcaecati sequi suscipit corrupti numquam? Laudantium ullam debitis harum, molestias aliquid excepturi eius commodi! Tempore odio aliquid aut quasi.`,
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <TextComponent {...args} />
    </div>
  );
};
