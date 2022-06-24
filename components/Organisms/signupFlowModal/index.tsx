import React from 'react';
import { useAuthentication } from '../../../container/authentication';
import ModalLayout from '../../Atoms/modal';
import Toast from '../../Atoms/toast';
import ModalFooterVertical from '../../Molecules/modalFooterVertical';
import ModalHeader from '../../Molecules/modalHeader';
import { useSignupFlowStylesEN } from './styleEN';

type SignupFlowModalProps = { openModal: boolean };
const SignupFlowModal = ({ openModal }: SignupFlowModalProps) => {
  const styles = useSignupFlowStylesEN();
  const {
    InactiveNextButton,
    SignUpModalCloseHandler,
    signupFlowStepper,
    updateProfileWithPhoneNumber,
    backButtonHandler
  } = useAuthentication();

  const stepper = signupFlowStepper();
  return (
    <div>
      <ModalLayout
        openModal={openModal}
        handleCloseModal={(event, reason) => {}}
      >
        {stepper.error ? (
          <Toast text={stepper.error} error margin={`10px 0 0 0`} />
        ) : (
          <div />
        )}

        <div className={styles.container}>
          <ModalHeader
            title={stepper.title}
            subTitle={stepper.subTitle}
            backButton={stepper.headerButton === 'backButton'}
            closeButton={stepper.headerButton === 'closeButton'}
            onBackButtonClick={backButtonHandler}
          />
          {stepper.component}
          <ModalFooterVertical
            nextButtonHandler={updateProfileWithPhoneNumber}
            nextButton={InactiveNextButton}
            cancelClick={SignUpModalCloseHandler}
          />
        </div>
      </ModalLayout>
    </div>
  );
};

export default SignupFlowModal;
