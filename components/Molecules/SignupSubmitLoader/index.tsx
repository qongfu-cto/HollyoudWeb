import React from 'react';
import { useSignupSubmitLoaderStylesEN } from './stylesEn';
import { useGlobalsStylesEn } from '../../../styles/globalStylesEn';

// Imported Lottie File
import * as animationData from '../../../assets/lotties/loaders/signup_submit_loader.json';
import LottieAnimation from '../../Atoms/lottie';
import ModalLayout from '../../Atoms/modal';

type SignupSubmitLoaderProps = {
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
const SignupSubmitLoader = ({
  previewOnly,
  title,
  message,
  openModal,
  width
}: SignupSubmitLoaderProps) => {
  const useStylesEN = useSignupSubmitLoaderStylesEN();
  const useGlobalStyles = useGlobalsStylesEn();
  return (
    <ModalLayout openModal={openModal}>
      <div className={previewOnly ? useGlobalStyles.popupContainer : ''}>
        <div
          className={useStylesEN.mainContainer}
          style={{ width: width ?? 448 }}
        >
          <div className={useStylesEN.lottieContainer}>
            <LottieAnimation
              animationData={animationData}
              height={256}
              width={256}
            />
          </div>
          <h1 className={useStylesEN.header}>{title ?? sampleData.title}</h1>
          <p className={useStylesEN.message}>{message ?? sampleData.message}</p>
        </div>
      </div>
    </ModalLayout>
  );
};

export default SignupSubmitLoader;
