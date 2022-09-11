import React from 'react';
import { Icon } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { colorOptions } from '../../theme/colors.theme';

export const EditIcon = (props) => (
  <Icon boxSize="24px" viewBox="0 0 24 24" {...props}>
    <path
      d="M20.7188 7.03125C20.9062 6.84375 21 6.60938 21 6.32812C21 6.04688 20.9062 5.8125 20.7188 5.625L18.375 3.28125C18.1875 3.09375 17.9531 3 17.6719 3C17.3906 3 17.1562 3.09375 16.9688 3.28125L15.1406 5.10938L18.8906 8.85938L20.7188 7.03125ZM3 17.25V21H6.75L17.8125 9.9375L14.0625 6.1875L3 17.25Z"
      fill="currentColor"
    />
  </Icon>
);

EditIcon.propTypes = {
  color: PropTypes.oneOf(colorOptions),
};
