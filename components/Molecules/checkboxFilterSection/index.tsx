import { FC } from 'react';
import { Grid } from '@mui/material';
import { SpecializedFilterSectionRendererProps } from '../filterDialog/types';
import {
  FilterOptions,
  FilterTitle
} from '../filterDialog/filterSection/helpers';
import { useFilterSectionContext } from '../../../container/filter';
import CheckBox from 'components/Atoms/checkbox';

// const FilterCheckbox: FC<CheckboxProps> = ({
//   label,
//   name,
//   value,
//   selected,
// }) => {
//   const { styles } = useFilterSectionContext();

//   return (
//     <FormControlLabel
//       classes={{
//         root: styles.checkboxLabel,
//       }}
//       control={
//         <Checkbox
//           checked={selected}
//           sx={{
//             color: Branding.Colors.black[36],
//             "&.Mui-checked": {
//               color: Branding.Colors.primary.normal,
//             },
//           }}
//           onChange={(e) => {}}
//           inputProps={{ "aria-label": "controlled" }}
//         />
//       }
//       label={label}
//     />
//   );
// };

const CheckboxFilterSection: FC<SpecializedFilterSectionRendererProps<
  'checkboxes'
>> = ({ title, name, checkboxes }) => {
  const { styles } = useFilterSectionContext();

  const handler = () => {};

  return (
    <>
      <FilterTitle title={title} />
      <FilterOptions>
        <Grid container>
          {checkboxes.map(checkbox => {
            return (
              <Grid item xs={4} key={checkbox.name}>
                <CheckBox
                  checkboxProps={{ checked: checkbox.selected }}
                  {...checkbox}
                />
              </Grid>
            );
          })}
        </Grid>
      </FilterOptions>
    </>
  );
};

export default CheckboxFilterSection;
