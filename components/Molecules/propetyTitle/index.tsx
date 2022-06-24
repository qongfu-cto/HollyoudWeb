import QText from 'components/Atoms/text';
import { FC } from 'react';

import { usePropertyTitleStyles } from './stylesEN';

const PropertyTitle: FC<{ title: string; icon?: any }> = ({ title, icon }) => {
  const styles = usePropertyTitleStyles();

  return (
    <div className={styles.item}>
      {/* <span className={styles.smallColorBox} /> */}
      <QText
        iconLeft={icon}
        iconLeftStyle={{
          width: 24,
          height: 24,
          marginRight: 10
        }}
        label={title}
        textProps={{
          variant: 'body2',
          classes: { root: styles.title }
        }}
      />
    </div>
  );
};

export default PropertyTitle;
