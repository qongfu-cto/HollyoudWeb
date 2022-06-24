import { FC } from 'react';
import Image from 'next/image';
import { useReviewStyles } from './stylesEN';
import QText from 'components/Atoms/text';
import { Reviews } from 'types/userProfile';
import moment from 'moment';
import { api } from 'services/userAPI';
import { Avatar } from '@mui/material';

const ReviewSection: FC<Reviews> = ({ user, review, updatedAt }) => {
  const styles = useReviewStyles();

  const date = moment(updatedAt).format('MMMM Do YYYY');
  const time = moment(updatedAt).format('LT');

  function stringToColor(string: string) {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = '#';

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
  }

  function stringAvatar(name: string) {
    return {
      sx: {
        bgcolor: stringToColor(name)
      },
      children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`
    };
  }

  const userName =
    user?.first_name && user?.last_name
      ? `${user?.first_name} ${user?.last_name}`
      : user?.username ?? 'Qloud User';

  console.log({ userName });
  return (
    <section className={styles.reviewContainer}>
      <header className={styles.reviewHeader}>
        {user?.avatar ? (
          user.avatar.includes('https') ? (
            <Avatar src={user.avatar} sx={{ width: 69, height: 69 }} />
          ) : (
            <Image
              src={`${api}/profile/uploads/${user.avatar}`}
              alt={`Profile image of user named ${user.username}`}
              className={styles.avatar}
              height={69}
              width={69}
              layout="fixed"
            />
          )
        ) : (
          <div
            className={styles.avatar}
            style={{
              backgroundColor: stringToColor(userName)
            }}
          >
            <Avatar {...stringAvatar(userName)} />
          </div>
        )}
        <section className={styles.avatarDetails}>
          <QText
            label={userName}
            textProps={{
              variant: 'body1',
              classes: { root: styles.username }
            }}
          />

          <QText
            label={`${time} - ${date}`}
            textProps={{
              variant: 'body2',
              classes: { root: styles.datetime }
            }}
          />
        </section>
      </header>
      <main>
        <QText
          label={review}
          textProps={{
            paragraph: true,
            variant: 'caption',
            classes: { root: styles.reviewText }
          }}
        />
      </main>
    </section>
  );
};

export default ReviewSection;
