import ProfileUpdateLoader from 'components/Molecules/profileUpdateLoader';
import SuccessRegLoader from 'components/Molecules/SuccessRegLoader';
import { useProFile } from 'container/profile';
import { isEmpty } from 'lodash';
import React from 'react';
import ModalLayout from '../../Atoms/modal';
import ModalFooterHorizontal from '../../Molecules/modalFootherHorizontal';
import ModalHeader from '../../Molecules/modalHeader';
import { useProfileEditStylesEN } from './styleEN';

const ProfileEditModal = ({ setShow }: any) => {
  const {
    ProfileModals,
    backButtonHandler,
    skip,
    InactiveNextButton,
    modalCloseHandler,
    showLoading
  } = useProFile();
  const stepper = ProfileModals();
  const styles = useProfileEditStylesEN();

  return (
    <div>
      <ModalLayout
        modalHeight={stepper.height}
        openModal={true}
        handleCloseModal={(event, reason) => {}}
      >
        <div className={styles.container}>
          <ModalHeader
            title={stepper.title}
            subTitle={stepper.subTitle}
            backButton={stepper.headerButton === 'backButton'}
            closeButton={stepper.headerButton === 'closeButton'}
            onBackButtonClick={backButtonHandler}
            onCloseButtonClick={modalCloseHandler}
          />
          <div
            className={styles.stepperContainer}
            style={{
              flexDirection: stepper.direction ?? 'row'
            }}
          >
            {stepper.component}
            {/* {showSuccess && <SuccessRegLoader openModal={showSuccess} message={`${} has been updated.`} />} */}
          </div>

          {!showLoading ? (
            !isEmpty(stepper.title) ? (
              <ModalFooterHorizontal
                nextLabel={stepper.next ? 'NEXT' : 'UPDATE'}
                skip={skip}
                disable={InactiveNextButton}
                nextButtonHandler={stepper.onClick}
                skipButtonHandler={stepper.onSkip}
                cancelClick={modalCloseHandler}
                setShow={setShow}
              />
            ) : null
          ) : (
            <ProfileUpdateLoader label={stepper.title} />
          )}
        </div>
      </ModalLayout>
    </div>
  );
};

export default ProfileEditModal;
