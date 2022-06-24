import Image from "next/image";
import HomeIcon from "assets/icons/home.svg";
import SkylineIcon from "assets/icons/skyline.svg";
import FilterSection from "../filterSection";

interface PropertiesFilterProps {
}

const PropertiesFilter: PropertiesFilterProps = ({}) => {
    return (
        <>
            <FilterSection
                title="Type of property"
                name="type"
                variant="buttons"
                buttons={[
                    {
                        label: "Houses",
                        value: "houses",
                        icon: <Image src={HomeIcon}/>,
                    },
                    {
                        label: "Apartments",
                        value: "apartments",
                        icon: <Image src={SkylineIcon} color="inherit"/>,
                    },
                ]}
            />
            <FilterSection
                title="Furnishing"
                name="furnishing"
                variant="buttons"
                buttons={[
                    {
                        label: "Fully Furnished",
                        value: "fully",
                    },
                    {
                        label: "Semi Furnished",
                        value: "semi",
                    },
                    {
                        label: "Unfurnished",
                        value: "unfurnished",
                    },
                ]}
            />
            <FilterSection
                title="Rooms"
                name="rooms"
                variant="selectors"
                selectors={[
                    {label: "Rooms", name: "rooms"},
                    {label: "Bathrooms", name: "bathrooms", value: 3, max: 2},
                    {label: "Parking Slots", name: "parking", value: 3},
                ]}
            />
            <FilterSection
                title="Size"
                name="size"
                variant="slider"
                value={[100, 4000]}
                unit="Sqm"
                min={0}
                max={10000}
            />
            <FilterSection
                title="Prize Range"
                name="Prize Range"
                variant="slider"
                value={[750, 6000]}
                unit="Sqm"
                min={0}
                max={10000}
            />
            <FilterSection
                title="Amenities"
                variant="checkboxes"
                name="Amenities"
                checkboxes={[
                    {
                        label: "Pool",
                        value: "pool",
                        name: "pool",
                    },
                    {
                        label: "Airconditioning",
                        value: "airconditioning",
                        name: "Airconditioning",
                        selected: true,
                    },
                    {label: "Heating", value: "heating", name: "Heating"},
                    {
                        label: "Gym",
                        value: "gym",
                        name: "Gym",
                        selected: true,
                    },
                    {label: "Storage", value: "storage", name: "Storage"},
                    {label: "Elevator", value: "elevator", name: "Elevator"},
                ]}
            />
            <FilterSection
                title="Area of City"
                variant="dropdown"
                name="area"
                options={[
                    {
                        label: "Manama",
                        value: "Manama",
                    },
                    {
                        label: "Riffa",
                        value: "Riffa",
                    },
                    {
                        label: "Muharraq",
                        value: "Muharraq",
                    },
                    {
                        label: "Hamad Town",
                        value: "Hamad Town",
                    },
                ]}
                selected="Manama"
            />
        </>
    );
};

export default PropertiesFilter;
