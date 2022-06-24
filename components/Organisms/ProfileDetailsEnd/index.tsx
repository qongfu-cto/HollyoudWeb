import { Card, CardContent, Typography } from '@mui/material';
import { FC, useEffect, useState } from 'react';
import { useProfileDetailsEndStyles } from './stylesEN';
import { Branding } from 'utilities/branding';
import MarketPlaceProductsCard from 'components/Molecules/marketPlaceProductsCard';
import QText from 'components/Atoms/text';
import TextButton from 'components/Atoms/textButton';
import ModalLayout from 'components/Atoms/modal';
import QIcon from 'components/Atoms/icon';
import close from 'assets/icons/search_clear.svg';
import back from 'assets/icons/back-button.svg';
import ProductReview from 'components/Molecules/marketPlaceProductsCard/helper';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/Reducer/root';
import MarketPlaceProfileMap from 'components/Molecules/marketplaceProfileMap';
import { CommonEndProps } from '../ProfileDetails/types';

const ProfileDetailsEnd = ({
  location,
  address,
  mapImage,
  type
}: CommonEndProps) => {
  const styles = useProfileDetailsEndStyles();
  const [openModal, setOpenModal] = useState(false);
  const [openReviewModal, setOpenReviewModal] = useState<{
    value: boolean;
    data: any;
  }>({
    value: false,
    data: {}
  });
  const { products } = useSelector((state: RootState) => ({
    products: state.app.products
  }));

  const handleOpenModal = (data: {}) => {
    setOpenModal(true);
    setOpenReviewModal({ value: true, data });
  };

  return (
    <section className={styles.container}>
      <Card classes={{ root: styles.card }} style={{ marginTop: -24 }}>
        <CardContent style={{ paddingBottom: 0 }}>
          {/* {products.length ? (
            <>
              <div className={styles.header}>
                <QText
                  label="Our Products"
                  labelStyle={{
                    fontSize: 32,
                    fontWeight: 500
                  }}
                  labelColor={Branding.Colors.primary.dark}
                />
                <TextButton
                  label="See all"
                  labelStyles={{
                    fontSize: 18
                  }}
                  onClick={() => {
                    setOpenModal(true),
                      setOpenReviewModal({ value: false, data: {} });
                  }}
                />
              </div>
              {products?.slice(0, 3).map((product, index) => (
                <MarketPlaceProductsCard
                  key={index}
                  handleOpenModal={() => handleOpenModal(product)}
                  product={product.productData}
                />
              ))}
            </>
          ) : (
            <MarketPlaceProfileMap
              {...{
                address,
                mapImage,
                type,
                location,
                noDivider: true,
                MapInCenter: true
              }}
            />
          )} */}
            <MarketPlaceProfileMap
              {...{
                address,
                mapImage,
                type,
                location,
                noDivider: true,
                MapInCenter: true
              }}
            />
        </CardContent>
      </Card>

      <ModalLayout
        modalHeight={656}
        // modalWidth={modalWidth}
        openModal={openModal}
        // layoutPadding={layoutPadding}
        // borderRadius={mobile ? 0 : 12}
      >
        <div className={styles.header}>
          <QText
            label="Our Products"
            labelStyle={{
              fontSize: 32,
              fontWeight: 500
            }}
            labelColor={Branding.Colors.primary.dark}
          />
          <QIcon source={close} click={() => setOpenModal(false)} />
        </div>

        <div className={styles.scroll}>
          {products?.map((product, index) => (
            <MarketPlaceProductsCard
              key={index}
              handleOpenModal={() => handleOpenModal(product)}
              product={product.productData}
            />
          ))}
        </div>
        <ModalLayout
          modalHeight={656}
          // modalWidth={modalWidth}
          openModal={openReviewModal.value}
          // layoutPadding={layoutPadding}
          // borderRadius={mobile ? 0 : 12}
        >
          <div className={styles.header}>
            <QText
              label="Our Products"
              labelStyle={{
                fontSize: 18
              }}
              labelColor={Branding.Colors.black[60]}
              iconImageLeft={
                <QIcon
                  source={back}
                  click={() => setOpenReviewModal({ value: false, data: {} })}
                />
              }
            />
            <QIcon source={close} click={() => setOpenModal(false)} />
          </div>
          <div className={styles.scroll}>
            <ProductReview data={openReviewModal.data} />
          </div>
        </ModalLayout>
      </ModalLayout>
    </section>
  );
};

export default ProfileDetailsEnd;
