import React from 'react';
import { useMessageViewStylesEN } from './styleEN';
import { Branding } from '../../../utilities/branding';
import Text from '../../Atoms/text';
import QIcon from '../../Atoms/icon';
import check from '../../../assets/icons/checkmark.svg';

interface messageViewProps {
  message?: string;
  time?: string;
  selfMessage?: boolean;
  seen?: boolean;
}

const MessageView = ({
  message,
  time,
  selfMessage,
  seen
}: messageViewProps) => {
  const styles = useMessageViewStylesEN({
    backgroundColor: selfMessage
      ? Branding.Colors.blue.variant_1
      : Branding.Colors.black['6'],
    align: selfMessage ? 'right' : 'left',
    seen: seen ?? false
  });
  return (
    <div className={styles.container}>
      <div className={styles.message}>
        <Text
          label={message}
          labelColor={
            selfMessage ? Branding.Colors.white : Branding.Colors.black['100']
          }
          labelStyle={{ font: 'normal 300 normal 14px/17px Roboto' }}
        />
        <div className={styles.time}>
          <Text
            label={time}
            labelColor={
              selfMessage
                ? Branding.Colors.offWhite
                : Branding.Colors.black['36']
            }
            labelStyle={{ font: 'normal 300 normal 10px/12px Roboto' }}
          />
        </div>
      </div>
      {selfMessage ? (
        <div className={styles.seenIcon}>
          <QIcon
            iconProps={{ width: 8, height: 8, src: check }}
            iconStyle={styles.checkIcon}
          />
        </div>
      ) : null}
    </div>
  );
};

export default MessageView;
