import {Skeleton} from '@mui/material';
import QText from 'components/Atoms/text';
import React from 'react';
import {Branding} from 'utilities/branding';

import {usePlaceCardFooterStylesEN} from './stylesEN';

interface PlaceCardFooterProps {
    buildingType?: string;
    location?: string;
}

function PlaceCardFooter({buildingType, location}: PlaceCardFooterProps) {
    const style = usePlaceCardFooterStylesEN();
    return (
        <>
            {buildingType ? (
                <div className={style.container}>
                    <QText
                        label={buildingType}
                        labelStyle={{color: Branding.Colors.black[86], fontSize: 14}}
                        containerMargin={`0  5px 0 0 `}
                    />
                    <QText label={location} labelStyle={{fontSize: 14}}/>
                </div>
            ) : (
                <Skeleton variant="text" width="40%"/>
            )}
        </>
    );
}

export default PlaceCardFooter;
