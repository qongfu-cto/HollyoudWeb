import {FC, MouseEvent, MouseEventHandler, useState} from "react";
import {Button, Menu, MenuItem} from "@mui/material";
import ArrowDropDownSharpIcon from "@mui/icons-material/ArrowDropDownSharp";
import {isNullable} from "utilities/value";
import {SpecializedFilterSectionRendererProps} from "../filterDialog/types";
import {FilterOptions, FilterTitle,} from "../filterDialog/filterSection/helpers";
import {useFilterSectionContext} from "../../../container/filter";

const DropdownFilterSection: FC<SpecializedFilterSectionRendererProps<"dropdown">> = ({title, name, options}) => {
    const {styles} = useFilterSectionContext();
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
    const [selectedIndex, setSelectedIndex] = useState<number | undefined>();
    const open = Boolean(anchorEl);
    const handleClickListItem: MouseEventHandler<HTMLButtonElement> = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuItemClick = (
        event: MouseEvent<HTMLLIElement, globalThis.MouseEvent>,
        index: number
    ) => {
        setSelectedIndex(index);
        setAnchorEl(null);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <FilterTitle title={title}/>
            <FilterOptions>
                <Button
                    key={name}
                    variant={"outlined"}
                    endIcon={<ArrowDropDownSharpIcon/>}
                    classes={{root: styles.dropdownButton}}
                    onClick={handleClickListItem}
                >
                    {isNullable(selectedIndex)
                        ? "Select an area"
                        : options[selectedIndex!].label}
                </Button>

                <Menu
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        "aria-labelledby": "city-area",
                        role: "listbox",
                    }}
                >
                    {options.map((option, index) => (
                        <MenuItem
                            key={option.value}
                            selected={index === selectedIndex}
                            onClick={(event) => handleMenuItemClick(event, index)}
                        >
                            {option.label}
                        </MenuItem>
                    ))}
                </Menu>
            </FilterOptions>
        </>
    );
};

export default DropdownFilterSection;
