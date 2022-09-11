import { colors } from '../../theme/colors.theme';
import { space } from '../../theme/space.theme';

export const Checkbox = {
  baseStyle: {},
  sizes: {
    md: {
      control: {
        w: space[4],
        h: space[4],
      },
      label: {
        fontSize: 5,
        fontWeight: 5,
        lineHeight: 5,
      },
    },
  },
  variants: {
    primary: {
      control: {
        borderRadius: 'base',
        borderColor: 'grey.50',
        bg: 'grey.0',
        border: '1px',
        my: '10px',
        alignSelf: 'start',
        _invalid: {
          borderColor: 'red.70',
          bg: 'grey.0',
        },
        _groupHover: {
          _groupHover: {
            borderColor: 'purple.50',
            bg: 'purple.10',
            _invalid: {
              bg: 'red.10',
              borderColor: 'red.50',
            },
          },
        },
        _groupActive: {
          _groupActive: {
            borderColor: 'purple.90',
            bg: 'purple.30',
            boxShadow: `inset 3px 3px 0px 0px #8d86bc`,
            _invalid: {
              borderColor: 'red.90',
              bg: 'red.30',
              boxShadow: `inset 3px 3px 0px 0px #c0999f`,
            },
          },
        },
        _focus: {
          borderColor: 'purple.70',
          bg: 'purple.10',
          boxShadow: `${colors.grey[0]} 0px 0px 0px 2px, ${colors.purple[70]} 0px 0px 0px 4px, ${colors.grey[0]} 0px 0px 0px 0px`,
          _invalid: {
            borderColor: 'red.70',
            bg: 'red.10',
          },
        },
        _checked: {
          borderColor: 'purple.70',
          bg: 'purple.70',
          _invalid: {
            borderColor: 'red.70',
            bg: 'red.70',
          },
          _groupHover: {
            _groupHover: {
              borderColor: 'purple.50',
              bg: 'purple.50',
              _invalid: {
                borderColor: 'red.50',
                bg: 'red.50',
              },
            },
          },
          _groupActive: {
            _groupActive: {
              borderColor: 'purple.90',
              bg: 'purple.90',
              boxShadow: 'none',
              _invalid: {
                borderColor: 'red.90',
                bg: 'red.90',
                boxShadow: `inset 3px 3px 0px 0px #6e1419`,
              },
            },
          },
          _focus: {
            borderColor: 'purple.50',
            bg: 'purple.50',
            _groupActive: {
              boxShadow: 'none',
            },
            _invalid: {
              borderColor: 'red.50',
              bg: 'red.50',
            },
          },
          _readOnly: {
            borderColor: 'grey.50',
            bg: 'grey.50',
            color: 'grey.0',
            _focus: {
              boxShadow: 'none',
              borderColor: 'grey.50',
              bg: 'grey.50',
            },
            _groupHover: {
              _groupHover: { borderColor: 'grey.50', bg: 'grey.50' },
            },
            _groupActive: {
              _groupActive: {
                borderColor: 'grey.50',
                bg: 'grey.50',
              },
            },
          },
        },
        _indeterminate: {
          borderColor: 'purple.70',
          bg: 'purple.70',
          _groupHover: {
            _groupHover: { borderColor: 'purple.50', bg: 'purple.50' },
          },
          _groupActive: {
            _groupActive: {
              borderColor: 'purple.90',
              bg: 'purple.90',
              boxShadow: 'none',
            },
          },
          _focus: {
            borderColor: 'purple.50',
            bg: 'purple.50',
            _groupActive: {
              _groupActive: {
                boxShadow: 'none',
              },
            },
          },
        },
        _readOnly: {
          borderColor: 'grey.50',
          cursor: 'not-allowed',
          bg: 'grey.10',
          color: 'grey.0',
          _groupActive: {
            _groupActive: {
              boxShadow: 'none',
            },
          },
          _groupHover: {
            _groupHover: { borderColor: 'grey.50', bg: 'grey.10' },
          },
          _focus: {
            boxShadow: 'none',
          },
        },
      },
      label: {
        color: 'grey.90',
        py: 'mg2',
        _invalid: {
          color: 'red.70',
        },
      },
      icon: {
        color: 'grey.0',
      },
    },
  },
  // The default size and variant values
  defaultProps: {
    size: 'md',
    variant: 'primary',
  },
};
