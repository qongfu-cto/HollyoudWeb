import { FC } from 'react';
import {
  Button,
  IconButton,
  Typography,
  Box,
  Checkbox,
  FormGroup,
  FormControlLabel
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useFilterDialogStyles } from './stylesEN';
import ModalLayout from '../../Atoms/modal';
import PropertiesFilter from '../../Organisms/propertyFilter';
import PlacesFilter from '../../Organisms/placesFilter';
import QText from 'components/Atoms/text';
import { Branding } from 'utilities/branding';
import { CustomizesTag } from 'components/Atoms/tag';

type Props = {
  open: boolean;
  onClose: VoidFunction;
  onApply: VoidFunction;
  variant: SearchTypes;
  searchResults: any;
  checked: any;
  handleChecked: (event: any) => void;
  data: any;
  handleDeleteSelection: (tag: any) => void;
  resetSelection: (action: any) => void;
  setShowSelection: any;
};

// const filterRenderers = {
//   places: PlacesFilter,
//   properties: PropertiesFilter
// };

const FilterLayout: FC<Props> = ({
  open,
  onClose,
  variant,
  onApply,
  resetSelection,
  searchResults,
  checked,
  handleChecked,
  data,
  handleDeleteSelection,
  setShowSelection
}) => {
  const styles = useFilterDialogStyles();
  const propertiesCount = searchResults.total;
  console.log('searchResults', searchResults);

  const clearFilters = () => {
    // data?.length = 0;
  };

  // const Renderer = filterRenderers[variant];
  // const Renderer = filterRenderers.properties;
  // const Renderer = filterRenderers.places;

  return (
    <section>
      <ModalLayout
        openModal={open}
        handleCloseModal={onClose}
        modalStyle={styles.modal}
        modalHeight={variant == 'place' ? 'auto' : 600}
        modalWidth={720}
        layoutPadding={0}
      >
        {/* <Modal open={open} onClose={onClose}>
        <div className={styles.container}> */}
        <>
          <header className={styles.header}>
            <IconButton classes={{ root: styles.closeIcon }} onClick={onClose}>
              <CloseIcon />
            </IconButton>
            <span className={styles.title}>Filter</span>
          </header>
          <main className={styles.content}>
            {/* TODO EMAN show open now Filter desktop */}
            <Box className={styles.column}>
              <QText
                label="Options"
                labelStyle={{
                  fontSize: 20,
                  textAlign: 'left',
                  fontFamily: 'Outfit',
                  color: Branding.Colors.primary.dark,
                  /// fontWight: '500',
                  letterSpacing: '0.19px',
                  marginTop: 20,
                  marginBottom: 20
                }}
              />
              <FormGroup row>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={checked.Verified}
                      onChange={handleChecked}
                      inputProps={{ 'aria-label': 'controlled' }}
                      name="Verified"
                      disabled
                    />
                  }
                  label="Verified Places Only"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={checked.open}
                      onChange={handleChecked}
                      inputProps={{ 'aria-label': 'controlled' }}
                      name="open"
                    />
                  }
                  label="Available"
                />
              </FormGroup>
            </Box>
            <Box className={styles.row}>
              <QText
                label="Area or City"
                labelStyle={{
                  fontSize: 20,
                  textAlign: 'left',
                  fontFamily: 'Outfit',
                  color: Branding.Colors.primary.dark,
                  // fontWight: '500',
                  letterSpacing: '0.19px',
                  marginTop: 20,
                  marginBottom: 20
                }}
              />
              <Box
                className={
                  data.length === 0
                    ? styles.noSelectionContainer
                    : styles.selectionContainer
                }
              >
                <Box className={styles.selection}>
                  {data.length === 0 ? (
                    <QText
                      label="Select an Area or a City"
                      labelStyle={{
                        fontSize: 16,
                        textAlign: 'left',
                        fontFamily: 'Roboto',
                        color: Branding.Colors.black[36],
                        letterSpacing: '-0.38px'
                      }}
                    />
                  ) : (
                    data?.map((item: any, index: any) => (
                      <CustomizesTag
                        tagLabel={item.name}
                        key={index}
                        onTagClicked={() => handleDeleteSelection(item)}
                        props={{
                          sx: {
                            //margin: 0.5,
                            borderRadius: 1,
                            backgroundColor: Branding.Colors.white,
                            border:
                              '1px solid ' + Branding.Colors.primary.normal,
                            '& .MuiChip-label': {
                              color: Branding.Colors.primary.normal
                            },
                            '& .MuiChip-deleteIcon': {
                              color: Branding.Colors.primary.normal
                            }
                          }
                        }}
                      />
                    ))
                  )}
                </Box>
                <Box>
                  <Button
                    onClick={() => setShowSelection(true)}
                    variant={'contained'}
                    classes={{ root: styles.selectionButton }}
                    disableRipple
                  >
                    {data?.length === 0 ? 'SELECT' : 'MODIFY'}
                  </Button>
                </Box>
              </Box>
            </Box>
          </main>

          <footer className={styles.footer}>
            <Button
              variant="contained"
              size="large"
              classes={{ root: styles.clearButton }}
              onClick={() => resetSelection('reset')}
            >
              Reset Filter
            </Button>
            <Typography
              variant="body2"
              color="#5D5D5D"
              fontWeight={500}
              fontSize={18}
              fontFamily="Outfit"
              // lineHeight="23px"
              sx={{ marginTop: 3 }}
            >
              {propertiesCount > 1000
                ? '1000+ Places'
                : propertiesCount + 'Places'}
            </Typography>
            <Button
              variant="contained"
              size="large"
              classes={{ root: styles.applyButton }}
              onClick={onApply}
            >
              Apply Filters
            </Button>
          </footer>
        </>
      </ModalLayout>
    </section>
  );
};

export default FilterLayout;
