import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useParams } from 'react-router-dom';
import { Button, Container, Form, Grid, Input} from 'semantic-ui-react'

import { addTool, getTool, updateTool } from '../../actions';

const ToolForm = (props) => {
    const location = useLocation();
    const { pathname } = location;
    const url = pathname.split('/');
    const { id } = useParams();
    const [mode] = useState(url[url.length -1].toLowerCase());
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState('');
    const [error, setError] = useState('');
    const dispatch = useDispatch();
    const tool = useSelector((state) => state.tools.tool);
    const renderExistingName = id ? tool.name : '';
    const renderExistingQuantity = id ? tool.quantity : '';

    useEffect(() => {
        if (id) {
            (async () => {
                dispatch(getTool({id}));
            })();
        };
    }, []);

    const handleNameChange = (e) => {
        setError('');
        setName(e.target.value);
    };

    const handleQuantityChange = (e) => {
        setError('');
        setQuantity(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        let errMsg = '';

        if (mode === 'add') {
            if (!name || !quantity) {
                errMsg = 'You must fill in both fields.';
                setError(errMsg);
            };
            if (!errMsg) {
                await dispatch(addTool({
                    newName: name,
                    newQuantity: quantity,
                }));
            };
        };

        if (mode === 'edit') {
            if (!name && !quantity) {
                errMsg = 'You must update at least one of the fields.';
                setError(errMsg);
            };
            if (name.toLowerCase() === tool.name.toLowerCase()) {
                errMsg = 'The new and old names are the same.'
                setError(errMsg);
            };
            if (parseInt(quantity) === tool.quantity) {
                errMsg = 'You have not updated quantity.';
                setError(errMsg);
            };
            if (!errMsg) {
                await dispatch(updateTool({
                    id,
                    updatedName: name || tool.name,
                    updatedQuantity: quantity || tool.quantity,
                }));
            };
        };
    };


    return (
        <Container style={{ marginTop: "3em" }}>
            <Grid>
                <Grid.Row>
                    <Link to="/">
                        <Button>
                            Show All Tools
                        </Button>
                    </Link>
                </Grid.Row>
            </Grid>
            <Form style={{ marginTop: "3em" }}>
                <h3>{mode === "add" ? "Add Tool" : "Edit Tool"}</h3>
                <small>{error}</small>
                <label>Name:</label>
                <Form.Field
                    name="name"
                    control={Input}
                    type="text"
                    value={name}
                    placeholder={renderExistingName}
                    onChange={handleNameChange}
                />
                <label>Custom Quantity:</label>
                <Form.Field
                    name="quantity"
                    control={Input}
                    type="number"
                    min="0"
                    value={quantity}
                    placeholder={renderExistingQuantity}
                    onChange={handleQuantityChange}
                />
                <Button onClick={handleSubmit} type="submit">Submit</Button>
            </Form>
        </Container>
    )
};

export default ToolForm;
