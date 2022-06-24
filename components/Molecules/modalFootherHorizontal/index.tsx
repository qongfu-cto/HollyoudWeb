import React from 'react';
import { Branding } from '../../../utilities/branding';
import { useModalFooterHorizontalStylesEN } from './styleEN';
import QButton from '../../Atoms/button';

interface ModalFooterHorizontalProps {
  nextButton?: boolean;
  disable: boolean;
  nextButtonHandler: (() => void) | undefined;
  cancelClick?: (() => void) | undefined;
  skipButtonHandler: (() => void) | undefined;
  skip?: boolean;
  nextLabel?: string;
  setShow?: any;
}

const ModalFooterHorizontal = ({
  disable,
  cancelClick,
  nextButtonHandler,
  skip,
  skipButtonHandler,
  nextLabel,
  setShow
}: ModalFooterHorizontalProps) => {
  const styles = useModalFooterHorizontalStylesEN();
  return (
    <div className={styles.container}>
      <QButton
        label="CANCEL"
        outline
        labelStyles={{
          color: Branding.Colors.black[60],
          fontWeight: 'bold'
        }}
        onClick={cancelClick}
        style={{
          // marginBottom: 20,
          width: 208,
          height: 48,
          borderRadius: 12,
          borderWidth: 2,
          borderColor: Branding.Colors.black[60]
        }}
      />
      {skip ? (
        <QButton
          onClick={skipButtonHandler}
          label="SKIP"
          outline
          labelStyles={{
            color: Branding.Colors.primary.normal,
            fontWeight: 'bold'
          }}
          buttonProps={{
            classes: { root: styles.button }
          }}
        />
      ) : (
        <QButton
          onClick={() => {
            nextButtonHandler!();
            setShow(true);
          }}
          label={nextLabel ?? 'NEXT'}
          labelStyles={{
            color: Branding.Colors.white,
            fontWeight: 'bold'
          }}
          btnWidth={200}
          style={{
            borderColor: Branding.Colors.black[6]
          }}
          buttonProps={{
            disabled: disable,
            classes: { root: styles.button, disabled: styles.disable }
          }}
        />
      )}
    </div>
  );
};

export default ModalFooterHorizontal;
