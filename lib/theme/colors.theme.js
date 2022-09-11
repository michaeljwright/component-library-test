export const colors = {
  grey: {
    90: '#182042',
    70: '#536685',
    50: '#8a9bb7',
    30: '#c6d0e2',
    10: '#eef1f6',
    0: '#ffffff',
  },
  purple: {
    90: '#220e6d',
    70: '#3b2492',
    50: '#614ab6',
    30: '#b2a6e3',
    10: '#f1edff',
  },
  red: {
    90: '#89120c',
    70: '#c6352d',
    50: '#e17f7a',
    30: '#f5bfbc',
    10: '#fceeed',
  },
  green: {
    90: '#1f521e',
    70: '#387937',
    50: '#77be76',
    30: '#c3ecbf',
    10: '#f1fcee',
  },
  brown: {
    90: '#6a2c10',
    70: '#af5a22',
    50: '#da9c58',
    30: '#f6dfb6',
    10: '#fdf8ed',
  },
  orange: {
    90: '#933600',
    70: '#d14900',
    50: '#ff5300',
    30: '#ff9862',
    10: '#ffece3',
  },
  teal: {
    90: '#007187',
    70: '#19a1bc',
    50: '#31c6e3',
    30: '#78e2f8',
    10: '#e3faff',
  },
  blue: {
    90: '#002b87',
    70: '#194cbc',
    50: '#3a6fe3',
    30: '#80a6f8',
    10: '#e6eeff',
  },
  yellow: {
    90: '#dea106',
    70: '#ffbe19',
    50: '#ffd04b',
    30: '#ffe492',
    10: '#f7f2e8',
  },
  magenta: {
    90: '#791b96',
    70: '#a3008b',
    50: '#c5007b',
    30: '#e00066',
  },
  gradient:
    'linear(to-r, purple.70, magenta.90 19.27%, magenta.70 36.46%, magenta.50 56.77%, magenta.30 75.52%, orange.50)',
};

export const colorKeys = (color) =>
  Object.keys(colors[color]).reduce(
    (values, currentValue) => ({
      ...values,
      [`${color}.${currentValue}`]: colors[color][currentValue],
    }),
    {},
  );

export const colorOptions = Object.keys(colors).reduce((acc, color) => {
  return [
    ...acc,
    ...Object.keys(colors[color]).reduce((values, num) => {
      return [...values, `${color}.${num}`];
    }, []),
  ];
}, []);
