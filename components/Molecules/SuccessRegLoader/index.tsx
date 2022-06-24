import React from 'react';
import { useSuccessRegLoaderStylesEN } from './stylesEn';
import { useGlobalsStylesEn } from '../../../styles/globalStylesEn';
import QButton from '../../Atoms/button';

// Imported Lottie File
import * as animationData from '../../../assets/lotties/Errors/successful-reg.json';
import { Branding } from '../../../utilities/branding';
import LottieAnimation from '../../Atoms/lottie';
import ModalLayout from '../../Atoms/modal';

type SuccessRegLoaderProps = {
  previewOnly?: boolean;
  title?: string;
  message?: string;
  ctaLabel?: string;
  onClick?: () => void;
  openModal: boolean;
};

export const sampleData = {
  title: 'Success!',
  message: 'Your account has been registered!',
  ctaLabel: 'Next'
};

/**
 * SuccessRegLoader
 *
 * Molecule component for registeration purposes.
 *
 * @param title - Optional props for the title.
 * @param message - Optional props for the message body.
 * @param ctaLabel - Optional props for the button label.
 * @param onClick - Optional function when the button is clicked.
 * @param previewOnly - Only used for previewing this component. Do not use.
 */
const SuccessRegLoader = ({
  previewOnly,
  title,
  message,
  ctaLabel,
  onClick,
  openModal
}: SuccessRegLoaderProps) => {
  const useStylesEN = useSuccessRegLoaderStylesEN();
  const useGlobalStyles = useGlobalsStylesEn();

  return (
    <ModalLayout openModal={openModal} modalHeight={500}>
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
              //backgroundColor: Branding.Colors.primary.normal
            }}
            onClick={onClick}
          />
        </div>
      </div>
    </ModalLayout>
  );
};

export default SuccessRegLoader;
