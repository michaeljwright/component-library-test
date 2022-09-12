module.exports = {
  components: './lib/main',
  outputPath: './storybook-static/playroom',
  port: 9000,
  openBrowser: true,
  //   Optional configuration
  title: 'Component Library Design System',
  frameComponent: './.playroom/FrameComponent.js',
  widths: [375, 768, 1024, 1100, 1400, 'calc(100vw - 120px)'],
  snippets: './.playroom/snippets.js',
};
