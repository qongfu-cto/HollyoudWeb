import Img from 'components/Atoms/img';
import QText from 'components/Atoms/text';
import React from 'react';
import { Branding } from 'utilities/branding';
import confuse from '../../../assets/images/confused.svg';
import MarketPlaceTopCategories from '../marketplaceTopCategories';
import { useNotFoundMobileErrorPageStylesEN } from './stylesEN';

interface NotFoundMobileErrorPageProps {
  categories?: categoryObject[];
  categoryClicked: (id: string) => void;
  title?: string;
  subTitle?: string;
}

function MarketPlaceMobileErrorPage({
  categories,
  categoryClicked,
  title,
  subTitle
}: NotFoundMobileErrorPageProps) {
  const style = useNotFoundMobileErrorPageStylesEN();
  return (
    <div className={style.container}>
      <Img source={confuse} />
      <QText
        label={title ?? 'No Match'}
        labelColor={Branding.Colors.primary.dark}
        labelStyle={{ fontSize: title ? 20 : 24, fontWeight: 'bold' }}
      />
      {subTitle ? (
        <p className={style.text}>{subTitle}</p>
      ) : (
        <p className={style.text}>
          Are you Looking for a specific place?
          {/* <br />
        You May Suggest to us */}
        </p>
      )}

      {/* <QButton
        label="suggest a place to QloudCity"
        buttonProps={{ href: '/' }}
        labelStyles={{ textTransform: 'none' }}
        style={{
          backgroundColor: Branding.Colors.primary.normal,
          marginTop: 20
        }}
      /> */}
      {categories ? (
        <>
          <QText
            label={'Continue browsing the city :'}
            labelColor={Branding.Colors.primary.dark}
            labelStyle={{ fontSize: 18, fontWeight: 'bold', marginTop: 20 }}
          />
          <div className={style.categoriesContainer}>
            {categories?.map(category => (
              <MarketPlaceTopCategories
                icons={category.icons}
                key={category._id}
                label={category.name}
                onClick={() => {
                  localStorage.removeItem('mobileTabSearch'),
                    categoryClicked(category._id);
                }}
              />
            ))}
          </div>
        </>
      ) : null}
    </div>
  );
}

export default MarketPlaceMobileErrorPage;
