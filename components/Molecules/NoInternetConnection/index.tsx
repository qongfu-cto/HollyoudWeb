import React from 'react';
import { useNoInternetStylesEN } from './stylesEN';
import { useGlobalsStylesEn } from '../../../styles/globalStylesEn';
import QButton from '../../Atoms/button';

// Imported Lottie File
import * as animationData from '../../../assets/lotties/Errors/no_internet.json';

import LottieAnimation from '../../Atoms/lottie';
import { Branding } from '../../../utilities/branding';
import ModalLayout from '../../Atoms/modal';

type NoInternetProps = {
  previewOnly?: boolean;
  title?: string;
  message?: string;
  ctaLabel?: string;
  onClick?: () => void;
};

export const sampleData = {
  title: 'No connection!',
  message: 'Please check  your connection and refresh the page.',
  ctaLabel: 'Ok Thanks!'
};

/**
 * NoInternet
 *
 * Molecule component for the No Internet connection popups.
 *
 * @param title - Optional props for the title.
 * @param message - Optional props for the message body.
 * @param ctaLabel - Optional props for the button label.
 * @param onClick - Optional function when the button is clicked.
 * @param previewOnly - Only used for previewing this component. Do not use.
 */
const NoInternet = ({
  previewOnly,
  title,
  message,
  ctaLabel,
  onClick
}: NoInternetProps) => {
  const useStylesEN = useNoInternetStylesEN();
  const useGlobalStyles = useGlobalsStylesEn();

  return (
    <ModalLayout openModal={true} modalHeight={550}>
      <div className={previewOnly ? useGlobalStyles.popupContainer : ''}>
        <div className={useStylesEN.mainContainer} style={{ width: 448 }}>
          <div className={useStylesEN.lottieContainer}>
            <LottieAnimation
              animationData={animationData}
              height={256}
              width={256}
            />
          </div>
          <h1 className={useStylesEN.header}>{title ?? sampleData.title}</h1>
          <p className={useStylesEN.message}>{message ?? sampleData.message}</p>
          <QButton
            label={ctaLabel ?? sampleData.ctaLabel}
            btnWidth={200}
            style={{
              margin: previewOnly ? '0px auto 8px' : '0px auto'
              // backgroundColor: Branding.Colors.primary.normal
            }}
            onClick={onClick}
          />
        </div>
      </div>
    </ModalLayout>
  );
};

export default NoInternet;
