import React from 'react';
import { Container, Grid, Box, makeStyles } from '@material-ui/core';
import PoetCard from './PoetCard';
import { poets } from '../poets.json';

const useStyles = makeStyles((theme) => ({
    itemContainer: {
        marginTop: 8,
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column',
            alignItems: 'center',
        },
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
}));

function Poets() {
    const classes = useStyles();

    return (
        <Box>
            {/* <SearchMenu /> */}
            <Container maxWidth="lg" className={classes.container}>
                <Grid spacing={3} container direction="row" justify="center" xs={12} className={classes.itemContainer}>
                    {poets.map(({ name, photo, description }, i) => (
                        <PoetCard key={i} name={name} photo={photo} index={i}>
                            {description}
                        </PoetCard>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}

export default Poets;
