import React from 'react';
import { Card, CardMedia, CardContent, Typography, CardActions, Button, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import classes from '../styles/PoetInfo.module.scss';

function PoetCard({ name, photo, children, index }) {
    return (
        <Grid item>
            <Card className={classes.card}>
                <CardContent className={classes.content}>
                    <Typography className={classes.name} gutterBottom>
                        {name}
                    </Typography>
                    <CardMedia className={classes.media} image={photo} title={name} />
                    <Typography variant="body2" component="p" className={classes.description}>
                        {children}
                    </Typography>
                </CardContent>
                <CardActions className={classes.actions}>
                    <Link to={`/poets/${index}`}>
                        <Button size="small">Узнать больше</Button>
                    </Link>
                </CardActions>
            </Card>
        </Grid>
    );
}

export default PoetCard;
