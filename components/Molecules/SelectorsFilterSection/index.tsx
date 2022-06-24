import {FC} from "react";
import {SpecializedFilterSectionRendererProps} from "../filterDialog/types";
import {FilterOptions, FilterSubtitle, FilterTitle,} from "../filterDialog/filterSection/helpers";
import Selector from "./Selector";

const SelectorsFilterSection: FC<SpecializedFilterSectionRendererProps<"selectors">> = ({title, name, selectors}) => {
    return (
        <>
            <FilterTitle title={title}/>
            <FilterOptions>
                {selectors.map((selector) => {
                    const {label, name: subtitle, max, min, value} = selector;
                    return (
                        <div style={{display: "flex", columnGap: 16}} key={subtitle}>
                            <FilterSubtitle subtitle={label}/>
                            <Selector {...selector} />
                        </div>
                    );
                })}
            </FilterOptions>
        </>
    );
};

export default SelectorsFilterSection;
