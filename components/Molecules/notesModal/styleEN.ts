import {makeStyles} from '@mui/styles';
import {Branding} from '../../../utilities/branding';


export const useNoteModalStylesEN = makeStyles((props) => ({

    container: {
        height: 250,

        overflowY: 'scroll',
        scrollBehavior: "smooth",
        border: `1px solid ${Branding.Colors.primary.light}`,
        borderRadius: 2,
        padding: 8

    },

}));
