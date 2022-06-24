import {FC} from 'react';
import QButton from 'components/Atoms/button';
import {Branding} from 'utilities/branding';
import {convertPixelsToRems} from 'utilities/theme';
import {useButtonStyles} from './stylesEN';

export const OutlineButton: FC<{
    label: string;
    onClick: VoidFunction;
    marginTop?: number;
    size?: 'small' | 'medium';
}> = ({label, onClick, marginTop, size = 'medium'}) => {
    const styles = useButtonStyles({marginTop, size});

    return (
        <QButton
            label={label}
            onClick={onClick}
            style={{
                borderRadius: 12
            }}
            labelStyles={{
                color: Branding.Colors.primary.normal,
                fontWeight: 500,
                fontFamily: 'Poppins',
                letterSpacing: 0,
                fontSize: convertPixelsToRems(size === 'small' ? 12 : 18),
                lineHeight: convertPixelsToRems(size === 'small' ? 12 : 18),
                textTransform: 'none',
                margin: 5
            }}
            outline
            buttonProps={{classes: {root: styles.outlineButton}}}
        />
    );
};
