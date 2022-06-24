import {createContext, FC, useContext} from "react";
import {useFilterSectionStyles} from "../../components/Molecules/filterDialog/filterSection/stylesEN";

interface FilterSectionContextValue {
    styles: ReturnType<typeof useFilterSectionStyles>;
}

const FilterSectionContext = createContext<FilterSectionContextValue | undefined>(undefined);

export const FilterSectionContextProvider: FC<{
    value: FilterSectionContextValue;
}> = ({value, ...props}) => {
    return <FilterSectionContext.Provider value={value} {...props} />;
};

export const useFilterSectionContext = () => {
    const context = useContext(FilterSectionContext);
    if (!context) {
        throw new Error(
            "It looks like you  forgot wrapping around FilterSectionContext"
        );
    }
    return context;
};
