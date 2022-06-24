import Img from 'components/Atoms/img';
import QText from 'components/Atoms/text';
import { useSearch } from 'container/search';
import React from 'react';
import { useSelector } from 'react-redux';
import { Branding } from 'utilities/branding';
import confuse from '../../../assets/images/confused.svg';
import LandingPageCategories from '../landingPageCategories';
import MarketPlaceTopCategories from '../marketplaceTopCategories';
import { marketplaceError } from './enum';
import { useMarketPlaceErrorPageStylesEN } from './stylesEN';

function MarketPlaceErrorPage({
  title,
  subTitle,
  result,
  categories,
  categoryClicked
}: {
  title?: string;
  subTitle?: string;
  result?: string;
  categories?: categoryObject[];
  categoryClicked?: (id: string) => void;
}) {
  const style = useMarketPlaceErrorPageStylesEN();
  const { setSearchText } = useSearch();

  const categoryClickHandler = (id: string) => {
    categoryClicked && categoryClicked(id);
    setSearchText && setSearchText('');
  };

  return (
    <div className={style.container}>
      <Img
        source={confuse}
        container={{ display: 'flex', justifyContent: 'center', width: '100%' }}
      />
      <QText
        label={title ?? `${marketplaceError.ERROR_MAIN_TEXT} ${result}`}
        labelColor={Branding.Colors.primary.dark}
        labelStyle={{ fontSize: 24, fontWeight: 'bold' }}
      />
      {subTitle ? (
        <p className={style.text}>{subTitle}</p>
      ) : (
        <p className={style.text}>{marketplaceError.ERROR_SUB_TEXT}</p>
      )}
      <div className={style.categories}>
        <LandingPageCategories
          categories={categories}
          categoryClicked={categoryClickHandler}
        />
      </div>
    </div>
  );
}

export default MarketPlaceErrorPage;
