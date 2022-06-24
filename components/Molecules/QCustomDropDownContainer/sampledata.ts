// import Image from "next/image";
// import QIcons from "../../Atoms/QIcon";
import BeverlyHillsBahrain from "../../../assets/images/Beverly-Hills_Bahrain.png";
import tower from "../../../assets/images/tower.jpg"

interface dropDownArrayProps {
    id?: number,
    label?: string,
    description?: string,
    image?: any
}

export const HotspotItemList: dropDownArrayProps[] = [
    {
        id: 1,
        label: "Manama",
        description: "city",
        image: BeverlyHillsBahrain
    },
    {
        id: 2,
        label: "Bab Al Bahrain",
        image: tower,
        description: 'Public space'
    },
    {
        id: 3,
        label: "Bahrain International Circuit",
        image: BeverlyHillsBahrain,
        description: 'Sports Venue'
    },
    {
        id: 4,
        label: "Bahrain National Museum",
        image: BeverlyHillsBahrain,
        description: 'Tourist spot'
    },
    {
        id: 5,
        label: "Manama",
        description: "city",
        image: BeverlyHillsBahrain
    },
    {
        id: 6,
        label: "Bab Al Bahrain",
        image: BeverlyHillsBahrain,
        description: 'Public space'
    },
    {
        id: 7,
        label: "Bahrain International Circuit",
        image: BeverlyHillsBahrain,
        description: 'Sports Venue'
    },
    {
        id: 8,
        label: "Bahrain National Museum",
        image: BeverlyHillsBahrain,
        description: 'Tourist spot'
    },

];

export const searchItemList: dropDownArrayProps[] = [
    {
        id: 1,
        label: "Manama",
        description: "Capital Governorate"
    },
    {
        id: 2,
        label: "Al Manhal",
        description: 'East Riffa, Southern Governorate'
    },
    {
        id: 3,
        label: "Al Illahaman",
        description: 'West Riffa, Southern governorate'
    },
    {
        id: 4,
        label: "Manohara",
        description: 'Manama, Capital Governorate'
    },
    {
        id: 5,
        label: "Manama",
        description: "Muharraq Governorate"
    },
    {
        id: 6,
        label: "Manfooriya",
        description: 'Al Seef, Northern Governorate'
    }

];


