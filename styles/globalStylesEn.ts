import {makeStyles} from '@mui/styles';
import {Branding} from '../utilities/branding';

export const useGlobalsStylesEn = makeStyles({
    /**
     * Containers
     */

    // Used as the base layout for all pages
    container: {
        maxWidth: 1200,
        margin: '20px auto 0px',
        padding: 40,
        backgroundColor: '#FFFFFF',
        borderRadius: 24,
        boxShadow: '0px 5px 10px rgba(0,0,0,0.24)',
    },

    // MarkDown Documentation Container
    mdContainer: {
        padding: 20,
        background: 'rgba(0,0,0,0.06)',
        borderRadius: 10,
        color: Branding.Colors.primary.normal
    },

    // Used to enclose each component in the Library Page
    componentReviewContainer: {
        padding: 20,
        border: '2px dotted rgba(0,0,0,0.08)',
        borderRadius: 10
    },

    // Sample Popup Container
    popupContainer: {
        width: 496,
        minHeight: 496,
        borderRadius: 12,
        border: '1px solid ' + Branding.Colors.primary.light,
    },

    /**
     * Texts
     */
    code: {
        background: '#fafafa',
        color: Branding.Colors.black[86],
        borderRadius: 5,
        padding: '0.75rem',
        fontSize: 15, // Was -> '1.1rem',
        fontFamily: 'Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace'
    }
});
