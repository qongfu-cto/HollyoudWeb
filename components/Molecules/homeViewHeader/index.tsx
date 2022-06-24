import React from 'react';
import { Branding } from '../../../utilities/branding';
import QIcon from '../../Atoms/icon';
import Text from '../../Atoms/text';
import maximize from '../../../assets/icons/maximize.svg';
import minimize from '../../../assets/icons/minimize.svg';
import { userData } from '../../../utilities/interface';
import { onMobile } from '../../../utilities/utils';
import { useHomeViewHeaderStylesEN } from './stylesEN';
import QAvatar from '../../Atoms/avatar';

interface HomeViewHeaderProps {
  data: userData;
  onExpandClick: () => void;
  onBackClick: () => void;
  searchBox: React.ReactElement;
  expandedChat: boolean;
}

/**
 * View to render Chat Popup home view
 * @param data - User data object
 * @param onExpandClick - Click handler for expand button click
 * @param onBackClick - Click handler for back button click
 * @param expandedChat
 * @param searchBox - Search box children to be displayed in home view
 */
const HomeViewHeader = ({
  data,
  onExpandClick,
  onBackClick,
  expandedChat,
  searchBox
}: HomeViewHeaderProps) => {
  const styles = useHomeViewHeaderStylesEN();
  return (
    <div className={styles.homeHeader}>
      <div className={styles.nameSection}>
        <div className={styles.titleWrapper}>
          <QAvatar
            avatar={data?.avatar ?? '../../../assets/images/avatar.png'}
            avatarStyle={{
              width: 40,
              height: 40,
              border: `1px solid ${Branding.Colors.black[16]}`,
              objectFit: 'cover'
            }}
          />
          <div className={styles.title}>
            <Text
              label={'Chatting as'}
              labelColor={Branding.Colors.black['60']}
              labelStyle={{ font: 'normal 300 normal 12px/14px Roboto' }}
            />
            <Text
              label={data.name}
              labelColor={Branding.Colors.primary.normal}
              labelStyle={{ font: 'normal 300 medium 16px/25px Poppins' }}
            />
          </div>
        </div>
        {!expandedChat && !onMobile() ? (
          <QIcon
            iconProps={{
              width: 50,
              height: 50,
              src: expandedChat ? minimize : maximize
            }}
            iconStyle={styles.icon}
            click={onExpandClick}
          />
        ) : null}
      </div>
      {searchBox}
    </div>
  );
};

export default HomeViewHeader;
