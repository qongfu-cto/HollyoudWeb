import React from 'react';
import {useDropDownStyling} from './stylesEN';
import _ from 'lodash';
import {HotspotItemList} from './sampledata';
import Image from 'next/image';

interface QDropDownArrayProps {
    dropDownContent: {
        id?: number;
        label?: string;
        description?: string;
        image?: any;
    };
}

interface QCustomDropDownListProps {
    dropDownArray?: QDropDownArrayProps[];
    onClick?: () => void;
}

const HotspotItems = ({dropDownArray, onClick}: QCustomDropDownListProps) => {
    const stylesEN = useDropDownStyling();

    return (
        <div>
            <h3 className={stylesEN.hotspotHeaderStyles}> Hotspots in Bahrain </h3>
            <div className={stylesEN.hotspotContentFlowStyling}>
                {(!_.isUndefined(dropDownArray) &&
                    !_.isEmpty(dropDownArray) &&
                    _.isNull(dropDownArray)
                        ? dropDownArray
                        : HotspotItemList
                ).map(hotspotItem => (
                    <div
                        key={hotspotItem.id}
                        className={stylesEN.containerStyling}
                        onClick={() => {
                        }}
                    >
                        <div className={stylesEN.hotspotImageStyling}>
                            <Image
                                objectFit={'cover'}
                                width={'100%'}
                                height={'100%'}
                                layout="intrinsic"
                                src={hotspotItem.image}
                                alt=""
                            />
                        </div>
                        <div className={stylesEN.textContainerStyling}>
                            <p className={stylesEN.hotspotLabelStyling}>
                                {_.truncate(hotspotItem.label, {length: 30})}
                            </p>
                            <p className={stylesEN.hotspotDescriptionStyling}>
                                {hotspotItem.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HotspotItems;
