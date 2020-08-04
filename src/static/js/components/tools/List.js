import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Table } from 'semantic-ui-react';

import Item from './Item';
import { getTools } from '../../actions';

const List = () => {
    const dispatch = useDispatch();
    const results = useSelector((state) => state.tools.results);

    useEffect(() => {
        (async () => await dispatch(getTools()))();
    }, []);

    return (
        <Table>
            <Table.Header>
                <Table.Row textAlign="center">
                    <Table.HeaderCell>Name</Table.HeaderCell>
                    <Table.HeaderCell>Quantity</Table.HeaderCell>
                    <Table.HeaderCell>Increment</Table.HeaderCell>
                    <Table.HeaderCell>Decrement</Table.HeaderCell>
                    <Table.HeaderCell>View</Table.HeaderCell>
                    <Table.HeaderCell>Edit</Table.HeaderCell>
                    <Table.HeaderCell>Delete</Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {results.map((tool, i) => {
                    return <Item
                        key={tool.id}
                        id={tool.id}
                        name={tool.name}
                        quantity={tool.quantity}
                    />
                })}
            </Table.Body>
        </Table>
    );
};

export default List;
