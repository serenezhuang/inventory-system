import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Icon, Table } from 'semantic-ui-react';

import { decrementTool, deleteTool, incrementTool } from '../../actions';

const Item = (props) => {
    const { id, name, quantity } = props;
    const dispatch = useDispatch();
    const [counter, setCounter] = useState(quantity);

    useEffect(() => {
        setCounter(quantity);
    }, [quantity]);


    const handleIncrementClick = () => {
        setCounter(counter + 1);
        dispatch(incrementTool({id}));
    };

    const handleDecrementClick = () => {
        if (counter === 0) return;
        setCounter(counter - 1);
        dispatch(decrementTool({id}));
    };

    const handleDeleteClick = async () => {
        await dispatch(deleteTool({id}));
    };

    return (
        <Table.Row textAlign="center">
            <Table.Cell>{name}</Table.Cell>
            <Table.Cell>{counter}</Table.Cell>
            <Table.Cell>
                <Button icon positive onClick={handleIncrementClick}>
                    <Icon name="plus" />
                </Button>
            </Table.Cell>
            <Table.Cell>
                <Button icon color="olive" onClick={handleDecrementClick}>
                    <Icon name="minus" />
                </Button>
            </Table.Cell>
            <Table.Cell>
                <Link to={`/tools/${id}`}>
                    <Button>View</Button>
                </Link>
            </Table.Cell>
            <Table.Cell>
                <Link to={`/tools/${id}/edit`}>
                    <Button>Edit</Button>
                </Link>
            </Table.Cell>
            <Table.Cell>
                <Button onClick={handleDeleteClick} icon negative>
                    <Icon name="delete" />
                </Button>
            </Table.Cell>
        </Table.Row>
    );
};

export default Item;
