import React from 'react';
import { Branding } from '../../../utilities/branding';
import BackButton from '../../../assets/icons/back-button.svg';
import CloseButton from '../../../assets/icons/web-close-button.svg';
import Text from '../../Atoms/text';
import QIcon from '../../Atoms/icon';
import { useModalHeaderStylesEN } from './styleEN';

interface ModalHeaderProps {
  title: string;
  subTitle?: string;
  backButton?: boolean;
  closeButton?: boolean;
  onBackButtonClick?: () => void;
  onCloseButtonClick?: () => void;
  newSubtitle?: boolean;
}

const ModalHeader = ({
  title,
  subTitle,
  backButton,
  closeButton,
  onBackButtonClick,
  onCloseButtonClick,
  newSubtitle
}: ModalHeaderProps) => {
  const styles = useModalHeaderStylesEN();
  return (
    <div>
      <div className={styles.layout}>
        {backButton && (
          <>
            <QIcon source={BackButton} click={onBackButtonClick} />
            <div />
          </>
        )}
        {closeButton && (
          <>
            <div />
            <QIcon source={CloseButton} click={onCloseButtonClick} />
          </>
        )}
      </div>

      <div className={styles.container}>
        <Text
          label={title}
          labelStyle={{
            fontSize: 32,
            fontWeight: 'bold'
            // marginBottom: 10
          }}
        />
        {newSubtitle ? (
          <Text
            label={subTitle}
            labelStyle={{
              fontSize: 24,
              marginBottom: 10
            }}
            labelColor={Branding.Colors.black[60]}
          />
        ) : (
          <Text
            label={subTitle}
            labelStyle={{
              fontSize: 16,
              marginBottom: 10,
              marginTop: 10
            }}
            labelColor={Branding.Colors.black[86]}
          />
        )}
      </div>
    </div>
  );
};

export default ModalHeader;
