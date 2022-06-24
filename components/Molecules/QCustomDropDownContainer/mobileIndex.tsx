import React, {useState} from "react";
import {useMobileDropDownStyling} from "./stylesEN";
import {ReactJSXElement} from "@emotion/react/types/jsx-namespace";
import {useHandleResize} from "utilities/hook/useHandleResize";

interface QDropDownArrayProps {
    dropDownContent: {
        id?: number;
        label?: string;
        description?: string;
        image?: any;
    };
}

interface QMobileCustomDropDownListProps {
    categoryProps?: ReactJSXElement;
    searchDropDownItemProps?: ReactJSXElement;
    dropDownArray?: QDropDownArrayProps[];
    fullWidth: boolean;
    onClick?: () => void;
}

/**
 * customDropDownList
 *
 * Mobile dropdown list that is triggered when clicking on the search bar.
 *
 * @param hotspotProps - optional property to add hotspot dropdown
 * @param searchDropDownItemProps - optional property to add search drop down list
 * @param onClick - optional property that adds onClick function to components "/".
 *
 */

const QMobileCustomDropDownContainer = ({
                                            categoryProps,
                                            searchDropDownItemProps,
                                            dropDownArray,
                                            onClick,
                                            fullWidth
                                        }: QMobileCustomDropDownListProps) => {
    const [openHotspots, setOpenHotspots] = useState(false);
    const [width] = useHandleResize();
    const stylesEN = useMobileDropDownStyling({width: width, fullWidth: fullWidth});

    return (
        <div className={stylesEN.parentContainer}>
            {categoryProps}
            {searchDropDownItemProps}
        </div>
    );
};

export default QMobileCustomDropDownContainer;
