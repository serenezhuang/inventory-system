import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams, withRouter } from 'react-router-dom';
import { Button, Container, Grid, Table } from 'semantic-ui-react';

import { deleteTool, getTool } from '../../actions';

const Details = (props) => {
    const dispatch = useDispatch();
    const tool = useSelector((state) => state.tools.tool);
    const { id } = useParams();

    useEffect(() => {
        (async () => {
            await dispatch(getTool({ id }));
        })();
    }, []);

    const handleButtonClick = async () => {
        const { history } = props;
        await dispatch(deleteTool({id}));
        history.push('/');
    };

    return (
        <Container style={{ marginTop: "3em" }}>
            <Grid>
                <Grid.Row>
                    <Link to='/'>
                        <Button>Show All Tools</Button>
                    </Link>
                    <Link to={`/tools/${id}/edit`}>
                        <Button>Edit</Button>
                    </Link>
                    <Button negative onClick={handleButtonClick}>Delete</Button>
                </Grid.Row>
            </Grid>
            <Table>
                <Table.Header textAlign="center">
                    <Table.Row textAlign="center">
                        <Table.HeaderCell>Name</Table.HeaderCell>
                        <Table.HeaderCell>Quantity</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    <Table.Row textAlign="center">
                        <Table.Cell>{tool.name}</Table.Cell>
                        <Table.Cell>{tool.quantity}</Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
        </Container>
    );
};

export default Details;
