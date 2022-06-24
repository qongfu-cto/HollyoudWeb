import Img from 'components/Atoms/img';
import QText from 'components/Atoms/text';
import React from 'react';
import MyPlaces from 'assets/icons/my-places-icon.svg';
import { useProfileCardLayoutStylesEN } from './styleEN';
import { useRouter } from 'next/router';
import { Branding } from 'utilities/branding';
import { useGetCategories } from 'utilities/hook/useGetCategory';

function ProfileButtons({
  icon,
  title,
  onCardClick
}: {
  icon: string;
  title: string;
  onCardClick: VoidFunction;
}) {
  const styles = useProfileCardLayoutStylesEN();

  return (
    <div className={styles.miniCard} onClick={onCardClick}>
      <Img source={icon} container={{ width: 80, height: 80 }} />
      <QText
        label={title}
        labelStyle={{
          fontSize: 18,
          fontWeight: 500
        }}
        labelColor={Branding.Colors.black[86]}
      />
    </div>
  );
}

export const ProfileButtonsArray = () => {
  const { push } = useRouter();
  const { categoryClicked } = useGetCategories();
  return (
    <ProfileButtons
      icon={MyPlaces}
      title="My Places"
      onCardClick={() => {
        push('/home/myplaces');
      }}
    />
  );
};
