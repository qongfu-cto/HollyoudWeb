import { Typography } from '@mui/material';
import { FC } from 'react';
import { PropertiesAdditionalStartProps } from '../ProfileDetails/types';

import { useProfileDetailsStartStyles } from './stylesEN';

type PropertyDescriptionProps = Pick<
  PropertiesAdditionalStartProps,
  'propertyType' | 'attributes'
>;

const PropertyDescription: FC<PropertyDescriptionProps> = ({
  propertyType,
  attributes
}) => {
  const styles = useProfileDetailsStartStyles();

  return (
    <section className={styles.propertyDescriptionContainer}>
      <Typography variant="h6" classes={{ root: styles.propertyType }}>
        {propertyType}
      </Typography>
      <span>icons</span>
    </section>
  );
};

export default PropertyDescription;
