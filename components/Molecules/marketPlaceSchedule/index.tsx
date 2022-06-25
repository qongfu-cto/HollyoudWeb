import { Grid } from '@mui/material';
import { FC } from 'react';
import { BorderedBlock } from '../../Organisms/ProfileDetailsStart/Helpers';

import { usePlaceScheduleStyles } from './stylesEN';
import PlaceScheduleDetail from 'components/Molecules/PlaceScheduleDetail';
import { PlacesAdditionalStartProps } from 'components/Organisms/ProfileDetails/types';

type PlaceScheduleProps = Pick<PlacesAdditionalStartProps, 'schedule'>;

const PlaceSchedule: FC<PlaceScheduleProps> = ({ schedule }) => {
  const styles = usePlaceScheduleStyles();
  const today = new Date().getDay();
  const weekDays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ];

  return (
    <BorderedBlock title="Availablity" mobile>
      <Grid container classes={{ root: styles.placeScheduleGrid }}>
        {schedule?.map((s, i) => (
          <Grid item xs={12} sm={12} key={s.day}>
            <PlaceScheduleDetail
              status={s.timings}
              day={weekDays[s.day]}
              isToday={s.day === today}
              open24Hours={s?.open24Hrs}
              closed={s?.closed}
            />
          </Grid>
        ))}
      </Grid>
    </BorderedBlock>
  );
};

export default PlaceSchedule;
