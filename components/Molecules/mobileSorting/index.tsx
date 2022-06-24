import QText from 'components/Atoms/text';
import React from 'react';
import sorting from 'assets/icons/sorting.svg';
import arrow from 'assets/icons/dropdown.svg';
import { useMobileSortingStylesEN } from './stylesEN';
import { Branding } from 'utilities/branding';
import _ from 'lodash';

interface MobileSortingProps {
  sort: string;
  open: boolean;
  sortList: {
    label: string;
    subLabel: string;
    sort: string;
    disable: boolean;
  }[];
  onSortMenuClick: VoidFunction;
  onSortingClicked: (sort: string) => void;
}

function MobileSorting({
  sort,
  open,
  sortList,
  onSortMenuClick,
  onSortingClicked
}: MobileSortingProps) {
  const styles = useMobileSortingStylesEN();

  const onListClick = (sort: string, disable: boolean) => {
    if (disable) return;

    onSortingClicked(sort);
  };
  return (
    <div>
      <section className={styles.container} onClick={onSortMenuClick}>
        <QText
          label="Sort Place by"
          iconLeft={sorting}
          labelColor={Branding.Colors.black[36]}
        />
        <QText
          label={_.replace(sort, '-', ' ')}
          iconRight={arrow}
          iconRightStyle={{
            transform: open ? 'rotate(180deg)' : 'rotate(0deg)'
          }}
          labelColor={Branding.Colors.black[86]}
          labelStyle={{
            textTransform: 'capitalize'
          }}
        />
      </section>
      {open &&
        sortList.map((sort, i) => (
          <section
            key={i}
            className={styles.list}
            onClick={() => onListClick(sort.sort, sort.disable)}
          >
            <QText
              label={sort.label}
              labelColor={
                sort.disable
                  ? Branding.Colors.black[60]
                  : Branding.Colors.black[86]
              }
            />
            <QText
              label={sort.subLabel}
              labelStyle={{
                fontSize: 12
              }}
              labelColor={Branding.Colors.black[60]}
            />
          </section>
        ))}
    </div>
  );
}

export default MobileSorting;
