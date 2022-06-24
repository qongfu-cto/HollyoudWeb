import {FC} from "react";
import {IconButton} from "@mui/material";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import RemoveCircleOutlineRoundedIcon from "@mui/icons-material/RemoveCircleOutlineRounded";
import {useFilterSectionContext} from "container/filter";

const selectorIcons = {
    add: AddCircleOutlineRoundedIcon,
    remove: RemoveCircleOutlineRoundedIcon,
};

const SelectorIcon: FC<{
    disabled?: boolean;
    type: keyof typeof selectorIcons;
}> = ({disabled, type}) => {
    const {
        styles: {selectorIcon},
    } = useFilterSectionContext();
    const Icon = selectorIcons[type];
    return (
        <IconButton
            disabled={disabled}
            classes={{
                root: selectorIcon,
            }}
            size="small"
        >
            <Icon fontSize="inherit"/>
        </IconButton>
    );
};

export default SelectorIcon;
