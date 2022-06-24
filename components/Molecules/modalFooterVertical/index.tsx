import React from 'react';
import { Branding } from '../../../utilities/branding';
import { useModalFooterVerticalStylesEN } from './styleEN';
import QButton from '../../Atoms/button';
import TextButton from '../../Atoms/textButton';

interface ModalFooterVerticalProps {
  title?: string;
  subTitle?: string;
  nextButton?: boolean;
  nextButtonHandler: () => void;
  cancelClick: () => void;
}

const ModalFooterVertical = ({
  title,
  subTitle,
  nextButton,
  cancelClick,
  nextButtonHandler
}: ModalFooterVerticalProps) => {
  const styles = useModalFooterVerticalStylesEN();
  return (
    <div className={styles.container}>
      <QButton
        onClick={nextButtonHandler}
        label="NEXT"
        buttonProps={{ disabled: nextButton }}
        style={{
          marginBottom: 20,
          width: 208,
          borderRadius: 12,
          borderColor: Branding.Colors.black[6]
        }}
      />

      <TextButton
        label="CANCEL"
        button
        buttonProps={{ onClick: cancelClick }}
      />
    </div>
  );
};

export default ModalFooterVertical;
