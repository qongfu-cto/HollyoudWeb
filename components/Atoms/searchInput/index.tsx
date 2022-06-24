import React from 'react';

import {Autocomplete} from '@mui/material';
import {InputFieldOutLined} from '../inputField';
import {useSearchInputStylesEN} from './styleEN';

type searchInputProps = {
    searchOptions: [];
};

/**
 * BackTextButton
 *
 * A component that let's the user go back to the previous page
 * or back to the home page.
 *
 * @param label - optional label that defaults to "Back to Home".
 * @param hrefLink - optional "/url" that defaults to home page "/".
 */
const SearchInput = ({searchOptions}: searchInputProps) => {
    const styles = useSearchInputStylesEN();
    return (
        // eslint-disable-next-line @next/next/link-passhref
        <Autocomplete
            fullWidth
            options={searchOptions}
            renderInput={params => (
                <InputFieldOutLined
                    borderRadius={12}
                    inputStyle={styles.input}
                    //  placeholder="Search here..."
                    outlinedInputProps={{
                        type: 'search',
                        size: 'small',
                        fullWidth: true
                    }}
                />
            )}
        />
    );
};

export default SearchInput;
