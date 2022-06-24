import QText from 'components/Atoms/text';
import TextButton from 'components/Atoms/textButton';
import React from 'react';
import { Branding } from 'utilities/branding';

function SortText({
  onClickHandler,
  buttonLabel,
  subLabel,
  handleDisable
}: {
  onClickHandler: VoidFunction;
  buttonLabel: string;
  subLabel: string;
  handleDisable?: boolean;
}) {
  return (
    <div>
      <TextButton
        button
        label={buttonLabel}
        buttonProps={{
          onClick: onClickHandler,
          disabled: handleDisable ?? false
        }}
        style={{
          // padding: '0px 0px 0px 0px',
          height: 25,
          color: handleDisable
            ? Branding.Colors.black[60]
            : Branding.Colors.black[86]
        }}
        labelStyles={{
          textTransform: 'none'
        }}
      />
      <QText
        label={subLabel}
        labelColor={Branding.Colors.black[60]}
        labelStyle={{
          fontSize: 12,
          paddingLeft: 8
        }}
      />
    </div>
  );
}

export default SortText;
