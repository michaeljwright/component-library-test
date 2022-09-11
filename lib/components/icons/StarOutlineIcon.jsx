import React from 'react';
import { Icon } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { colorOptions } from '../../theme/colors.theme';

export const StarOutlineIcon = (props) => (
  <Icon boxSize="24px" viewBox="0 0 24 24" {...props}>
    <path
      d="M12 16.0741L8.24413 18.4938L9.23005 13.9506L5.89671 10.9383L10.3099 10.5432L12 6.2963L13.6901 10.5432L18.1033 10.9383L14.77 13.9506L15.7559 18.4938L12 16.0741ZM22 9.60494L14.8169 8.96296L12 2L9.1831 8.96296L2 9.60494L7.44601 14.5926L5.80282 22L12 18.0494L18.1972 22L16.554 14.5926L22 9.60494Z"
      fill="currentColor"
    />
  </Icon>
);

StarOutlineIcon.propTypes = {
  color: PropTypes.oneOf(colorOptions),
};
