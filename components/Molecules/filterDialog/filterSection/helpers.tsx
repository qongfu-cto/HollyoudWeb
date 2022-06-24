import {FC} from "react";
import {Variants} from "../types";
import {useFilterSectionContext} from "../../../../container/filter";

interface TitleProps {
    title: string;
}

export const FilterTitle: FC<TitleProps> = ({title}) => {
    const {styles} = useFilterSectionContext();

    return (
        <section className={styles.description}>
            <span className={styles.title}>{title}</span>
        </section>
    );
};

interface SubtitleProps {
    subtitle: string;
}

export const FilterSubtitle: FC<SubtitleProps> = ({subtitle}) => {
    const {styles} = useFilterSectionContext();

    return (
        <section className={styles.subdescription}>
            <span className={styles.subtitle}>{subtitle}</span>
        </section>
    );
};

interface FilterOptionsProps {
}

export const FilterOptions: FC<FilterOptionsProps> = ({children}) => {
    const {styles} = useFilterSectionContext();

    return <section className={styles.filters}>{children}</section>;
};

const verticalLayout: Variants[] = ["checkboxes", "selectors"];
export const isVerticalRenderer = (variant: Variants) =>
    verticalLayout.includes(variant);
