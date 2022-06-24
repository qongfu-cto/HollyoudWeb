import React from 'react';
import { useSignupSubmitLoaderStylesEN } from './stylesEn';
import { useGlobalsStylesEn } from '../../../styles/globalStylesEn';

// Imported Lottie File
import * as animationData from '../../../assets/lotties/loaders/signup_submit_loader.json';
import LottieAnimation from '../../Atoms/lottie';
import ModalLayout from '../../Atoms/modal';

type MobileCityLoaderProps = {
  previewOnly?: boolean;
  title?: string;
  message?: string;
  openModal: boolean;
  width?: number;
};

export const sampleData = {
  title: 'Please wait',
  message: 'We are submitting your registeration to the server'
};

/**
 * SignupSubmitLoader
 *
 * Molecule component for the signing up submitting popups.
 *
 * @param title - Optional props for the title.
 * @param message - Optional props for the message body.
 * @param previewOnly - Only used for previewing this component. Do not use.
 */
const MobileCityLoader = ({
  previewOnly,
  title,
  message,
  openModal,
  width
}: MobileCityLoaderProps) => {
  const useStylesEN = useSignupSubmitLoaderStylesEN();
  const useGlobalStyles = useGlobalsStylesEn();
  return (
    <ModalLayout openModal={openModal} modalWidth={300} modalHeight={300}>
      <div className={useStylesEN.mobileMainContainer}>
        <LottieAnimation
          animationData={animationData}
          height={200}
          width={200}
        />

        <h1 className={useStylesEN.mobileHeader}>
          {title ?? sampleData.title}
        </h1>
        <p className={useStylesEN.message}>{message ?? sampleData.message}</p>
      </div>
    </ModalLayout>
  );
};

export default MobileCityLoader;
