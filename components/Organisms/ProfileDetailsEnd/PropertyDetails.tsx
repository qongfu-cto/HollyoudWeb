import { Button, Typography } from '@mui/material';
import { FC } from 'react';
import {
  Currency,
  PropertiesAdditionalEndProps
} from '../ProfileDetails/types';
import { useProfileDetailsEndStyles } from './stylesEN';
enum propertiesPurpose {
  Rent,
  Sale,
  Personal
}
interface PropertyDetailsProps {
  pricing?: Currency;
}

const PropertyDetails: FC<PropertyDetailsProps> = ({ pricing }) => {
  const styles = useProfileDetailsEndStyles();

  const pricingCode = (code?: number) => {
    switch (code) {
      case 0:
        return `${pricing?.currency.isoCode}
      ${pricing?.options.rentAmount.toLocaleString('en-US')} /
      ${pricing?.options.rentFrequency}`;
      case 1:
        return `${pricing?.currency.isoCode}
      ${pricing?.options.saleAmount.toLocaleString('en-US')} 
     `;
      case 2:
        return '';

      default:
        '';
    }
  };

  return (
    <section className={styles.propertyDetails}>
      {pricing?.options && pricing?.options?.purpose < 2 ? (
        <Typography
          variant="h4"
          classes={{ root: styles.propertyDetailHeader }}
        >
          {pricing?.classification} Property For{' '}
          {propertiesPurpose[pricing?.options?.purpose ?? 1]}
        </Typography>
      ) : (
        ''
      )}
      <Typography variant="h4" classes={{ root: styles.propertyDetailPrice }}>
        {pricingCode(pricing?.options?.purpose)}
      </Typography>
      {/* {additionalInfo && (
                <Typography
                    variant="body2"
                    classes={{root: styles.propertyDetailPriceAdditional}}
                >
                    {additionalInfo}
                </Typography>
            )} */}
      {/* <Button
        onClick={() => {}}
        classes={{ root: styles.propertyMoreDetailButton }}
        variant="contained"
      >
        More Details
      </Button> */}
    </section>
  );
};

export default PropertyDetails;
