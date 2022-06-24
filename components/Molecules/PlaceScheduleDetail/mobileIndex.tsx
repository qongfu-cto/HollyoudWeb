import { Typography } from '@mui/material';
import moment from 'moment';
import { FC } from 'react';
import { Branding } from 'utilities/branding';
import { fullPageWidth } from 'utilities/utils';
import { usePlaceScheduleStyles } from '../marketPlaceSchedule/stylesEN';

const MobilePlaceScheduleDetail: FC<{
  day: string;
  status: { endTime: string; startTime: string }[];
  isToday?: boolean;
  open24Hours?: boolean;
  closed?: boolean;
}> = ({ day, isToday, status, open24Hours, closed }) => {
  const styles = usePlaceScheduleStyles();
  const width = fullPageWidth();

  return (
    <div className={styles.placeScheduleDetailItem}>
      <Typography
        variant="body2"
        classes={{ root: styles.placeScheduleDetailDay }}
        className={
          isToday ? styles.placeScheduleDetailToday : ''
          //: styles.placeScheduleDetailDayClosed
        }
      >
        {day}
      </Typography>

      {closed ? (
        <Typography
          variant="subtitle2"
          //  classes={{ root: styles.placeScheduleDetailStatus }}
          className={
            isToday ? '#5fb948' : closed ? Branding.Colors.danger.normal : ''
          }
        >
          Closed
        </Typography>
      ) : open24Hours ? (
        <Typography
          variant="subtitle2"
          style={{ color: isToday ? '#5fb948' : '' }}
          // classes={{ root: styles.placeScheduleDetailStatus }}
          //className={isToday ? styles.placeScheduleDetailToday : ''}
        >
          24 hours
        </Typography>
      ) : (
        <div className={styles.hoursContainer}>
          {status.map((state, i) => {
            return (
              <Typography
                key={i}
                variant="subtitle2"
                style={{ color: isToday ? '#5fb948' : '' }}
                // classes={{ root: styles.placeScheduleDetailStatus }}
                //className={isToday ? styles.placeScheduleDetailToday : ''}
              >
                {/* {i === 1 && ', '} */}
                {moment(state?.startTime, 'HH:mm').format('hh:mm a')} -
                {moment(state?.endTime, 'HH:mm').format('hh:mm a')}
              </Typography>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default MobilePlaceScheduleDetail;
