import { useFilterSectionContext } from 'container/filter';
import { FC } from 'react';
import { isNullable } from 'utilities/value';
import { SelectorProps } from '../filterDialog/types';

import SelectorIcon from './SelectorIcon';

const Selector: FC<SelectorProps> = ({ label, name, max, min, value }) => {
  const { styles } = useFilterSectionContext();
  let removeDisabled = false;
  let addDisabled = false;
  let valueText: string = `${value}`;
  if (isNullable(value)) {
    removeDisabled = true;
    valueText = 'Any';
  } else if (!isNullable(max) && value! >= max!) {
    addDisabled = true;
  }

  return (
    <div className={styles.selector}>
      <SelectorIcon disabled={removeDisabled} type="remove" />
      <span
        className={
          value === undefined
            ? styles.selectorValueDisabled
            : styles.selectorValue
        }
      >
        {valueText}
      </span>
      <SelectorIcon disabled={addDisabled} type="add" />
    </div>
  );
};

export default Selector;
