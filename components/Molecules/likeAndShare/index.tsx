import QIcon from 'components/Atoms/icon';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'redux/Reducer/root';
import likeActive from '../../../assets/icons/like-active.svg';
import likeInactive from '../../../assets/icons/like-inactive.svg';
import share from '../../../assets/icons/share.svg';
import { useLikeAndShareStylesEN } from './styleEN';
import { updateMyPlaces } from 'redux/Action/myQloud/myQloudActions';

function LikeAndShare({
  onFavoriteClicked,
  like
}: {
  like?: boolean;
  onFavoriteClicked?: VoidFunction;
}) {
  const style = useLikeAndShareStylesEN();

  return (
    <div className={style.container}>
      <QIcon
        source={like ? likeActive : likeInactive}
        click={onFavoriteClicked}
      />

      {/* // <QIcon source={share}/>  */}
    </div>
  );
}

export default LikeAndShare;
