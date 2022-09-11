import React from 'react';
import { Icon } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { colorOptions } from '../../theme/colors.theme';

export const MenuIcon = (props) => (
  <Icon boxSize="24px" viewBox="0 0 24 24" {...props}>
    <path
      d="M15.977 12c0-.558.187-1.023.561-1.395a1.986 1.986 0 011.45-.605c.562 0 1.03.202 1.404.605.405.372.608.837.608 1.395s-.203 1.039-.608 1.442c-.375.372-.842.558-1.404.558a2.072 2.072 0 01-1.45-.558A2.046 2.046 0 0115.977 12zm-5.989 0c0-.558.187-1.023.562-1.395A1.986 1.986 0 0112 10c.561 0 1.03.202 1.403.605.406.372.609.837.609 1.395s-.203 1.039-.609 1.442c-.374.372-.842.558-1.403.558a2.072 2.072 0 01-1.45-.558A2.046 2.046 0 019.988 12zM4 12c0-.558.187-1.023.561-1.395A1.986 1.986 0 016.011 10c.562 0 1.03.202 1.404.605.406.372.608.837.608 1.395s-.202 1.039-.608 1.442c-.374.372-.842.558-1.403.558a2.072 2.072 0 01-1.45-.558A2.046 2.046 0 014 12z"
      fill="currentColor"
    />
  </Icon>
);

MenuIcon.propTypes = {
  color: PropTypes.oneOf(colorOptions),
};