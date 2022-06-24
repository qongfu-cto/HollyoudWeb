import {makeStyles} from "@mui/styles";

export const useHomeViewHeaderStylesEN = makeStyles({
    icon: {
        position: 'absolute',
        right: 0,
        width: 50,
        height: 50
    },
    homeHeader: {
        display: 'flex',
        position: 'relative',
        flexDirection: 'column',
        justifyContent: 'center',
        width: '100%',
        padding: 16,
    },
    nameSection: {
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        marginBottom: 16,
        minHeight: 50
    },
    titleWrapper: {
        display: 'flex',
        position: 'absolute',
        left: 0,
        width: '100%'
    },
    backIcon: {
        width: 40,
        height: '100%'
    },
    title: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        paddingTop: 2,
        width: '70%',
        height: '100%',
        paddingLeft: 10
    },
});
