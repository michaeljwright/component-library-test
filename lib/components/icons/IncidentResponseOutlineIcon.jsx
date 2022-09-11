import React from 'react';
import { Icon } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { colorOptions } from '../../theme/colors.theme';

export const IncidentResponseOutlineIcon = (props) => (
  <Icon boxSize="24px" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      d="M6.5 7.906l-2.11-2.11 1.407-1.405L7.907 6.5 6.5 7.906zM13.484 2v3h-1.968V2h1.968zm7.125 3.797L18.5 7.907 17.094 6.5l2.11-2.11 1.405 1.407zM5 11.516v2.015H2v-2.015h3zm15 0h3v2.015h-3v-2.015zM6.5 21.03h12c.563 0 1.031.203 1.406.61.407.375.61.828.61 1.359H4.484c0-.531.188-.984.563-1.36.406-.406.89-.609 1.453-.609zm6-15c.781 0 1.547.157 2.297.469.75.281 1.406.703 1.969 1.266a5.465 5.465 0 011.265 1.968c.313.72.469 1.485.469 2.297V20h-12v-7.969c0-.812.14-1.578.422-2.297a6.04 6.04 0 011.312-1.968 5.466 5.466 0 011.97-1.266 5.921 5.921 0 012.296-.469zM12.5 8c-1.094 0-2.031.39-2.813 1.172-.78.781-1.171 1.734-1.171 2.86v6h7.968v-6c0-1.126-.39-2.079-1.172-2.86C14.533 8.39 13.595 8 12.5 8z"
      fill="currentColor"
    />
  </Icon>
);

IncidentResponseOutlineIcon.propTypes = {
  color: PropTypes.oneOf(colorOptions),
};
