import React from 'react';
import { useDispatch } from 'react-redux';
import { Button } from 'semantic-ui-react';

import { getSortedResults } from '../../actions';

const SortMenu = () => {
    const dispatch = useDispatch();
    let field = 'name';
    let order = 'ascending';

    const handleFieldClick = (e) => {
        field = e.target.name;
        dispatch(getSortedResults(field, order));
    };

    const handleOrderClick = (e) => {
        order = e.target.name;
        dispatch(getSortedResults(field, order));
    };

    return (
        <>
            <Button color="brown" onClick={handleFieldClick} name="name">
                Alphabetical
            </Button>
            <Button color="brown" onClick={handleFieldClick} name="quantity">
                Quantity
            </Button>
            <Button onClick={handleOrderClick} name="ascending">
                Ascending
            </Button>
            <Button onClick={handleOrderClick} name="descending">
                Decending
            </Button>
        </>
    );
};

export default SortMenu;
