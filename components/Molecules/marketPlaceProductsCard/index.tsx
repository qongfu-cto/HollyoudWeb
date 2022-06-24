import React from 'react';
import QButton from 'components/Atoms/button';
import Img from 'components/Atoms/img';
import QText from 'components/Atoms/text';
import confuse from 'assets/images/confused.svg';
import { useMarketPlaceProductCardStyles } from './style';
import { Branding } from 'utilities/branding';
import { Divider } from '@mui/material';
import { Description, ProductContent } from './helper';
import _ from 'lodash';
import { fullPageWidth } from 'utilities/utils';
import { Products } from 'types/products&services';
import { api } from 'services/userAPI';

interface MarketPlaceProductCardProps {
  handleOpenModal?: VoidFunction;
  product: Products;
}

function MarketPlaceProductsCard({
  handleOpenModal,
  product
}: MarketPlaceProductCardProps) {
  const style = useMarketPlaceProductCardStyles();
  const width = fullPageWidth();
  return (
    <div className={style.container}>
      <section className={style.headContainer}>
        <Img
          imgProps={{
            src: `${api}/products/image?key=${product.cover.image}
            `,
            width: 120,
            height: 90,
            layout: 'fixed'
          }}
        />
        {/* <img
          src={`${api}/profile/uploads/${product?.cover?.image}`}
          //className={`${styles.img}`}
        /> */}
        <div className={style.contentContainer} onClick={handleOpenModal}>
          <ProductContent name={product?.name} price={product?.price} />
        </div>
        <div className={style.buttons}>
          <QButton
            outline
            label="View"
            style={{
              borderRadius: 8,
              margin: `3px 0`,
              borderColor: Branding.Colors.primary.normal
            }}
            labelStyles={{
              fontSize: 12,
              textTransform: 'none',
              color: Branding.Colors.primary.normal
            }}
            onClick={handleOpenModal}
          />
          {/* <QButton
            outline
            label="BUY"
            style={{
              borderRadius: 8,
              margin: `3px 0`
            }}
            labelStyles={{
              fontSize: 12,
              textTransform: 'none'
            }}
          /> */}
        </div>
      </section>

      <section style={{ height: 30, marginTop: 20 }} onClick={handleOpenModal}>
        <Description
          description={_.truncate(product?.shortDescription, { length: 120 })}
        />
      </section>
      <Divider sx={{ width: '95%', margin: `25px 0 0 0` }} />
    </div>
  );
}

export default MarketPlaceProductsCard;
