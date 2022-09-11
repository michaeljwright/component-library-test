import React from 'react';
import { Icon } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { colorOptions } from '../../theme/colors.theme';

export const ExternalLinkIcon = (props) => (
  <Icon boxSize="24px" viewBox="0 0 24 24" {...props}>
    <path
      d="M14.0156 3V5.01562H17.5781L7.78125 14.8125L9.1875 16.2188L18.9844 6.42188V9.98438H21V3H14.0156ZM18.9844 18.9844H5.01562V5.01562H12V3H5.01562C4.45312 3 3.96875 3.20312 3.5625 3.60938C3.1875 3.98438 3 4.45312 3 5.01562V18.9844C3 19.5469 3.1875 20.0312 3.5625 20.4375C3.96875 20.8125 4.45312 21 5.01562 21H18.9844C19.5469 21 20.0156 20.8125 20.3906 20.4375C20.7969 20.0312 21 19.5469 21 18.9844V12H18.9844V18.9844Z"
      fill="currentColor"
    />
  </Icon>
);

ExternalLinkIcon.propTypes = {
  color: PropTypes.oneOf(colorOptions),
};
