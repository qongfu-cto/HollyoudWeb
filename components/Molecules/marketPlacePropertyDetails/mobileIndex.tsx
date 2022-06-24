import { Grid } from '@mui/material';
import { FC } from 'react';

import { PropertiesAdditionalStartProps } from '../../Organisms/ProfileDetails/types';
import { useMobilePropertyDetailStyles } from './stylesEN';
import PropertyTitle from 'components/Molecules/propetyTitle';
import QText from 'components/Atoms/text';
import { BorderedBlock } from 'components/Organisms/ProfileDetailsStart/Helpers';
import { isArray } from 'lodash';
import { getDetailsData, propertyDetails } from './data';
import { propertyData } from 'types/marketPlaceApiTypes';

type MobileMarketPlacePropertyDetailsProps = {
  details?: propertyData;
  parking?: {
    slots: number;
    type: string;
    _id: string;
  }[];
  iconsArray:
    | {
        name: string;
        value: string;
        path: string;
        isArray: boolean;
      }[]
    | undefined;
  type: any;
};

const MobileMarketPlacePropertyDetails: FC<MobileMarketPlacePropertyDetailsProps> = ({
  details,
  parking,
  iconsArray,
  type
}) => {
  const styles = useMobilePropertyDetailStyles();

  return (
    <BorderedBlock title="Property Details" mobile>
      <Grid container classes={{ root: styles.propertyDetailsGrid }}>
        {iconsArray?.map(
          (
            detail: {
              name: string;
              value: string;
              path: string;
              isArray: boolean;
            },
            i: number
          ) => {
            const detailsInfo = getDetailsData(details, detail.path);
            const info = detailsInfo.find(info => info.label === detail.name);
            let icon;
            if (info?.label === 'Type') {
              icon = info.icon.find(
                (icon: { name: string; src: any }) => icon.name === type
              );
            }

            return (
              <Grid item sm={12} xs={12} key={i}>
                <div className={styles.propertyDetailItem}>
                  <div className={styles.propertyDetailItemLabelBox}>
                    <PropertyTitle
                      icon={icon?.src ?? info?.icon}
                      title={detail.name}
                    />
                  </div>
                  <div className={styles.propertyDetailItemValueBox}>
                    {isArray(info?.value) ? (
                      info?.value?.map((value: any, i: number) => (
                        <QText
                          key={i}
                          label={`${value.type ?? value} ${
                            isArray(info?.value)
                              ? i < info?.value?.length - 1
                                ? ','
                                : ''
                              : ''
                          }`}
                          textProps={{
                            variant: 'subtitle2',
                            classes: { root: styles.propertyDetailValue }
                          }}
                        />
                      ))
                    ) : (
                      <QText
                        label={info?.value}
                        textProps={{
                          variant: 'subtitle2',
                          classes: { root: styles.propertyDetailValue }
                        }}
                      />
                    )}
                  </div>
                </div>
              </Grid>
            );
          }
        )}
      </Grid>
    </BorderedBlock>
  );
};

export default MobileMarketPlacePropertyDetails;
