import React from 'react';
import {useSearchResultsHeadStylesEN} from './stylesEN';
//sampledata
import TabHeader from '../../Molecules/TabHeader';
import ButtonHorizontal from '../../Molecules/ButtonsHorizontal';
import QIcons from '../../Atoms/icon';
import building from '../../../assets/icons/skyline.svg';

//import { samplePropertiesTwo } from './sampledata';

interface SearchResultsHeadProps {
    tabsContent: [];
    filter: () => void;
    map: () => void;
}

const SearchResultsHead = ({
                               tabsContent,
                               filter,
                               map
                           }: SearchResultsHeadProps) => {
    const style = useSearchResultsHeadStylesEN();

    return (
        <div className={style.container}>
            <div className={style.tabContainer}>
                <QIcons source={building} iconStyle={style.icon}/>
                <TabHeader
                    tabsContent={tabsContent}
                    tabsTitle={[
                        {id: 1, label: 'ALL pLaces'},
                        {id: 2, label: 'Public Places'},
                        {id: 3, label: 'Business Places'}
                    ]}
                />
            </div>

            <ButtonHorizontal
                notification={0}
                onClickFilter={filter}
                onClickMap={map}
            />
        </div>
    );
};
export default SearchResultsHead;
