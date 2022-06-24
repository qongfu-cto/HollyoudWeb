import {FC} from 'react';
import {useProfilePageStyles} from '../../Layouts/placePageLayout/stylesEN';

export {default as ProfileDetailsEnd} from '../ProfileDetailsEnd';
export {default as ProfileDetailsStart} from '../ProfileDetailsStart';

export const ProfileDetails: FC = ({children}) => {
    const styles = useProfilePageStyles();

    return <section className={styles.profileDetailsWrapper}>{children}</section>;
};
