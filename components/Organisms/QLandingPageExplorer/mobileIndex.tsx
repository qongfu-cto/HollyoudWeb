import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';

import fullLogo from 'assets/images/qloudCityNewLogo.svg';
import confused from 'assets/icons/confused.svg';

import { useSearch } from 'container/search';
import Img from 'components/Atoms/img';
import QText from 'components/Atoms/text';
import { Branding } from 'utilities/branding';
import { useQMobileExplorerStyle } from './stylingsEN';
import MarketPlaceTopCategories from '../../Molecules/marketplaceTopCategories';
import QMobileSearchBar from 'components/Atoms/QSearchBar/mobileIndex';
import { useRouter } from 'next/router';
import { fullPageWidth } from 'utilities/utils';
import Button from './helper';
import { svgColorHandler } from 'utilities/svgHandler';
import World from 'assets/icons/world-location.svg';
interface QExplorerProps {
  categories: categoryObject[];
}

/**
 * QMobileLandingPageExplorer
 *
 * Mobile Landing page component
 * @param categories
 */
const QMobileLandingPageExplorer = ({ categories }: QExplorerProps) => {
  const width = fullPageWidth();
  const { push } = useRouter();
  const styles = useQMobileExplorerStyle({ width: width ?? 100 });
  const [emptySearch, setEmptySearch] = useState(false);
  const dispatch = useDispatch();

  const {
    categoryClicked,
    searchText,
    handleClickAway,
    handleSearchAText
  } = useSearch();

  const handleEnterClicked = useCallback(() => {
    handleSearchAText(searchText);
    handleClickAway();
  }, [searchText]);

  const renderLandingContent = () => {
    return emptySearch ? (
      <>
        <div className={styles.notFoundWrapper}>
          <Img source={confused} alt="confused" style={styles.confusedImg} />
          <QText
            label={'No match!'}
            labelStyle={{
              font: 'normal normal medium 24px/32px Outfit',
              fontSize: 34,
              marginTop: 30
            }}
            labelColor={Branding.Colors.black['86']}
          />
          <QText
            label={'Your request was not found.'}
            labelStyle={{
              font: 'normal normal medium 18px/22px Outfit',
              fontSize: 20,
              marginTop: 10
            }}
            labelColor={Branding.Colors.black['86']}
          />
          <QText
            label={'Continue browsing the city'}
            labelStyle={{
              font: 'normal normal medium 18px/22px Outfit',
              fontSize: 20,
              marginTop: 40
            }}
            labelColor={Branding.Colors.black['86']}
          />
        </div>
      </>
    ) : (
      <>
        <div className={styles.logoStyles}>
          <Img source={fullLogo} alt="logo" style={styles.img} />
        </div>
        {/* <h1 className={styles.headerText}>Seamless Connection</h1> */}
        <div className={styles.searchBarStyles}>
          {/* <QMobileSearchBar
            handleSwitchMenuHandler={() => {}}
            handleEnterClicked={() => {}}
            setShowBar={() => {}}
            fullWidth={true}
            openSearchList={true}
            TopCategories={false}
            onInputClickHandler={() => {
              localStorage?.setItem('mobileTabSearch', 'true'),
                push('./search');
            }}
            placeHolderText="Use Keywords (i.e. restaurant, gym, etc.)
            "
          /> */}
        </div>
      </>
    );
  };

  return (
    <div className={styles.QOrganism}>
      {renderLandingContent()}
      <div className={styles.propertyButtonsStyles}>
        {categories
          .filter(category => category.types[0] === 'places')
          .map(category => (
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
      {categories
        .filter(category => category.types[0] === 'properties')
        .map((category, i) => {
          const icon = category.icons.find(icon => icon.type === 'default');
          return (
            <Button
              key={i}
              title="Residential Properties"
              icon={svgColorHandler(icon?.iconId.svgData) ?? World}
              border={12}
              width={300}
              onClick={() => {
                localStorage.removeItem('mobileTabSearch'),
                  categoryClicked(category._id);
              }}
            />
          );
        })}
    </div>
  );
};
export default QMobileLandingPageExplorer;
