import React, { KeyboardEvent, useState } from 'react';
import { useChatInputStylesEN } from './styleEN';
import QIcon from '../../Atoms/icon';
import send from '../../../assets/icons/chat-send.svg';
import attach from '../../../assets/icons/attach.svg';
import { InputFieldOutLined } from '../../Atoms/inputField';
import { Branding } from '../../../utilities/branding';

const inputStyle = {
  width: 'calc(100% - 80px)',
  height: 40,
  borderRadius: 4,
  backgroundColor: Branding.Colors.white
} as object;

interface chatInputProps {
  initialValue: string;
  onSubmit: (text: string) => void;
}

const ChatInput = ({ initialValue, onSubmit }: chatInputProps) => {
  const styles = useChatInputStylesEN();
  const [value, setValue] = useState('');
  return (
    <div className={styles.container}>
      <QIcon
        iconProps={{ width: 40, height: 40, src: attach }}
        iconStyle={styles.leftIcon}
        click={() => {}}
      />
      <InputFieldOutLined
        placeholder={'Type a message...'}
        inputStyle={styles.input}
        disableBorder={true}
        outlinedInputProps={{
          defaultValue: initialValue,
          value: value,
          size: 'medium',
          inputProps: { className: styles.input },
          style: { ...inputStyle },
          type: 'Text',
          onChange: e => {
            setValue(e.target.value);
          },
          onKeyPress: (e: any) => {
            if (e.key === 'Enter') {
              onSubmit(e.target.value);
              setValue('');
            }
          }
        }}
      />
      <QIcon
        iconProps={{ width: 40, height: 40, src: send }}
        iconStyle={styles.rightIcon}
        click={() => {
          onSubmit(value);
          setValue('');
        }}
      />
    </div>
  );
};

export default ChatInput;
