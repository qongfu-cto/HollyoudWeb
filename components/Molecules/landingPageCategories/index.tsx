import { Grid } from '@mui/material';
import React from 'react';
import MarketPlaceTopCategories from '../marketplaceTopCategories';
import { useLandingPageCategoriesStyle } from './style';

function LandingPageCategories({
  categories,
  categoryClicked
}: {
  categories?: categoryObject[];
  categoryClicked?: (id: string) => void;
}) {
  const style = useLandingPageCategoriesStyle();

  const onCategoryClicked = (id: string) => {
    categoryClicked && categoryClicked(id);
  };
  return (
    <div className={style.categoriesButtonsStyles}>
      <Grid
        container
        columnSpacing={{ xs: 12, md: 12 }}
        //spacing={}
        columns={{ xs: 6, sm: 6, md: 6 }}
        justifyContent="center"
        alignItems={'center'}
      >
        {categories
          ?.filter(category => category.types[0] === 'places')
          .map((category, i) => (
            <Grid
              item
              xs={1}
              sm={1}
              md={1}
              key={i}
              sx={{ margin: categories.length < 6 ? ` 0 5px ` : null }}
            >
              <MarketPlaceTopCategories
                key={category._id}
                label={category.name}
                icons={category.icons}
                onClick={() => onCategoryClicked(category._id)}
              />
            </Grid>
          ))}
      </Grid>
    </div>
  );
}

export default LandingPageCategories;
