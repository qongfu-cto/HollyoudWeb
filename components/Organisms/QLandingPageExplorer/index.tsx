import React from 'react';

//molecules components
import QMainSearch from '../../Molecules/QMainSearch';
import QLandingPageLogo from '../../Molecules/QLandingPageLogo';

// styling components
import useQExplorerStyle from './stylingsEN';
import MarketPlaceTopCategories from '../../Molecules/marketplaceTopCategories';
import { useDispatch } from 'react-redux';
import { useSearch } from 'container/search';
import { Grid } from '@mui/material';
import World from 'assets/icons/world-location.svg';
import Img from 'components/Atoms/img';
import { useRouter } from 'next/router';
import { propertyDummy } from 'utilities/propertyDummy';
import { useGetCategories } from 'utilities/hook/useGetCategory';
import { svgColorHandler } from 'utilities/svgHandler';
import Button from './helper';
import LandingPageCategories from 'components/Molecules/landingPageCategories';
import QText from 'components/Atoms/text';
import { Branding } from 'utilities/branding';

//sample data
// import sampleQTextButtons from './sampledata';

interface QExplorerProps {
  categories: categoryObject[];
}

/**
 * QLandingPageExplorer
 *
 * a section that allows users to navigate through app content.
 *
 *
 * @param position - modifies the positioning of a molecule component
 * @param textButtonArray - an optional property type that stores multiple text button components with different functionalities
 * @param id - an optional property that can be used as an identifier to create multiple text button components
 * @param label - an optional property that adds labels to newly created text button components
 *
 */

const QLandingPageExplorer = ({ categories }: QExplorerProps) => {
  const stylings = useQExplorerStyle();
  const dispatch = useDispatch();
  const { query } = useRouter();
  const { categoryClicked } = useSearch();
  // const [selectedSearchType, setSelectedSearchType] = useState<
  //   QTextButtonTypes | undefined
  // >(textButtonArray?.[0]?.id);

  return (
    <div className={stylings.QOrganism}>
      <div className={stylings.logoStyles}>
        <QLandingPageLogo />
        {/* <h1 className={stylings.headerText}>Seamless Connection</h1> */}

        <div className={stylings.searchBarStyles}>
          <QMainSearch
            landingPage
            categories={categories}
            width={500}
            searchPlaceHolder="Search Keywords (i.e. restaurant, gym, etc.)"
            searchBarWidth={500}
          />
        </div>
      </div>

      {/* {textButtonArray?.length && (
        <div className={stylings.propertyButtonsStyles}>
          <QSearchSpecifiers
            items={textButtonArray}
            selected={selectedSearchType as QTextButtonTypes}
          />
        </div>
      )} */}

      <LandingPageCategories
        categoryClicked={categoryClicked}
        categories={categories}
      />
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
              onClick={() => categoryClicked(category._id)}
            />
          );
        })}
      {
        //TODO map button
        // <Button title="QloudCity Map" icon={World} border={24} width={204} />
      }
    </div>
  );
};

export default QLandingPageExplorer;
