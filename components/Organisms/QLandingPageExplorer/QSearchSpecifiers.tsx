import {FC} from "react";

// atoms components
import QTextButton from "../../Atoms/textButton";

export type QTextButtonTypes = "places" | "properties";

export interface QTextButtonProps {
    id?: QTextButtonTypes;
    label?: string;
}

interface QSearchSpecifiersProps {
    items: QTextButtonProps[];
    selected: QTextButtonTypes;
}

/**
 * QSearchSpecifiers
 *
 * a section that allows users to specifies search type.
 *
 *
 * @param buttons - an array of the buttons that specifies search type
 * @param selected - the currently selected button
 *
 */

const QSearchSpecifiers: FC<QSearchSpecifiersProps> = ({
                                                           items,
                                                           selected = items[0].id,
                                                       }) => {
    const buttons = items?.map((textButtons: QTextButtonProps) => {
        const _selected = selected === textButtons.id;
        const labelColor = _selected ? "3190af" : "4f4f4f";
        return (
            <QTextButton
                key={textButtons.id}
                label={textButtons.label}
                labelColor={labelColor}
                underline={_selected}
            />
        );
    });

    return <>{buttons}</>;
};

export default QSearchSpecifiers;
