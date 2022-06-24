import React from 'react';
import QRating from 'components/Atoms/Qrating';
import QText from 'components/Atoms/text';
import { Branding } from 'utilities/branding';
import { useMarketPlaceProductCardStyles } from './style';
import _ from 'lodash';
import MobileImageStepper from '../mobileImagesStepper';
import { Products } from 'types/products&services';

function ProductReview({ data }: { data: Products }) {
  return (
    <div>
      <MobileImageStepper
        images={data.images}
        width={430}
        products
        cover={data.cover.image}
      />
      <div style={{ margin: `10px 0` }}>
        <ProductContent name={data.name} price={data.price} />
      </div>

      <Description description={data.description} />
      {data?.specifications?.map((specific, index) => (
        <QText
          key={index}
          labelColor={Branding.Colors.black[60]}
          labelStyle={{
            fontSize: 14,
            marginTop: 20
          }}
          label={`${specific.label} : ${specific.value}`}
        />
      ))}
    </div>
  );
}

export default ProductReview;

export const ProductContent = ({
  name,
  price,
  rate
}: {
  name: string;
  price: string;
  rate?: number;
}) => {
  const style = useMarketPlaceProductCardStyles();

  return (
    <>
      <QRating rate={rate} ratingLabel="4 views" />
      <QText
        label={name}
        labelColor={Branding.Colors.black[86]}
        labelStyle={{
          fontSize: 16,
          fontWeight: 500,
          width: '90%'
        }}
      />
      <div className={style.price}>
        <QText
          label={'Price: '}
          labelColor={Branding.Colors.black[86]}
          labelStyle={{
            fontSize: 14
          }}
        />
        <QText
          label={price}
          labelStyle={{
            fontSize: 16,
            marginLeft: 5
          }}
        />
      </div>
    </>
  );
};

export const Description = ({ description }: { description: string }) => {
  return (
    <QText
      labelColor={Branding.Colors.black[60]}
      labelStyle={{
        fontSize: 14
      }}
      label={description}
    />
  );
};
