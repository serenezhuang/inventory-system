import React from 'react';
import { useDispatch } from 'react-redux';
import { Input } from 'semantic-ui-react';

import { searchToolsByName } from '../../actions';

const SearchBar = () => {
    const dispatch = useDispatch();

    const handleSearchMatch = (e) => {
        dispatch(searchToolsByName(e.target.value));
    };

    return (
        <>
            <Input
                label="Search"
                icon="search"
                placeholder="e.g. Alpha Battery AAA"
                onChange={handleSearchMatch}
                onKeyUp={handleSearchMatch}
                type="text"
            />
        </>
    );
};

export default SearchBar;
