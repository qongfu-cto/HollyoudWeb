import * as React from 'react';
import { IMaskInput } from 'react-imask';

interface CustomProps {
  onChange: (value: any, maskRef: IMask.InputMask<any>, e?: InputEvent) => void;
  name: string;
}

const NumericInput = React.forwardRef<HTMLElement, CustomProps>(
  function TextMaskCustom(props, ref) {
    const { onChange, ...other } = props;

    return (
      <IMaskInput
        {...other}
        mask="0000 0000"
        definitions={{
          '#': /[1-9]/
        }}
        //inputRef={ref}
        onAccept={onChange}
      />
    );
  }
);

export default NumericInput;
