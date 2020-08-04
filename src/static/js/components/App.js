import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Grid } from 'semantic-ui-react';

import List from './tools/List';
import NotificationBar from './core/NotificationBar';
import SearchBar from './core/SearchBar';
import SortMenu from './core/SortMenu';

const App = () => {
    return (
        <Container columns="equal" style={{ marginTop: "3em" }}>
            <Grid>
                <Grid.Row>
                    <Grid.Column floated="left">
                        <SearchBar />
                    </Grid.Column>
                    <Grid.Column floated="right">
                        <Link to='/tools/add'>
                            <Button>Add</Button>
                        </Link>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            <Grid columns="equal">
                <Grid.Row floated="right">
                    <SortMenu />
                </Grid.Row>
            </Grid>
                <List />
                <NotificationBar />
        </Container>
    );
};

export default App;
