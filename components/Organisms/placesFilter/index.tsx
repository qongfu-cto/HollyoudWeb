import FilterSection from '../filterSection';

interface PlacesFilterProps {}

const PlacesFilter: PlacesFilterProps = ({}) => {
  return (
    <>
      <FilterSection
        title="Options"
        variant="checkboxes"
        name="options"
        checkboxes={[
          {
            label: 'Verified Places Only',
            value: 'verified',
            name: 'verified'
          },
          { label: 'Available', value: 'openNow', name: 'open' }
        ]}
      />
      <FilterSection
        title="Area of City"
        variant="dropdown"
        name="area"
        options={[
          {
            label: 'Manama',
            value: 'Manama'
          },
          {
            label: 'Riffa',
            value: 'Riffa'
          },
          {
            label: 'Muharraq',
            value: 'Muharraq'
          },
          {
            label: 'Hamad Town',
            value: 'Hamad Town'
          }
        ]}
        selected="Manama"
      />
    </>
  );
};

export default PlacesFilter;
