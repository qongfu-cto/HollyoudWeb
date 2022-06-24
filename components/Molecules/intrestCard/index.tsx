import React, { useState } from 'react';
import { Branding } from '../../../utilities/branding';
import { Tag } from '../../Atoms/tag';
import QText from '../../Atoms/text';
import TextButton from '../../Atoms/textButton';
import { useInterestCardStylesEN } from './styleEN';

interface InterestCardProps {
  interestLabel: string;
  data: { name: string }[];
}

const dummy = [
  'football',
  'chess',
  'go',
  'football',
  'chess',
  'go',
  'football',
  'chess',
  'go',
  'football',
  'chess',
  'go',
  ,
  'football',
  'chess',
  'go',
  'football',
  'chess',
  'go'
];

const InterestCard = ({ interestLabel, data }: InterestCardProps) => {
  const [click, setClick] = useState(false);
  const styles = useInterestCardStylesEN();

  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <QText
          label={interestLabel}
          labelColor={Branding.Colors.black[100]}
          labelStyle={{ fontWeight: 'bold', marginBottom: 10 }}
        />{' '}
        <div className={styles.tagContainer}>
          {data?.slice(0, 6).map((item, index) => (
            <Tag
              tagLabel={item.name}
              key={index}
              onTagClicked={() => setClick(!click)}
              props={{
                variant: click ? 'filled' : 'outlined',
                sx: { padding: 1, margin: 0.5, fontWeight: 'bold' }
              }}
            />
          ))}
        </div>
      </div>
      <div className={styles.button}>
        <TextButton label="Show more" />
      </div>
    </div>
  );
};

export default InterestCard;
