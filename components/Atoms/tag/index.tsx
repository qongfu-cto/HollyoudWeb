import React from 'react';
import { Chip, ChipProps, Theme } from '@mui/material';
import { createStyles, withStyles } from '@mui/styles';
import { Branding } from '../../../utilities/branding';

//import { useTagStylesEN } from "./styleEN";
interface TagProps {
  props?: ChipProps;
  tagLabel: string;
  onTagClicked: () => void;
  style?: any;
}

/**
 * Text
 *
 * A text component with optional icon
 * @param label - main text


 * */

export const Tag = ({ props, tagLabel, onTagClicked }: TagProps) => {
  // const useStylesEN = useTagStylesEN({ color: labelColor });

  return (
    <Chip
      {...props}
      label={tagLabel}
      onClick={onTagClicked}
      clickable
      color="primary"
    />
  );
};

export const CustomizesTag = ({ tagLabel, onTagClicked, props }: TagProps) => {
  // const useStylesEN = useTagStylesEN({ color: labelColor });

  return (
    <Chip
      {...props}
      label={tagLabel}
      onDelete={onTagClicked}
      clickable={true}
      variant="outlined"
    />
  );
};
