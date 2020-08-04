const sortByAscendingOrder = (field, results) => {
    if (field === 'name') {
        return results.sort((a, b) => {
            if (a[field] < b[field]) return -1;
            if (a[field] > b[field]) return 1;
            return 0;
        });
    } else if (field === 'quantity') {
        return results.sort((a, b) => a[field] - b[field]);
    };
};

const sortByDescendingOrder = (field, results) => {
    if (field === 'name') {
        return results.sort((a, b) => {
            if (a[field] > b[field]) return -1;
            if (a[field] < b[field]) return 1;
            return 0;
        });
    } else if (field === 'quantity') {
        return results.sort((a, b) => b[field] - a[field]);
    };
};

export const defaultSorting = (results) => {
    return sortByAscendingOrder('name', results);
};

export const sortByFieldAndOrder = (field, order, results) => {
    if (order === 'ascending') return sortByAscendingOrder(field, results);
    if (order ==='descending') return sortByDescendingOrder(field, results);
};
