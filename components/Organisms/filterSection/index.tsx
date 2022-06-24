import { FC } from 'react';
import { useFilterSectionStyles } from './stylesEN';

import ButtonFilterSection from '../../Molecules/buttonFilterSection';
import CheckboxFilterSection from '../../Molecules/checkboxFilterSection';
import DropdownFilterSection from '../../Molecules/dropDownFilterSection';
import SelectorsFilterSection from '../../Molecules/SelectorsFilterSection';
import SliderFilterSection from '../../Molecules/sliderFilterSection';

import { FilterSectionContextProvider } from '../../../container/filter';
import { isVerticalRenderer } from 'components/Molecules/filterDialog/filterSection/helpers';
import {
  FilterSectionProps,
  FilterSectionRenderer,
  FilterSectionRenderProps,
  Variants
} from 'components/Molecules/filterDialog/types';

const renderers: Record<Variants, FilterSectionRenderer> = {
  buttons: ButtonFilterSection,
  checkboxes: CheckboxFilterSection,
  dropdown: DropdownFilterSection,
  selectors: SelectorsFilterSection,
  slider: SliderFilterSection
};

const FilterSection: FC<FilterSectionProps> = ({ variant, ...props }) => {
  const styles = useFilterSectionStyles({
    vertical: isVerticalRenderer(variant)
  });
  const Renderer = renderers[variant];

  return (
    <FilterSectionContextProvider value={{ styles }}>
      <div className={styles.container}>
        <Renderer {...(props as FilterSectionRenderProps)} />
      </div>
    </FilterSectionContextProvider>
  );
};

export default FilterSection;
