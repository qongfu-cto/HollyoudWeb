import Img from 'components/Atoms/img';
import QText from 'components/Atoms/text';
import React from 'react';
import { Branding } from 'utilities/branding';
import confuse from '../../../assets/images/confused.svg';
import { useNotFoundErrorPageStylesEN } from './stylesEN';

function NotFoundErrorPage({
  title,
  subTitle
}: {
  title?: string;
  subTitle?: string;
}) {
  const style = useNotFoundErrorPageStylesEN();
  return (
    <div className={style.container}>
      <Img
        source={confuse}
        container={{ display: 'flex', justifyContent: 'center', width: '100%' }}
      />
      <QText
        label={title ?? 'Are you looking for something specific?'}
        labelColor={Branding.Colors.primary.dark}
        labelStyle={{ fontSize: 24, fontWeight: 'bold' }}
      />
      {subTitle ? (
        <p className={style.text}>{subTitle}</p>
      ) : (
        <p className={style.text}>
          Need more help? Contact our{' '}
          <a href="" className={style.helpdesk}>
            Helpdesk
          </a>{' '}
          for assistance in your search!
        </p>
      )}
    </div>
  );
}

export default NotFoundErrorPage;
