import React from 'react';
import { Branding } from '../../../utilities/branding';
import Filter from '../../../assets/icons/filter-selected.svg';
import FilterEmpty from '../../../assets/icons/filter.svg';
import FilterGrey from '../../../assets/icons/filter-grey.svg';

import { useButtonHorizontalStylesEN } from './styleEN';
import QText from 'components/Atoms/text';
import Img from 'components/Atoms/img';
import TextButton from 'components/Atoms/textButton';

interface ButtonHorizontalProps {
  onClickFilter: () => void;
  onClickMap?: () => void;
  notification?: number;
  marketplaceLength?: any;
}

const buttonStyle = {
  width: 130,
  height: 33,
  borderRadius: 24,
  borderWidth: 1,
  borderColor: Branding.Colors.black[16],
  marginLeft: 10,
  fontSize: 16,
  lineHeight: '20px',
  fontFamily: 'Outfit',
  letterSpacing: 0,
  textTransform: 'none'
};

const labelStyle = {
  fontSize: 14,
  // fontWeight: "bold",
  marginLeft: 10,
  textTransform: 'none'
};

const ButtonHorizontal = ({
  onClickFilter,
  onClickMap,
  notification,
  marketplaceLength
}: ButtonHorizontalProps) => {
  const styles = useButtonHorizontalStylesEN();

  return (
    <div className={styles.container}>
      {notification ? (
        <div style={{ position: 'relative' }}>
          <TextButton
            button
            label="Filter"
            labelStyles={
              marketplaceLength.params?.unfilteredTotal === 0
                ? {
                    ...labelStyle,
                    color: Branding.Colors.black[16]
                  }
                : {
                    ...labelStyle,
                    color: Branding.Colors.black[86]
                  }
            }
            style={{
              width: 130,
              height: 33,
              borderRadius: 24,
              borderWidth: 1,
              borderColor: Branding.Colors.black[16],
              marginLeft: 10,
              fontSize: 16,
              lineHeight: '20px',
              fontFamily: 'Outfit',
              letterSpacing: 0,
              textTransform: 'none'
            }}
            buttonProps={{
              onClick: onClickFilter,
              disabled:
                marketplaceLength.params?.unfilteredTotal === 0 ? true : false,
              //   classes: { root: styles.button },
              startIcon: (
                <Img
                  source={
                    marketplaceLength.params?.unfilteredTotal === 0
                      ? FilterGrey
                      : Filter
                  }
                />
              )
            }}
          />
          <div className={styles.notice}>
            <QText
              label={notification <= 9 ? notification : '9+'}
              textProps={{ classes: { root: styles.notitext } }}
            />
          </div>
        </div>
      ) : (
        <TextButton
          label="Filter"
          button
          labelStyles={
            marketplaceLength.params?.unfilteredTotal === 0
              ? {
                  ...labelStyle,
                  color: Branding.Colors.black[16]
                }
              : {
                  ...labelStyle,
                  color: Branding.Colors.black[86]
                }
          }
          style={{
            width: 130,
            height: 33,
            borderRadius: 24,
            borderWidth: 1,
            borderColor: Branding.Colors.black[16],
            marginLeft: 10,
            fontSize: 16,
            lineHeight: '20px',
            fontFamily: 'Outfit',
            letterSpacing: 0,
            textTransform: 'none'
          }}
          buttonProps={{
            onClick: onClickFilter,
            classes: { root: styles.button },
            disabled:
              marketplaceLength.params?.unfilteredTotal === 0 ? true : false,
            startIcon: (
              <Img
                source={
                  marketplaceLength.params?.unfilteredTotal === 0
                    ? FilterGrey
                    : FilterEmpty
                }
              />
            )
          }}
        />
      )}

      {/* <TextButton
        label="Map View"
        button
        labelStyles={labelStyle}
        style={buttonStyle}
        buttonProps={{
          onClick: onClickMap,
          classes: { root: styles.button },
          startIcon: <Img source={World} />,
        }}
      /> */}
    </div>
  );
};

export default ButtonHorizontal;
