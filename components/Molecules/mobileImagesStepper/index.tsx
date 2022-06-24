import * as React from 'react';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import { useTheme } from '@mui/material/styles';
import SwipeableViews from 'react-swipeable-views';
import { api } from 'services/userAPI';
import { useMobileImageSteppersStyles } from './styleEN';
import LikeAndShare from '../likeAndShare';
import { fullPageWidth } from 'utilities/utils';
import { useUserIsLogged } from 'utilities/hook/useUserIsLogged';

function MobileImageStepper({
  images,
  avatar,
  cover,
  like,
  onFavoriteClicked,
  width,
  showLike,
  products
}: {
  images: string[];
  avatar?: string;
  cover: string;
  like?: boolean;
  onFavoriteClicked?: VoidFunction;
  width?: string | number;
  showLike?: boolean;
  products?: boolean;
}) {
  const [activeStep, setActiveStep] = React.useState(0);
  const [step, setStep] = React.useState(0);
  const styles = useMobileImageSteppersStyles();
  const fullWidth = fullPageWidth();
  const theme = useTheme();
  const { isLogged } = useUserIsLogged();
  const maxSteps = 3;
  const imagesArray = [cover, ...images];
  const length = imagesArray?.length - 1;

  const handleStepChange = () => {
    if (step === length) {
      if (imagesArray.length - 1 == 1) {
        return setActiveStep(1);
      }
      setActiveStep(2);
      return;
    } else if (step >= 1) {
      setActiveStep(1);
      return;
    }
    setActiveStep(step);
  };

  React.useEffect(() => {
    handleStepChange();
  }, [step]);

  return (
    <Box
      className={styles.container}
      style={{ width: width ?? fullWidth ?? '100%', padding: 0 }}
    >
      <div style={{ position: 'relative' }}>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={step}
          onChangeIndex={step => setStep(step)}
          enableMouseEvents
        >
          {imagesArray.map((step, index) => {
            return index == 0 ? (
              <>
                {avatar && (
                  <div className={styles.avatarContainer}>
                    <img
                      src={avatar ? `${api}/profile/uploads/${avatar}` : ''}
                      className={`${styles.avatar}`}
                    />
                  </div>
                )}
                {products ? (
                  <img
                    src={`${api}/products/image?key=${step}`}
                    style={{ width: '100% ', height: 272 }}
                    //  className={`${styles.img}`}
                  />
                ) : (
                  <img
                    src={`${api}/profile/uploads/${step}`}
                    style={{ width: '100% ', height: 272 }}
                    //  className={`${styles.img}`}
                  />
                )}
              </>
            ) : (
              <div key={index}>
                {/* {Math.abs(activeStep - index) <= 2 ? ( */}
                {products ? (
                  <img
                    src={`${api}/products/image?key=${step}`}
                    style={{ width: '100% ', height: 272 }}
                    //  className={`${styles.img}`}
                  />
                ) : (
                  <img
                    src={`${api}/profile/uploads/${step}`}
                    style={{ width: '100% ', height: 272 }}
                    //  className={`${styles.img}`}
                  />
                )}

                {/* // ) : null} */}
              </div>
            );
          })}
        </SwipeableViews>
        {showLike && isLogged && (
          <div style={{ position: 'absolute', bottom: 0, right: 0 }}>
            <LikeAndShare like={like} onFavoriteClicked={onFavoriteClicked} />
          </div>
        )}
      </div>
      <Box className={styles.stepper} style={{ width: '100%' }}>
        <MobileStepper
          steps={imagesArray.length < 3 ? imagesArray.length : maxSteps}
          position="static"
          activeStep={activeStep}
          classes={{ dot: styles.dot }}
          sx={{
            backgroundColor: 'transparent'
          }}
          backButton={() => {}}
          nextButton={() => {}}
        />
      </Box>
    </Box>
  );
}

export default MobileImageStepper;
