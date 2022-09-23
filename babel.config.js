module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }],
    ['@babel/preset-react', { runtime: 'automatic' }],
  ],
  plugins: [
    [
      'styled-components',
      {
        ssr: true,
        displayName: true,
        preprocess: false,
      },
    ],
  ],
  env: {
    test: {
      plugins: [
        [
          'styled-components',
          {
            ssr: false,
            displayName: false,
          },
        ],
      ],
    },
  },
};
