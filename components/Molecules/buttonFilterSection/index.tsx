import {FC} from "react";
import {SpecializedFilterSectionRendererProps,} from "../filterDialog/types";
import {FilterOptions, FilterTitle,} from "../filterDialog/filterSection/helpers";
import {Button} from "@mui/material";
import {useFilterSectionContext} from "../../../container/filter";

const ButtonFilterSection: FC<SpecializedFilterSectionRendererProps<"buttons">> = ({title, name, buttons}) => {
    const {styles} = useFilterSectionContext();

    return (
        <>
            <FilterTitle title={title}/>
            <FilterOptions>
                {buttons.map(({label, value, selected, icon}) => {
                    return (
                        <Button
                            key={value}
                            variant={selected ? "contained" : "outlined"}
                            startIcon={icon}
                            classes={{root: styles.button}}
                        >
                            {label}
                        </Button>
                    );
                })}
            </FilterOptions>
        </>
    );
};

export default ButtonFilterSection;
