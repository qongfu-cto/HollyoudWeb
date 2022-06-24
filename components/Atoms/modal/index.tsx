import React from 'react';
//import { useInputFieldStylesEN } from "./styleEN";
import { Modal, ModalProps } from '@mui/material';
import { useModalLayoutStylesEN } from './styleEN';

type ModalLayoutProps = {
  openModal: boolean;
  handleCloseModal?:
    | ((event: {}, reason: 'backdropClick' | 'escapeKeyDown') => void)
    | undefined;
  children?: React.ReactElement | React.ReactElement[];
  modalProps?: ModalProps;
  modalHeight?: number | string;
  modalWidth?: number | string;
  layoutPadding?: number | string;
  modalStyle?: string;
  borderRadius?: string | number;
};

/**
 * BackTextButton
 *
 * A component that let's the user go back to the previous page
 * or back to the home page.
 *
 * @param label - optional label that defaults to "Back to Home".
 * @param hrefLink - optional "/url" that defaults to home page "/".
 */
const ModalLayout = ({
  openModal,
  handleCloseModal,
  children,
  modalProps,
  modalHeight,
  layoutPadding,
  modalWidth,
  modalStyle,
  borderRadius
}: ModalLayoutProps) => {
  const styles = useModalLayoutStylesEN();
  return (
    <div style={{outline:'none'}}>     
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        className={modalStyle}
        {...modalProps}
      >
        <div className={styles.wrapper}>
          <div
            className={styles.layout}
            style={{
              height: modalHeight,
              padding: layoutPadding,
              width: modalWidth,
              borderRadius: borderRadius
            }}
          >
            {children}
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ModalLayout;
