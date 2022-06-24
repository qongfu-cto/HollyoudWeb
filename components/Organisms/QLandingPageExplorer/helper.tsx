import QButton from 'components/Atoms/button';
import React from 'react';
import Img from 'components/Atoms/img';
import { Branding } from 'utilities/branding';

const Button = ({
  title,
  icon,
  border,
  width,
  onClick
}: {
  title: string;
  icon: string;
  border: number;
  width: number;
  onClick: VoidFunction;
}) => {
  return (
    <QButton
      outline
      onClick={onClick}
      label={title}
      style={{
        borderRadius: border,
        border: 0,
        boxShadow: '0 1px 4px rgba(0,0,0,0.2)',
        width: width,
        height: 48,
        marginTop: 50
      }}
      labelStyles={{
        color: Branding.Colors.primary.normal,
        fontSize: 17,
        textTransform: 'none'
      }}
      buttonProps={{
        startIcon: (
          <Img
            imgProps={{
              src: icon,
              width: 48,
              height: 48
            }}
          />
        )
      }}
    />
  );
};
export default Button;
